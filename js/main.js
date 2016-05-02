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

    // // instantiate a loader
    var loader = new THREE.JSONLoader();

    // load a resource
    loader.load(
      // resource URL
      '../models/earth.json',
      // Function when resource is loaded
      function ( geometry, colors) {
        console.log(geometry);
        console.log(colors);
        var material = new THREE.MeshLambertMaterial( {color: colors} );
      //   var material = new THREE.MultiMaterial( materials );
        var object = new THREE.Mesh( geometry, material );
        scene.add( object );
      }
      // function(object) {
      //   scene.add(object);
      // }
    );

    // instantiate a loader
    // var loader = new THREE.ColladaLoader();

    // loader.load(
    //   // resource URL
    //   '../models/earth.dae',
    //   // Function when resource is loaded
    //   function ( collada ) {
    //     console.log(collada);
    //     scene.add( collada.scene );
    //   },
    //   // Function called when download progresses
    //   function ( xhr ) {
    //     console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    //   }
    // );

    // // // create shape
    // var geometry = new THREE.BoxGeometry( 2, 2, 2 );

    // // array of 6 diff material for the 6 faces of the cube
    // var cubeMaterials = [
    //   new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/1.png'), side: THREE.DoubleSide}),  // RIGHT SIDE
    //   new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/2.png'), side: THREE.BackSide}),  // LEFT SIDE
    //   new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide}),  // TOP SIDE
    //   new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/4.png'), side: THREE.DoubleSide}),  // BOTTOM SIDE
    //   new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/5.png'), side: THREE.FrontSide}),  // FRONT SIDE
    //   new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/6.png'), side: THREE.DoubleSide})  // BACK SIDE
    // ];

    // // create material, color or image texture
    // var material = new THREE.MeshFaceMaterial(cubeMaterials);
    // var cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );

    camera.position.z = 10;

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