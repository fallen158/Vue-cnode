import Vue from "vue";
import Router from "vue-router";
import MainContent from "@/components/MainContent";
import Article from "@/components/Article";

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
      path: "/topic/:id",
      components: {
        main: Article
      }
    }
  ]
});
