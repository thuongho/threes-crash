(function() {
  'use strict';

    var scene = new THREE.Scene(); 
    // objects look bigger closer to the camera
    // ratio, near clipping plane, far clipping plane
    // google near clipping plane and far clipping plane
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // create the shape
    var geometry = new THREE.SphereGeometry(1, 10, 10);

    // create a material, color or image
    var material = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF, 
      wireframe: true
    });
    var sphere =  new THREE.Mesh(geometry, material);
    scene.add(sphere);
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe: true} );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 3;
    console.log(sphere);
    console.log(cube);

    // game logic
    var update = function() {
      cube.rotation.x += 0.01;
      // cube.rotation.y += 0.02;

      // sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
    };

    // draw scene
    var render = function() {
      renderer.render(scene, camera);
    };

    // game dev via construct specify how the game with flow in
    // run game loop (update, render, repeat)
    var GameLoop = function() {
      // allows to run every frame
      requestAnimationFrame(GameLoop);

      update();
      // render through the camera
      render(); 
    };

    GameLoop();

}());