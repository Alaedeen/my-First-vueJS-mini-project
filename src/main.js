import Vue from 'vue'
import App from './App.vue'
export const eventBus = new Vue({
  methods: {
    AddQuote(numberQuotes) {
      this.$emit('quoteAdded', numberQuotes)
    },
    changeQuote(Quote){
      this.$emit('quoteChanged', Quote)
    },
    deleteQuote(){
      this.$emit('quoteDeleted')
    }
  },
})

new Vue({
  el: '#app',
  render: h => h(App)
})
