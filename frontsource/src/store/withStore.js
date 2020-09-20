import { createNamespacedHelpers } from 'vuex';

export default (module) => {
  return (config) => {
    const every = (module) => {
      let { name, state, mutation, action } = module;
      const store = createNamespacedHelpers(name);
      if (state) {
        if (typeof state === 'string') {
          state = Array.of(state);
        }
        const { mapState } = store;
        const { computed } = config;
        config.computed = {
          ...mapState(state),
          ...(computed || {}),
        };
      }

      if (mutation || action) {
        if (mutation && typeof mutation === 'string') {
          mutation = Array.of(mutation);
        }

        if (action && typeof action === 'string') {
          action = Array.of(action);
        }
        const { mapMutations, mapActions } = store;
        const { methods } = config;
        config.methods = {
          ...(mutation ? mapMutations(mutation) : {}),
          ...(action ? mapActions(action) : {}),
          ...(methods || {}),
        };
      }
    };

    if (Array.isArray(module)) {
      module.forEach((m) => every(m));
    } else {
      every(module);
    }

    return config;
  };
};
