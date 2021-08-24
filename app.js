const App = {
  data() {
    return {
      customHTML: '<h1>Custom HTML header</h1>',
      title: 'Header',
      person: {
        firstName: 'devandtravel',
        github: 'https://github.com/devandtravel',
        interest: 'cats'
      },
      items: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    addItem() {
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
    }
  },
  computed: {
    evenItems() {
      return this.items.filter(item => item % 2 === 0)
    }
  },
  watch: {}
}

Vue.createApp(App).mount('#app')
