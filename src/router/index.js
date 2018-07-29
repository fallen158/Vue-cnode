import Vue from "vue";
import Router from "vue-router";
import MainContent from "@/components/MainContent";
import Article from "@/components/Article";
import UserInfo from "@/components/UserInfo"
Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "root",
      path: "/",
      components: {
        main: MainContent
      }
    },
    {
      name: "post_content",
      path: "/topic/:id&author=:name",
      components: {
        main: Article
      }
    },
    {
      name: "user_info",
      path: "/user/:name",
      components:{
        main: UserInfo
      }
    }
  ]
});
