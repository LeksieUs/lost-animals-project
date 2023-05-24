import { createRouter, createWebHistory } from 'vue-router';

import Index from '@/views/Index.vue';
import HelloWorld from '@/components/testing/HelloWorld.vue';
import BootstrapTest from '@/components/testing/BootstrapTest.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'index', path: '/', component: Index },
        { name: 'bootstrap-test', path: '/bootstrap-test', component: BootstrapTest },
        { name: 'test', path: '/test', component: HelloWorld },
    ],
});
