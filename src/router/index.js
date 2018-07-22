import Vue from "vue";
import Router from "vue-router";
import MainContent from "@/components/MainContent";
import MainSidbar from "@/components/MainSidbar";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      components: {
        main: MainContent,
        MainSidbar
      }
    }
  ]
});
