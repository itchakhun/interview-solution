const Table = {
  data() {
    return {
      categories: [],
      filter: ''
    }
  },
  computed: {
    filteredRows() {
      return this.categories.filter(category => new RegExp(this.filter, 'i').test(category))
    }
  },
  mounted() {
    fetch('https://api.publicapis.org/categories', {
      method: 'GET'
    })
      .then(r => r.json())
      .then(data => this.categories = data)
  },
}

Vue.createApp(Table).mount('#question-two')