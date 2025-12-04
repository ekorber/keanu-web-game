// Game page JavaScript
import * as THREE from 'three';

// Game state
let scene, camera, renderer;
let isGamePaused = false;
let isGameLoaded = false;

// DOM elements
const loadingScreen = document.getElementById('loading-screen');
const hud = document.getElementById('hud');
const menu = document.getElementById('menu');
const canvas = document.getElementById('game-canvas');
const resumeButton = document.getElementById('resumeButton');
const settingsButton = document.getElementById('settingsButton');
const exitButton = document.getElementById('exitButton');

// Initialize the game
function init() {
  // Setup Three.js scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87CEEB); // Sky blue

  // Setup camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 10, 20);

  // Setup renderer
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Add some basic lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(50, 100, 50);
  scene.add(directionalLight);

  // Add a simple ground plane as placeholder
  const groundGeometry = new THREE.PlaneGeometry(100, 100);
  const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x5a8f3a,
    side: THREE.DoubleSide
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  // Add a few simple cubes as placeholder blocks
  const blockGeometry = new THREE.BoxGeometry(1, 1, 1);
  const blockMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });

  for (let i = 0; i < 10; i++) {
    const block = new THREE.Mesh(blockGeometry, blockMaterial);
    block.position.set(
      Math.random() * 20 - 10,
      0.5,
      Math.random() * 20 - 10
    );
    scene.add(block);
  }

  // Handle window resize
  window.addEventListener('resize', onWindowResize);

  // Setup controls
  setupControls();

  // Simulate loading
  setTimeout(() => {
    hideLoadingScreen();
  }, 2000);
}

function hideLoadingScreen() {
  loadingScreen.classList.add('hidden');
  hud.classList.remove('hidden');
  isGameLoaded = true;
  animate();
}

function setupControls() {
  // ESC key for menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleMenu();
    }
  });

  // Menu buttons
  resumeButton.addEventListener('click', toggleMenu);

  settingsButton.addEventListener('click', () => {
    alert('Settings menu coming soon!');
  });

  exitButton.addEventListener('click', () => {
    window.location.href = '/';
  });

  // Hotbar number keys
  document.addEventListener('keydown', (e) => {
    if (e.key >= '1' && e.key <= '9') {
      selectHotbarSlot(parseInt(e.key) - 1);
    }
  });
}

function toggleMenu() {
  isGamePaused = !isGamePaused;
  menu.classList.toggle('hidden');

  if (isGamePaused) {
    canvas.style.filter = 'blur(5px)';
  } else {
    canvas.style.filter = 'none';
  }
}

function selectHotbarSlot(index) {
  const slots = document.querySelectorAll('.hotbar-slot');
  slots.forEach((slot, i) => {
    if (i === index) {
      slot.classList.add('active');
    } else {
      slot.classList.remove('active');
    }
  });
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  if (!isGameLoaded) return;

  requestAnimationFrame(animate);

  if (!isGamePaused) {
    // Simple camera rotation for demo
    const time = Date.now() * 0.0001;
    camera.position.x = Math.sin(time) * 20;
    camera.position.z = Math.cos(time) * 20;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }
}

// Start the game when page loads
init();
