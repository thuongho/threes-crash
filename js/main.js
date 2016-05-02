(function() {
  'use strict';

    (function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})();

    var scene = new THREE.Scene(); 
    // objects look bigger closer to the camera
    // ratio, near clipping plane, far clipping plane
    // google near clipping plane and far clipping plane
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

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

    camera.position.z = 500;
    camera.rotation.x = 6.7;
    camera.rotation.y = 1.1;

    // make the number big so that it doesn't get blurry
    var geometry = new THREE.BoxGeometry(10000, 10000, 10000);
    var cubeMaterials = [
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/flatrock/flatrock_ft.png'), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/flatrock/flatrock_bk.png'), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/flatrock/flatrock_up.png'), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/flatrock/flatrock_dn.png'), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/flatrock/flatrock_rt.png'), side: THREE.DoubleSide}),
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/flatrock/flatrock_lf.png'), side: THREE.DoubleSide})
    ];

    var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
    var cube = new THREE.Mesh(geometry, cubeMaterial);
    scene.add(cube);

    var geometry = new THREE.SphereGeometry( 100, 32, 32 );
    var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xFFFFFF, wireframe: true} );
    var sphere = new THREE.Mesh( geometry, sphereMaterial );
    scene.add( sphere );

    // // create shape
    // var geometry = new THREE.BoxGeometry( 3000, 3000, 3000 );

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

    // camera.position.z = 3;

    // light (color, intensity)
    // MeshBasic doesn't apply to lighting
    // Lambert or Fong
    var ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.3);
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