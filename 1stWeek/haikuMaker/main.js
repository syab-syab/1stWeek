var vm = new Vue({
  el: '#app',
  data: {
      editFirst: '',
      editSecond: '',
      editThird: '',
      yomu: false
  },
  methods: {
    haiku: function() {
      this.yomu = true
    }
  }
})