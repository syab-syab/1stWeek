var vm = new Vue({
  el: '#app',
  data: {
    back: false,
    color: "black",
    styleObject: {
      background: ""
    }
  },
  methods: {
    backgroundChange: function() {
      if(this.back){
        this.styleObject.background = this.color
        this.back = false
      } else {
        this.styleObject.background = this.color
        this.back = true
      }
      // this.back = true
    }
  }
})