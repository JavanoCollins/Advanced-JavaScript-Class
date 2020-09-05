<template>
  <div id="app">
   <app-nav></app-nav>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    appNav: Nav
  }
}
</script>

<style>
* {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
