import jquery from "jquery";
import $ from "jquery";
import * as Backbone from "backbone";
import * as _ from "underscore";

/**
 * Model
 */
console.log("hello");

const TodoModel = Backbone.Model.extend({
  initialize: function(attrs, options) {
    console.log("attrs", attrs);
    console.log("options", options);
  }
  // constructor: function() {
  //   console.log("TodoModelのコンストラクタメソッド");
  // }
});

const todo = new TodoModel({
  title: "タスクテスト！！！"
});

// console.log(todo.get("a"));

/**
 * Collection
 */
const TodoCollection = Backbone.Collection.extend({
  model: TodoModel
});

const todos = new TodoCollection([
  { title: "ごはん食べる", id: 1 },
  { title: "ごみすてる", id: 2 }
]);

console.log(todos.get(1));

todos.add(new TodoModel({ title: "引数で追加", id: 3 }));

console.log("こうしｎ！！");
console.log(todos);

/**
 * View
 */
const MyView = Backbone.View.extend({
  tagName: "span",
  className: "foo",
  model: todo,
  collection: todos,
  template: _.template($("#test-template").html()),
  events: {
    click: "change"
  },

  initialize: function(options) {
    this.listenTo(this.collection, "add", this.change);
    this.render();
  },
  render: function() {
    //
    const todoRecord = this.collection.models.map(model => {
      return this.template(model.attributes);
    });
    this.$el.html(todoRecord.join(""));
  },
  change: function() {
    // とりあえず更新するだけ
    this.render();
  }
});

const FormView = Backbone.View.extend({
  className: "form",
  template: _.template($("#submit_template").html()),
  events: {
    "click .task-input__submit": "submit"
  },
  collection: todos,

  initialize: function(options) {
    this.render();
  },
  render: function() {
    this.$el.html(this.template());
  },
  submit: function() {
    const newTaskTitle = $("#task-input").val();
    this.collection.add({ title: newTaskTitle });
    this.render();
  }
});

const myView = new MyView({ el: "#test" });
const formView = new FormView({ el: "#submit" });
