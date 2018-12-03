import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Users from '@/components/user/Users';
import User from '@/components/user/User';
import Word from '@/components/word/Word';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      title: 'home',
      visible: true,
      component: HelloWorld
    },
    {
      path: '/users',
      name: 'Users',
      title: 'users',
      visible: true,
      component: Users
    },
    {
      path: '/user/:id',
      name: 'User',
      title: 'user',
      visible: false,
      component: User
    },
    {
      path: '/word',
      name: 'Word',
      title: 'testVuex',
      visible: true,
      component: Word
    }
  ]
});
