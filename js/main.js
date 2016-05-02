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

    // resize window with aspect ratio
    window.addEventListener('resize', function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    // controls
    var controls = new THREE.OrbitControls(camera, renderer.domElement);

    // create shape
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );

    // create material, color or image texture
    var material = new THREE.MeshBasicMaterial( {color: 0xffffff, wireframe: true} );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 3;

    // game logic
    var update = function() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.005;

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