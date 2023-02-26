import * as THREE from 'three'
import { BooleanKeyframeTrack, Color } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Textures
 */


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
// scene.background = new THREE.Color( '#F2EFE9' );

/**
 * Object
 */

var meshes = []
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

for(var x = -50; x<50; x+=2){
    let mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = x
    mesh.rotation.x = Math.random()
    mesh.rotation.y = Math.random()
    meshes.push(mesh)
    scene.add(mesh)
}
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// scene.add(mesh2)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 5
camera.position.y = 5
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
var x = 0
const tick = () =>
{
    const elapsed = clock.getElapsedTime()
    meshes.forEach((e,i)=>{
        e.position.y = Math.sin(elapsed-i)

    })
    // mesh.rotation.x=elapsedTime*0.1     //consistent spinning across devices
    // mesh.rotation.y = elapsedTime * 0.1
    //rods.rotation.z=elapsedTime*.9
    // mesh2.rotation.y = elapsedTime * -0.1
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
    //     mesh.position.x += 0.001*elapsed/60
    // }
    // mesh.rotation.y+=0.001*elapsed/60
    // mesh.rotation.z+=0.001*elapsed/60
    // mesh.position.y = Math.sin(elapsed)
    // camera.position.x = Math.sin(elapsed)
    // camera.position.y = Math.cos(elapsed)

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()