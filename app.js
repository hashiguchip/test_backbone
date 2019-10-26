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

console.log("むむむ");
console.log(TodoModel);

const todo = new TodoModel({
  title: "タイトル！！！"
});
console.log(todo.get("title"));

// console.log(todo.get("a"));

/**
 * View
 */
const MyView = Backbone.View.extend({
  tagName: "span",
  className: "foo",
  model: todo,
  template: _.template($("#test-template").html()),
  initialize: function(options) {
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});

const myView = new MyView({ el: "#test" });
