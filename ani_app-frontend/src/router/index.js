import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from '@/components/testing/HelloWorld.vue';
import Index from '@/components/testing/BootstrapTest.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'index', path: '/', component: Index },
        { name: 'test', path: '/test', component: HelloWorld },
    ],
});
