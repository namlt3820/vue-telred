export default [
    {
        path: '/landing',
        name: 'Home Page',
        view: 'Home',
        meta: {
            page_id: 1
        }
    },
    {
        path: '/about',
        name: 'About Page',
        view: 'About',
        meta: {
            page_id: 2
        }
    },
    { path: '*', redirect: '/landing' }
];
