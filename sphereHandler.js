AFRAME.registerComponent('sphereHandler', {
  init: function () {
    var el = this.el;
    el.addEventListener('click', function () {
    el.setAttribute('position', {x: 1, y: 2, z: -3});
    })
  }
});
