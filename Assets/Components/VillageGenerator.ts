import { Component, addComponent, App, getComponent } from 'rogue-engine';
import * as THREE from 'three';
import { ThirdPersonController } from './ThirdPersonController';
import { CameraFollow } from './CameraFollow';

export class VillageGenerator extends Component {

    start() {
        this.createGround();
        this.createHouses();
        this.createPlayerAndCamera();
    }

    createGround() {
        const geometry = new THREE.PlaneGeometry(100, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0x3b8c3b }); // Grass Green
        const ground = new THREE.Mesh(geometry, material);
        ground.rotation.x = -Math.PI / 2;
        ground.name = "Ground";
        App.currentScene.add(ground);
    }

    createHouses() {
        const houseGeo = new THREE.BoxGeometry(4, 4, 4);
        const houseMat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b }); // Brown
        const roofGeo = new THREE.ConeGeometry(3.5, 2, 4);
        const roofMat = new THREE.MeshStandardMaterial({ color: 0xa52a2a }); // Red/Brown

        for (let i = 0; i < 10; i++) {
            const houseGroup = new THREE.Group();

            const base = new THREE.Mesh(houseGeo, houseMat);
            base.position.y = 2;
            houseGroup.add(base);

            const roof = new THREE.Mesh(roofGeo, roofMat);
            roof.position.y = 5;
            roof.rotation.y = Math.PI / 4;
            houseGroup.add(roof);

            // Random Pos
            const x = (Math.random() - 0.5) * 80;
            const z = (Math.random() - 0.5) * 80;

            // Don't spawn too close to center
            if (Math.abs(x) < 5 && Math.abs(z) < 5) continue;

            houseGroup.position.set(x, 0, z);
            houseGroup.rotation.y = Math.random() * Math.PI * 2;

            App.currentScene.add(houseGroup);
        }

        // Add a light
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(20, 50, 20);
        App.currentScene.add(light);
        const ambient = new THREE.AmbientLight(0x404040, 0.5); // Soft white light
        App.currentScene.add(ambient);
    }

    createPlayerAndCamera() {
        // Player
        const pGeo = new THREE.BoxGeometry(1, 1, 1);
        const pMat = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Blue Player
        const player = new THREE.Mesh(pGeo, pMat);
        player.position.y = 0.5;
        player.name = "Player";
        App.currentScene.add(player);

        // Add Controller
        addComponent(player, ThirdPersonController);

        // Camera Setup
        let camera = App.currentScene.getObjectByName("Main Camera") as THREE.Camera;

        // If no camera in scene (e.g. empty scene), create one
        if (!camera) {
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.name = "Main Camera";
            App.currentScene.add(camera);
        }

        // Add CameraFollow
        addComponent(camera, CameraFollow);
        const follow = getComponent(camera, CameraFollow);
        if (follow) {
            follow.target = player;
        }
    }
}
