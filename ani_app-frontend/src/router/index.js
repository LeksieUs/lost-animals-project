import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from '@/components/HelloWorld.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'test', path: '/test', component: HelloWorld,
        },
    ],
});
