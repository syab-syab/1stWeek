var vm = new Vue({
  el: '#app',
  data: {
     newTodoText: "",
     lists: [
      { title: 'ToDoリストを作ってください。', isFinish: false },
      { title: 'やるべきことを入力して、', isFinish: false },
      { title: '追加ボタンを押すだけです。', isFinish: false},
      { title: '終わらせたことはチェックマークを入れて', isFinish: false },
      { title: '削除ボタンを押して消してください。', isFinish: false}
    ]
  },
  methods: {
    addNewTodo: function() {
      if(!(this.newTodoText.length)) {
        alert("入力してください")
      } else if(this.newTodoText.length >= 30) {
        alert("30字以内でお願いします")
      } else {
        this.lists.push({ title: this.newTodoText, isFinish: false })
        this.newTodoText = ""
      }
    },
    deleteItem: function(index) {
      this.lists.splice(index, 1)
    }
  }
})