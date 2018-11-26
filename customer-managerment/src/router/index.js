import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Users from "@/components/user/Users";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      title: "Hello World",
      component: HelloWorld
    },
    {
      path: "/users",
      name: "Users",
      title: "Users",
      component: Users
    }
  ]
});
