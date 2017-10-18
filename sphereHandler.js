AFRAME.registerComponent('sphere-handler', {
  init: function () {
    var el = this.el;
    var isAtStart = true;
    var anim
    var anim2
    el.addEventListener('click', function () { // Create the Listener for the gaze
    if (isAtStart == true) {
        anim = document.createElement("a-animation"); // Create a new animation
        anim2 = document.createElement("a-animation"); // Create a new animation
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
        isAtStart = false;
        el.appendChild(anim); // Add the animation to the sphere
        el.appendChild(anim2); // Add the animation to the sphere
    } else if (isAtStart == false) {  
        anim = document.createElement("a-animation"); // Create a new animation
        anim2 = document.createElement("a-animation"); // Create a new animation
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
        isAtStart = true;
        el.appendChild(anim); // Add the animation to the sphere
        el.appendChild(anim2); // Add the animation to the sphere
    }
    }.bind(this))
  }
});
