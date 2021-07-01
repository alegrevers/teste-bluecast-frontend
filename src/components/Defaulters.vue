<template>
  <div class="hello">
    <button>
      <router-link to="/">Home</router-link>
    </button>
    <button>
      <router-link to="/clients">Inadimplentes</router-link>
    </button>
    <input type="text" v-model="search" placeholder="O que procura?">
    <table v-bind:clients = "clients">
      <tr>
        <th @click="sort('name')">Cliente</th>
        <th @click="sort('value')">Valor</th>
        <th @click="sort('dueDate')">Desde</th>
      </tr>
      <tr v-for = "client in defaulterClients" :key = "client.name" >
        <td>{{ client.name }}</td>
        <td>{{ client.value }}</td>
        <td>{{ client.dueDate }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import ListClientsService from '../services/ListClientsService.js'
export default {
  name: 'Defaulters',
  data() {
    return {
      search: '',
      clients: [],
      sortData: 'name',
      sortDataDir: 'asc'
    }
  },
  props: {
    defaults: []
  },
  mounted () {
    ListClientsService.getAll()
      .then(((clients) => {
        this.$set(this, 'clients', clients)
      }).bind(this))
  },
  computed: {
    defaulterClients() {
      const defaults = this.clients.filter(c => c.paymentDate === "")

      return defaults.sort((a, b) => {
        let modifier = 1
        if (this.sortDataDir === 'desc') modifier = -1
        if (a[this.sortData] < b[this.sortData]) return -1 * modifier
        if (a[this.sortData] > b[this.sortData]) return 1 * modifier
        return 0
      }).filter((c) => {
        return c.name.toLowerCase().match(this.search.toLowerCase())
          || c.value.toLowerCase().match(this.search.toLowerCase())
          || c.dueDate.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
  methods: {
    sort(s) {
      if (s === this.sortData) {
        this.sortDataDir = this.sortDataDir === 'asc' ? 'desc' : 'asc'
      }
      this.sortData = s
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  margin: auto;
}
div {
  background: #2c3e50;
  color: white
}
th {
  width: 100px;
}
button {
  width: auto;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>
