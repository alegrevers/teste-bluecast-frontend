<template>
  <div class="hello">
    <button>
      <router-link to="/clients">Lista de Clientes</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: auto;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>
