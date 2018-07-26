<template>
  <div id="app">
    <Navbar/>
   
      <router-view name="main"/>

    <footer>CNode社区</footer>
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
  footer{
    background: white;
    height: 20px;
    margin-top: 20px;
  }
}
</style>
