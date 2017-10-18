AFRAME.registerComponent('sphere-handler', {
  init: function () {
    var el = this.el;
    var isAtStart = true;
    el.addEventListener('click', function () { // Create the Listener for the gaze
    var anim = document.createElement("a-animation"); // Create a new animation
    var anim2 = document.createElement("a-animation"); // Create a new animation
    if (isAtStart == true) {
        anim.setAttribute("attribute", "position"); // Set what the animation is animating
        anim.setAttribute("to", "-6 10 2"); // Set the end value
        anim.setAttribute("from", "1.8 .5 0"); // Set the end value
        anim.setAttribute("dur", "5000"); // Set the duration
        anim.setAttribute("repeat", "0"); // Set the repeat
        anim2.setAttribute("attribute", "material.color"); // Set what the animation is animating
        anim2.setAttribute("to", "red"); // Set the end value
        anim2.setAttribute("from", "green"); // Set the beginning value
        anim2.setAttribute("dur", "10000"); // Set the duration
        anim2.setAttribute("repeat", "0"); // Set the repeat
    var isAtStart = false;
    }
    else {  
        anim.setAttribute("attribute", "position"); // Set what the animation is animating
        anim.setAttribute("to", "1.8 .5 0"); // Set the end value
        anim.setAttribute("from", "-6 10 2"); // Set the end value
        anim.setAttribute("dur", "5000"); // Set the duration
        anim.setAttribute("repeat", "0"); // Set the repeat
        anim2.setAttribute("attribute", "material.color"); // Set what the animation is animating
        anim2.setAttribute("to", "green"); // Set the end value
        anim2.setAttribute("from", "red"); // Set the beginning value
        anim2.setAttribute("dur", "10000"); // Set the duration
        anim2.setAttribute("repeat", "0"); // Set the repeat
    var isAtStart = true;
    }
    el.appendChild(anim); // Add the animation to the sphere
    el.appendChild(anim2); // Add the animation to the sphere
    }.bind(this))
  }
});
