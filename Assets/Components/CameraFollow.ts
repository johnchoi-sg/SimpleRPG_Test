import { Component, Prop } from 'rogue-engine';
import * as THREE from 'three';

export class CameraFollow extends Component {
    @Prop("Object3D") target: THREE.Object3D;
    @Prop("Vector3") offset: THREE.Vector3 = new THREE.Vector3(0, 8, 12);
    @Prop("Number") smoothSpeed: number = 5;

    lateUpdate() {
        if (!this.target) return;

        // Desired position based on target position + offset
        const desiredPos = this.target.position.clone().add(this.offset);

        const dt = 1 / 60; // Approximate dt if not passed to lateUpdate, or we can use small lerp factor
        // Lerp position
        this.object3d.position.lerp(desiredPos, this.smoothSpeed * dt);

        // Look at target
        this.object3d.lookAt(this.target.position);
    }
}
