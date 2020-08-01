<template>
  <div id="app">
    <app-header />
    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col-3">
          <side-bar />
        </div>
        <div class="col-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './layout/AppHeader'
import SideBar from './layout/SideBar'

export default {
  name: 'App',
  components: {
    AppHeader,
    SideBar
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
