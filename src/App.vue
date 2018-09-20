<template>
  <div id="app">
    <Navbar/>
    <div class = "columns">
      <div class = "column is-2">
        <Sidebar/>
      </div>
      <div class = "column is-10">
        <Body/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Body from "./components/body";
export default {
  name: 'App',
  components:{
    Navbar, Sidebar, Body
  }
}
</script>

<style>

</style>
