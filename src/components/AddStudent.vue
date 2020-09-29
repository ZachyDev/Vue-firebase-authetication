<template>
  <div class="add-student">
    <nav class="navbar navbar-light bg-warning">
      <a class="navbar-brand">StudentSmart</a>
      <form class="form-inline">
      <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
        <router-link :to="{name: 'GetStudents'}">See Students</router-link>
      </button>
  </form>
</nav>
  </div>
</template>

<script>
export default {
  name: 'AddStudent',
};
</script>

<style>

</style>
