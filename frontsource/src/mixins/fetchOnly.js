export default (which) => ({
  data() {
    return {
      [`${which}`]: {
        loading: false,
        columns: [],
        data: [],
      },
    };
  },

  created() {
    typeof this[`${which}BeforeHook`] === 'function' && this[`${which}BeforeHook`]();
    typeof this[`${which}Columns`] && (this[`${which}`].columns = this[`${which}Columns`]());
    this[`${which}Fetch`]();
  },

  methods: {
    async [`${which}Fetch`]() {
      const $which = this[`${which}`];
      $which.loading = true;

      const result = await this[`${which}FetchList`]();
      const { data } = result;
      $which.data = data;

      $which.loading = false;

      return result;
    },
  },
});
