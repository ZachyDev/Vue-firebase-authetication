<template>
  <div id="app">
  <router-link to="/">Home</router-link>
  <router-link :to="{name: 'GetStudents'}">Get Students</router-link>
  <router-view></router-view>
  </div>
</template>

<script>

export default {

};
</script>

<style>

</style>
