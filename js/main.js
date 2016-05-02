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
    var geometry = new THREE.BoxGeometry( 2, 2, 2 );

    // array of 6 diff material for the 6 faces of the cube
    var cubeMaterials = [
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/1.png'), side: THREE.DoubleSide}),  // RIGHT SIDE
      new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('img/2.png'), side: THREE.DoubleSide}),  // LEFT SIDE
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/2.png'), side: THREE.DoubleSide}),  // TOP SIDE
      new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('img/4.png'), side: THREE.DoubleSide}),  // BOTTOM SIDE
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/5.png'), side: THREE.FrontSide}),  // FRONT SIDE
      new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/6.png'), side: THREE.DoubleSide})  // BACK SIDE
    ];

    // create material, color or image texture
    var material = new THREE.MeshFaceMaterial(cubeMaterials);
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 3;

    // light (color, intensity)
    // MeshBasic doesn't apply to lighting
    // Lambert or Fong
    var ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.0);
    // var ambientLight = new THREE.AmbientLight(0xFF0000, 1.0);  // red light
    // scene.add(ambientLight);

    // point light (color, intensity, distance)
    var pointLight1 = new THREE.PointLight(0xFF0040, 4, 150);
    // scene.add(pointLight1);

    var pointLight2 = new THREE.PointLight(0x0040FF, 3, 80);
    // scene.add(pointLight2);

    var pointLight3 = new THREE.PointLight(0x80FFFF, 4, 90);
    // scene.add(pointLight3);

    // light from one direction
    var directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionalLight.position.set(0,1,0);
    // scene.add(directionalLight);

    var spotLight = new THREE.SpotLight(0xFF45F6, 25);
    // x y z
    spotLight.position.set(0,3,0);
    scene.add(spotLight);

    // game logic
    var update = function() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.005;

      // make light move around
      // challenge make an object and have it move around as the light moves around with the same color as the light
      var time = Date.now() * 0.0005;

      pointLight1.position.x = Math.sin(time * 0.7) * 30;
      pointLight1.position.y = Math.cos(time * 0.5) * 40;
      pointLight1.position.z = Math.sin(time * 0.3) * 30;

      pointLight2.position.x = Math.cos(time * 0.3) * 30;
      pointLight2.position.y = Math.sin(time * 0.5) * 40;
      pointLight2.position.z = Math.sin(time * 0.7) * 30;

      pointLight3.position.x = Math.sin(time * 0.7) * 30;
      pointLight3.position.y = Math.cos(time * 0.3) * 40;
      pointLight3.position.z = Math.sin(time * 0.5) * 30;
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