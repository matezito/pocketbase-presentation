import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import Create from '../components/posts/Create.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login},
    { path: '/register', name: 'Register', component: Register},
    { path: '/create', name: 'Create', component: Create},
];

const router = createRouter({
    history: createWebHashHistory(), 
    routes,
});

export default router;