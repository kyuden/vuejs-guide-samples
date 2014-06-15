(function() {
  var demo1, demo2, demo3, demo4, demo5;

  demo1 = new Vue({
    el: '#demo1',
    data: {
      title: 'demo1',
      sub_title: 'TODO',
      todos: [
        {
          done: true,
          content: 'Learn JavaScript'
        }, {
          done: false,
          content: 'Learn vue.js'
        }, {
          done: true,
          content: 'Lean kyuden'
        }
      ],
      user: "kebin"
    }
  });

  Vue.directive('demo2', {
    bind: function() {
      this.el.style.color = "#fff";
      return this.el.style.backgroundColor = this.arg;
    },
    update: function(value) {
      return this.el.innerHTML = 'argument - ' + this.arg + '<br>' + 'key - ' + this.key + '<br>' + 'value - ' + value;
    }
  });

  demo2 = new Vue({
    el: '#demo2',
    data: {
      title: "demo2",
      sub_title: "Custom Directive",
      msg: 'hello!'
    }
  });

  Vue.directive('demo3-1', {
    isLiteral: true,
    bind: function() {
      return this.el.innerHTML = 'expression: ' + this.expression + ' arg: ' + this.arg + ' key: ' + this.key;
    },
    update: function(value) {
      return this.el.innerHTML = 'foooooooooooooooooooooooo';
    }
  });

  Vue.directive('demo3-2', {
    isEmpty: true,
    bind: function() {
      return this.el.innerHTML = 'expression: ' + this.expression + ' arg: ' + this.arg + ' key: ' + this.key;
    },
    update: function(value) {
      return this.el.innerHTML = 'foooooooooooooooooooooooo';
    }
  });

  demo3 = new Vue({
    el: '#demo3',
    data: {
      title: "demo3",
      sub_title: "Literal & Empty"
    }
  });

  Vue.filter('reversename', function(value) {
    return value.split('').reverse().join('');
  });

  demo4 = new Vue({
    el: '#demo4',
    data: {
      title: "demo4",
      sub_title: "Custom Filter",
      name: "kyuden"
    }
  });

  demo5 = new Vue({
    el: '#demo5',
    data: {
      title: 'demo5',
      sub_title: 'Display a List',
      parentMsg: "parent Hello",
      items: [
        {
          childMsg: 'child1 Hello'
        }, {
          childMsg: 'child2 Hello'
        }
      ],
      premitiveValues: {
        FirstName: "masahiro",
        LastName: "kyuden",
        Age: 25
      },
      objectValues: {
        one: {
          msg: 'Hello',
          dummy: 'dummy'
        },
        two: {
          msg: "Bye"
        }
      }
    }
  });

}).call(this);
