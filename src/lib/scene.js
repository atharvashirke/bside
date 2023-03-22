import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import GUI from "lil-gui";
import * as utils from "$lib/utils.js"

// Set up basic scene
const scene = new THREE.Scene();
scene.backgroundColor = 0xffffff;
scene.fog = new THREE.Fog(0xffffff, 0.0025, 50)

// Set up camera and basic renderer
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
);

camera.position.x = 6;
camera.position.z = 6;
camera.position.y = 6;

// Load gltf 
let obj;
const loader = new GLTFLoader();
loader.load( 'spaceMusic/spaceMusic.gltf', function ( gltf ) {
  obj = gltf.scene
	scene.add( obj);
  obj.scale.set(0.01, 0.01, 0.01);
}, undefined, function ( error ) {
	console.error( error );
} );

/** 
// Add Cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
cube.castShadow = true;
cube.position.y = 1;
*/


// create the floor
const geo = new THREE.BoxBufferGeometry(10, 0.25, 10, 10, 10, 10);
const mat = new THREE.MeshStandardMaterial({ color: 0xffffff,});
const mesh = new THREE.Mesh(geo, mat);
mesh.receiveShadow = true;
mesh.position.y = -1;
  

// Add objects to scene
scene.add(mesh);

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
  obj.rotation.y += props.cubeSpeed;
  orbitControls.update();
  renderer.render(scene, camera);
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
  orbitControls = new OrbitControls(camera, document.body);
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



