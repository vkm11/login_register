import SignUp from './components/SignUp.vue';
import {createWebHistory, createRouter} from 'vue-router';
import SignIn from './components/SignIn.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';

import SignOut from './components/SignOut.vue';
const routes=[
    {
        name: "SignUp",
        component: SignUp,
        path: '/sign-up',
    },
    {
        name:'SignIn',
        path:'/',
        component: SignIn,
    },
    {
        name:"SignOut",
        path:"/sign-out",
        component: SignOut,
    },
    {
        name:"Home",
        path:"/home",
        component: Home,
    },
    {
        name:"Header",
        path:"/header",
        component: Header,
    },

  
];
const router = createRouter ({
    history:createWebHistory(),
    routes
});
export default router;