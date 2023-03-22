import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import GUI from "lil-gui";

import * as utils from "$lib/utils.js"

// Set up basic scene
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xffffff, 0.0025, 50)

// Set up camera and basic renderer
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
);

camera.position.x = -36;
camera.position.z = -3;
camera.position.y = 18;
camera.lookAt(0, 0, 0)

// Load gltf 
let obj; 

const loader = new GLTFLoader();
loader.load( 'spaceMusic/spaceMusic.gltf', function ( gltf ) {
  obj = gltf.scene;
	scene.add( obj);
  obj.scale.set(0.015, 0.015, 0.015);
}, undefined, function ( error ) {
	console.error( error );
} );

// Load HDRI background
let envMap;

const hdrLoader = new RGBELoader();
hdrLoader.load("neon_photostudio_4k.hdr", function( texture ) {
  const gen = new THREE.PMREMGenerator(renderer)
  const envMap = gen.fromEquirectangular(texture).texture
  scene.environment = envMap
  scene.background = envMap
  
  texture.dispose()
  gen.dispose()
});

// Add light
scene.add(new THREE.AmbientLight(0x666666))
const dirLight = new THREE.DirectionalLight(0xaaaaaa)
dirLight.position.set(5, 12, 8)
dirLight.castShadow = true
scene.add(dirLight)

// Add controller 
let orbitControls;
let renderer;

export const animate = (el) => {
  requestAnimationFrame(animate);
  if(obj != null) {
    obj.rotation.y += props.cubeSpeed;
    orbitControls.update();
    renderer.render(scene, camera);
  }
};

const resize = (scene) => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

export const createScene = (el) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.6;
  orbitControls = new OrbitControls(camera, document.body);
  orbitControls.minDistance = 3;
  orbitControls.maxDistance = 15;
  // add other options 
  resize();
  animate();
};

// Add gui 
const gui = new GUI();
const props = {
  cubeSpeed: 0.01,
};
gui.add(props, 'cubeSpeed', -0.2, 0.2, 0.01)



