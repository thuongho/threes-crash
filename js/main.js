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

    // var loader = new THREE.OBJLoader();
    // console.log('load');
    // // Planet Earth (Alt-Drag to change Lighting) by Thomas Kole is licensed under CC Attribution
    // // https://skfb.ly/Ft8J
    // loader.load(
    //   '../models/earth.json',

    //   function(object) {
    //     console.log(object);
    //     scene.add(object);
    //   }
    // );

    // instantiate a loader
    var loader = new THREE.JSONLoader();

    // load a resource
    loader.load(
      // resource URL
      '../models/earth.json',
      // Function when resource is loaded
      function ( geometry, materials ) {
        console.log(geometry);
        console.log(materials);
      //   var material = new THREE.MultiMaterial( materials );
        // var object = new THREE.Mesh( geometry, material );
        // scene.add( object );
      }
      // function(object) {
      //   scene.add(object);
      // }
    );

    // camera.position.z = 3;

    // light (color, intensity)
    // MeshBasic doesn't apply to lighting
    // Lambert or Fong
    var ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.8);
    scene.add(ambientLight);

    // game logic
    var update = function() {
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.005;

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