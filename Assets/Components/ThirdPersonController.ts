import { Component, Input, Prop } from 'rogue-engine';
import * as THREE from 'three';

export class ThirdPersonController extends Component {
  @Prop("Number") speed: number = 10;
  @Prop("Number") rotationSpeed: number = 5;

  private velocity = new THREE.Vector3();

  start() {
    // Optional: Setup physics body if using physics, but for now simple transform movement
  }

  update(dt: number) {
    const input = new THREE.Vector3();
    
    if (Input.keyboard.getKeyPressed("KeyW") || Input.keyboard.getKeyPressed("ArrowUp")) input.z = -1;
    if (Input.keyboard.getKeyPressed("KeyS") || Input.keyboard.getKeyPressed("ArrowDown")) input.z = 1;
    if (Input.keyboard.getKeyPressed("KeyA") || Input.keyboard.getKeyPressed("ArrowLeft")) input.x = -1;
    if (Input.keyboard.getKeyPressed("KeyD") || Input.keyboard.getKeyPressed("ArrowRight")) input.x = 1;

    if (input.length() > 0) {
      input.normalize();

      // Move relative to camera direction if possible, but for simple village:
      // Just move relative to world or self. Let's do World-aligned movement for simplicity first
      // or "Tank Controls" / "Character Direction" if camera follows?
      // Standard 3rd person usually moves relative to camera view.
      // But let's keep it simple: Directional movement (Top-down style logic)
      
      // Rotate towards direction
      const targetAngle = Math.atan2(input.x, input.z);
      const currentRotation = this.object3d.rotation.y;
      
      // Simple lerp rotation
      let angleDiff = targetAngle - currentRotation;
      // Normalize angle to -PI to PI
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

      this.object3d.rotation.y += angleDiff * this.rotationSpeed * dt;

      // Move forward in the direction we are facing (or just move in input direction)
      // Moving in input direction is snappier for this style
      this.object3d.position.x += input.x * this.speed * dt;
      this.object3d.position.z += input.z * this.speed * dt;
    }
  }
}
