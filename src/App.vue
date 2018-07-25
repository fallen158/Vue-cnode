<template>
  <div id="app">
    <Navbar/>
    <main class="main">
      <router-view name="main"/>
    </main>
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
  .main {
    width: 90%;
    max-width: 1400px;
    min-width: 800px;
    margin: 15px auto;
    min-height: 400px;
    background: white;
  }
  footer{
    background: white;
    margin-top: 20px;
  }
}
</style>
