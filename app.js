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
    
  },
  computed: {},
  watch: {
    
  }
}

Vue.createApp(App).mount('#app')
