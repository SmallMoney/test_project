import axios from 'axios';
import { Message } from 'element-ui';

const baseURL = '/';
const HTTP_METHOD = ['get', 'post', 'put', 'delete'];

const service = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

// 错误处理函数
const err = (error) => {
  if (error.response) {
    const data = error.response.data;
    if (error.response.status === 401) {
      Message.error('token失效，请重新登陆');
      // 重定向到登陆页
      location.href = '/login';
    } else {
      Message.error(data.message || data.msg);
    }
  }
  return Promise.reject(error);
};

// request interceptor(请求拦截器)
service.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    // 让每个请求携带自定义 token 请根据实际情况自行修改
    config.headers['token'] = token;
  }
  return config;
}, err);

// response interceptor（接收拦截器）
service.interceptors.response.use((response) => {
  const res = response.data;
  if (res.code !== 0 && res.code !== 200) {
    // 401:未登录;
    if (res.code === 401 || res.code === 403 || res.code === 999) {
      Message.error('token失效，请重新登陆');
      location.href = '/login';
    } else {
      Message.error(res.message || res.msg);
    }
    return Promise.reject(response.error);
  } else {
    return res;
  }
}, err);

const serviceHelper = ((service) => {
  const help = (config, type, result = {}) =>
    Object.keys(config).reduce((result, current) => {
      if (typeof config[current] === 'string') {
        if (~config[current].search(':')) {
          result[current] = (params) => {
            let rest = params.__rest__;
            delete params.__rest__;
            return service[type](
              config[current].replace(/:\w*/g, function ($1) {
                return rest[$1.substr(1)];
              }),
              params
            );
          };
        } else {
          result[current] = (params) => service[type](config[current], params);
        }
      } else {
        result[current] = config[current];
      }
      return result;
    }, result);

  const helper = (config) =>
    Object.keys(config).reduce((result, type) => {
      return help(config[type], type, result);
    }, {});

  HTTP_METHOD.forEach((method) => {
    helper[method] = (config) => help(config, method);
  });

  helper.service = service;

  return helper;
})(service);

const context = require.context('./', false, /^\.\/(?!index)[^/]*\.js$/);
const apis = context.keys().reduce((apis, key) => {
  const name = key.replace(/(^\.\/|\.js$)/g, '');
  const api = context(key).default;
  apis[name] = api(serviceHelper);
  return apis;
}, {});

export default {
  ...apis,
};
