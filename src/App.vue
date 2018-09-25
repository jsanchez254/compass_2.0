<template>
  <div id="app">
    <Navbar/>
    <div class = "columns">
      <div class = "column is-2">
      </div>
      <div class = "column is-10">
        <Container/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Container from "./components/container";
export default {
  name: 'App',
  components:{
    Navbar, Sidebar, Container
  }
}
</script>

<style>

</style>
