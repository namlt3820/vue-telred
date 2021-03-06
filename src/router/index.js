import Vue from 'vue';
import Router from 'vue-router';
import paths from './paths';

Vue.use(Router);
function route(path, view, name, meta, children, folder) {
    return {
        name: name || view,
        path,
        meta,
        component: resovle => {
            return folder
                ? import(`@/views/${folder}/${view}.vue`).then(resovle)
                : import(`@/views/${view}.vue`).then(resovle);
        },
        children: children
            ? children.map(item => route(item.path, item.view, item.name, item.meta, item.children, folder))
            : []
    };
}
const router = new Router({
    mode: 'history',
    base: process.env.VUE_APP_BASE_URL || '/',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: paths.map(path => route(path.path, path.view, path.name, path.meta, path.children, path.folder))
});
router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
});
export default router;
