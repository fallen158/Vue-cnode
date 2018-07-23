<template>
  <div id="app">
    <Navbar/>
    <main class="main">
      <router-view name="main"/>
      <router-view name="MainSidbar"></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import MainSidbar from "./components/MainSidbar";
export default {
  name: "App",
  components: {
    Navbar,
    MainContent,
    MainSidbar
  }
};
</script>

<style lang="scss">
#app{
    background: #e1e1e1;
    .main {
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
  min-height: 400px;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  background: white;
  .main-content {
    flex: 1;
  }
}
}
</style>
