import jquery from "jquery";
import * as Backbone from "backbone";

/**
 * Model
 */
console.log("hello");

const TodoModel = Backbone.Model.extend({
  constructor: function() {
    console.log("TodoModelのコンストラクタメソッド");
  }
});

const todo = new TodoModel({ a: "初期値" });
// console.log(todo.get("a"));

/**
 * View
 */
const MyView = Backbone.View.extend({
  tagName: "span",
  className: "foo",
  initialize: function(options) {
    console.log("viewのinitialize");
    this.render();
  },
  render: function() {
    // 適当にレンダリングしてみる
    this.$el.html("foooo");
  }
});

const myView = new MyView({ el: "#test" });
