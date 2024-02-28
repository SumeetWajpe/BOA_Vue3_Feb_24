import router from "../router";
import store from "../store/store";
export function registerPlugins(app) {
  app.use(router).use(store);
}
