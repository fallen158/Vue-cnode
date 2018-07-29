<template>
  <div id="app">
    <Navbar/> 
    <router-view name="main"/>
    <router-view name="SlideBar"></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
export default {
  name: "App",
  components: {
    Navbar,
    MainContent
  }
};
</script>

<style lang="scss">
#app {
  background: #e1e1e1;
  padding-bottom: 5px;
}
</style>
