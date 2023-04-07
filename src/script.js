import * as THREE from 'three'
import { MeshDepthMaterial } from 'three'
import { VRButton } from 'three/addons/webxr/VRButton.js'
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object


const radius = 10;
const widthSegments = 12;
const heightSegments = 8;
const geom = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
const mat = new THREE.PointsMaterial({
    color: 'red',
    size: 0.7,     // in world units
});

const points = new THREE.Points(geom, mat);
scene.add(points);

const radius2 = 7;
const widthSegments2 = 10;
const heightSegments2 = 8;
const geom2 = new THREE.SphereGeometry(radius2, widthSegments2, heightSegments2);
const mat2 = new THREE.PointsMaterial({
    color: 'orange',
    size: 0.3,     // in world units
});
const points2 = new THREE.Points(geom2, mat2);
scene.add(points2);

const radius3 = 7;
const widthSegments3 = 8;
const heightSegments3 = 8;
const geom3 = new THREE.SphereGeometry(radius3, widthSegments3, heightSegments3);
const mat3 = new THREE.PointsMaterial({
    color: 'yellow',
    size: 0.3,     // in world units
});
const points3 = new THREE.Points(geom3, mat3);
scene.add(points3);
// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
camera.position.z = 10
scene.add(camera)

window.addEventListener('resize', () =>
{

    // Update camera
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild( VRButton.createButton( renderer ) );
renderer.xr.enabled = true;
renderer.setAnimationLoop( function () {

    const current_time = Date.now()
    const delta_time = current_time-time
    time = current_time
    console.log(delta_time)

    // const elapsed = clock.getElapsedTime()
    // if(mesh.position.x >= 5){
    //     x+=1
    //     if(x%2 != 0){
    //         mesh.material.color.set('blue')
    //     }
    //     else{
    //         mesh.material.color.set('red')
    //     }
    //     mesh.position.x = -5
    // }
    // else{
    //     mesh.position.x += 0.001*delta_time
    // }
    // mesh.rotation.y+=0.001*delta_time
    // mesh.rotation.z+=0.001*delta_time
    // mesh.position.y = Math.sin(elapsed)
    // camera.position.x = Math.sin(elapsed)
    // camera.position.y = Math.cos(elapsed)
    // console.log('tic')
    points.rotation.x+=0.0001*delta_time
    points2.rotation.y+=0.0001*delta_time
    points3.rotation.z+=0.0001*delta_time

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick) //passes in the tick function as an argument
	renderer.render( scene, camera );

} );
//animations
const clock = new THREE.Clock()
var x = 0
var time = Date.now()
function tick(){

}

tick() 