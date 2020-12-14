var app = new Vue({
  el: '#app',
  data: {
    show: false,
    btn: true
    // show: true
  },
  methods: {
    helloWorld: function() {
      this.show = true
      this.btn = false
    }
  }
})