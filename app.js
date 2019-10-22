import jquery from "jquery";
import $ from "jquery";
import * as Backbone from "backbone";
import * as _ from "underscore";

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
  template: _.template($("#test-template").html()),
  initialize: function(options) {
    console.log("viewのinitialize");
    this.render();
  },
  render: function() {
    // 適当にレンダリングしてみる
    // const compiled = _.template("hello: <%= name %>");
    // compiled({ name: "moe" });
    // TODO: モデルをはめ込む
    this.$el.html(this.template({ title: "testタイトル" }));
  }
});

const myView = new MyView({ el: "#test" });
