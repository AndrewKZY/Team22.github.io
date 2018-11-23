AFRAME.registerComponent('scene1b', {
    init: function() {
        el = this.el;
        this.gotoScene = this.gotoScene.bind(this);
        el.addEventListener('click', this.gotoScene);
    },
    gotoScene: function(evt) {
        if (this.el.getAttribute('visible')) {
            console.log('in window.gotoScene');
            this.el.parentNode.removeChild(this.el); 

            var videosphere2 = document.querySelector('#videosphere2');
            var videosphere3 = document.querySelector('#videosphere3');

            // remove the prev video
            videosphere2.components.material.material.map.image.pause();
            videosphere2.setAttribute('visible', 'false');
            videosphere2.parentNode.removeChild(videosphere2); 

            // hide the button
           // this.el.setAttribute('visible', 'false');
            question.setAttribute('visible', 'false');
            helper.setAttribute('visible', 'false');

            //refresh playbtn
            // var playbtn = document.querySelector('#playbtn');
            // playbtn.pause();
            // playbtn.play();

            // change the scene
            //videosphere2.play(); // need to be after visible!
            videosphere3.setAttribute("show-btn-when-vid-ended","target: #second")
            videosphere3.setAttribute('visible', 'true');
            // reestablish listeners
            videosphere3.components.material.material.map.image.play();

            document.querySelector('#videosphere3').play();

            // remove self
        }
    },
});