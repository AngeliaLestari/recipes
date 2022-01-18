<template>
  <div
    id="app"
  >
    <div id="nav">
       <router-link to="/recipes"></router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
