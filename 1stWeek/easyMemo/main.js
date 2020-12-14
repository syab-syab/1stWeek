var vm = new Vue({
  el: '#app',
  data: {
    apper: false,
    message: ""
  },
  methods: {
    memoru: function() {
      if(this.message.length >= 60) {
        alert("60字以内でお願いします。")
      } else {
        this.apper = true
      }
    }
  }
})