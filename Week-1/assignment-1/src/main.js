import Vue from "vue";
import App from "./App.vue";
import { routes } from "./routes";
import VueRouter from "vue-router";


Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");
