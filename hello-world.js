AFRAME.registerComponent('hello-world', {
  init: function () {
    console.log('Hello, World!');
    var el = this.el;
    el.addEventListener('click', function () {
    el.setAttribute('position', {x: 1, y: 2, z: -3});
    })
  }
});
