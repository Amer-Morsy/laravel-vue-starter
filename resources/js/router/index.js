import { createRouter, createWebHistory } from "vue-router";
import vendorsIndex from "../components/vendors/index.vue";

import notFound from "../components/NotFound.vue";

const routes = [
    {
        path: "/",
        component: vendorsIndex,
    },

    {
        path: "/:pathMatch(.*)*",
        component: notFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
