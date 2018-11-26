import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Users from "@/components/user/Users";
import User from "@/components/user/User";
import Word from "@/components/word/Word";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      title: "Hello World",
      visible: true,
      component: HelloWorld
    },
    {
      path: "/users",
      name: "Users",
      title: "Users",
      visible: true,
      component: Users
    },
    {
      path: "/user/:id",
      name: "User",
      title: "User",
      visible: false,
      component: User
    },
    {
      path: "/word",
      name: "Word",
      title: "Word",
      visible: true,
      component: Word
    }
  ]
});
