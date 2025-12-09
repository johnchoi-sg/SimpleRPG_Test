(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rogue-engine"), require("three"));
	else if(typeof define === 'function' && define.amd)
		define(["rogue-engine", "three"], factory);
	else if(typeof exports === 'object')
		exports["rogue-engine-user-scripts"] = factory(require("rogue-engine"), require("three"));
	else
		root["rogue-engine-user-scripts"] = factory(root["rogue-engine"], root["three"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_rogue_engine__, __WEBPACK_EXTERNAL_MODULE_three__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Assets/Components/CameraFollow.ts":
/*!*******************************************!*\
  !*** ./Assets/Components/CameraFollow.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraFollow": () => (/* binding */ CameraFollow)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


class CameraFollow extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.offset = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 8, 12);
    this.smoothSpeed = 5;
  }
  lateUpdate() {
    if (!this.target)
      return;
    const desiredPos = this.target.position.clone().add(this.offset);
    const dt = 1 / 60;
    this.object3d.position.lerp(desiredPos, this.smoothSpeed * dt);
    this.object3d.lookAt(this.target.position);
  }
}
__name(CameraFollow, "CameraFollow");
__decorateClass([
  (0,rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Prop)("Object3D")
], CameraFollow.prototype, "target", 2);
__decorateClass([
  (0,rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Prop)("Vector3")
], CameraFollow.prototype, "offset", 2);
__decorateClass([
  (0,rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Prop)("Number")
], CameraFollow.prototype, "smoothSpeed", 2);


/***/ }),

/***/ "./Assets/Components/ThirdPersonController.ts":
/*!****************************************************!*\
  !*** ./Assets/Components/ThirdPersonController.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThirdPersonController": () => (/* binding */ ThirdPersonController)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


class ThirdPersonController extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.speed = 10;
    this.rotationSpeed = 5;
    this.velocity = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
  }
  start() {
  }
  update(dt) {
    const input = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
    if (rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Input.keyboard.getKeyPressed("KeyW") || rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Input.keyboard.getKeyPressed("ArrowUp"))
      input.z = -1;
    if (rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Input.keyboard.getKeyPressed("KeyS") || rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Input.keyboard.getKeyPressed("ArrowDown"))
      input.z = 1;
    if (rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Input.keyboard.getKeyPressed("KeyA") || rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Input.keyboard.getKeyPressed("ArrowLeft"))
      input.x = -1;
    if (rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Input.keyboard.getKeyPressed("KeyD") || rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Input.keyboard.getKeyPressed("ArrowRight"))
      input.x = 1;
    if (input.length() > 0) {
      input.normalize();
      const targetAngle = Math.atan2(input.x, input.z);
      const currentRotation = this.object3d.rotation.y;
      let angleDiff = targetAngle - currentRotation;
      while (angleDiff > Math.PI)
        angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI)
        angleDiff += Math.PI * 2;
      this.object3d.rotation.y += angleDiff * this.rotationSpeed * dt;
      this.object3d.position.x += input.x * this.speed * dt;
      this.object3d.position.z += input.z * this.speed * dt;
    }
  }
}
__name(ThirdPersonController, "ThirdPersonController");
__decorateClass([
  (0,rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Prop)("Number")
], ThirdPersonController.prototype, "speed", 2);
__decorateClass([
  (0,rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Prop)("Number")
], ThirdPersonController.prototype, "rotationSpeed", 2);


/***/ }),

/***/ "./Assets/Components/VillageGenerator.ts":
/*!***********************************************!*\
  !*** ./Assets/Components/VillageGenerator.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VillageGenerator": () => (/* binding */ VillageGenerator)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThirdPersonController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThirdPersonController */ "./Assets/Components/ThirdPersonController.ts");
/* harmony import */ var _CameraFollow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CameraFollow */ "./Assets/Components/CameraFollow.ts");
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });




class VillageGenerator extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  start() {
    this.createGround();
    this.createHouses();
    this.createPlayerAndCamera();
  }
  createGround() {
    const geometry = new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(100, 100);
    const material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 3902523 });
    const ground = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry, material);
    ground.rotation.x = -Math.PI / 2;
    ground.name = "Ground";
    rogue_engine__WEBPACK_IMPORTED_MODULE_0__.App.currentScene.add(ground);
  }
  createHouses() {
    const houseGeo = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(4, 4, 4);
    const houseMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 9132587 });
    const roofGeo = new three__WEBPACK_IMPORTED_MODULE_1__.ConeGeometry(3.5, 2, 4);
    const roofMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 10824234 });
    for (let i = 0; i < 10; i++) {
      const houseGroup = new three__WEBPACK_IMPORTED_MODULE_1__.Group();
      const base = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(houseGeo, houseMat);
      base.position.y = 2;
      houseGroup.add(base);
      const roof = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(roofGeo, roofMat);
      roof.position.y = 5;
      roof.rotation.y = Math.PI / 4;
      houseGroup.add(roof);
      const x = (Math.random() - 0.5) * 80;
      const z = (Math.random() - 0.5) * 80;
      if (Math.abs(x) < 5 && Math.abs(z) < 5)
        continue;
      houseGroup.position.set(x, 0, z);
      houseGroup.rotation.y = Math.random() * Math.PI * 2;
      rogue_engine__WEBPACK_IMPORTED_MODULE_0__.App.currentScene.add(houseGroup);
    }
    const light = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(16777215, 1);
    light.position.set(20, 50, 20);
    rogue_engine__WEBPACK_IMPORTED_MODULE_0__.App.currentScene.add(light);
    const ambient = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(4210752, 0.5);
    rogue_engine__WEBPACK_IMPORTED_MODULE_0__.App.currentScene.add(ambient);
  }
  createPlayerAndCamera() {
    const pGeo = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(1, 1, 1);
    const pMat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({ color: 255 });
    const player = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(pGeo, pMat);
    player.position.y = 0.5;
    player.name = "Player";
    rogue_engine__WEBPACK_IMPORTED_MODULE_0__.App.currentScene.add(player);
    (0,rogue_engine__WEBPACK_IMPORTED_MODULE_0__.addComponent)(player, _ThirdPersonController__WEBPACK_IMPORTED_MODULE_2__.ThirdPersonController);
    let camera = rogue_engine__WEBPACK_IMPORTED_MODULE_0__.App.currentScene.getObjectByName("Main Camera");
    if (!camera) {
      camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
      camera.name = "Main Camera";
      rogue_engine__WEBPACK_IMPORTED_MODULE_0__.App.currentScene.add(camera);
    }
    (0,rogue_engine__WEBPACK_IMPORTED_MODULE_0__.addComponent)(camera, _CameraFollow__WEBPACK_IMPORTED_MODULE_3__.CameraFollow);
    const follow = (0,rogue_engine__WEBPACK_IMPORTED_MODULE_0__.getComponent)(camera, _CameraFollow__WEBPACK_IMPORTED_MODULE_3__.CameraFollow);
    if (follow) {
      follow.target = player;
    }
  }
}
__name(VillageGenerator, "VillageGenerator");


/***/ }),

/***/ "./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenCameraFlyover.re.ts":
/*!************************************************************************************!*\
  !*** ./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenCameraFlyover.re.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TweenCameraFlyover)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Lib_Tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Lib/Tween */ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Tween.ts");
/* harmony import */ var _Lib_Easings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Lib/Easings */ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Easings.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};




class TweenCameraFlyover extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.run = this.addMoveTween.bind(this);
    this.targetPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-3, 3, -10);
    this.durationMillis = 2e3;
    this.easing = 8;
    this.easingOptions = ["Linear", "Quadratic", "Cubic", "Quartic", "Quintic", "Sinusoidal", "Exponential", "Circular", "Elastic", "Back", "Bounce"];
    this.easingDirection = 2;
    this.easingDirectionOptions = ["EaseNone", "EaseIn", "EaseOut", "EaseInOut"];
    this.firstPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-11.627, 6.991, -16.249);
    this.secondPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(6, 20, -12);
  }
  awake() {
    this.targetPosition = this.secondPosition.clone();
  }
  start() {
  }
  update() {
    if (this.cameraTarget) {
      this.object3d.lookAt(this.cameraTarget.position);
    } else {
      rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Debug.logWarning("Camera has no look-at target set!");
    }
  }
  addMoveTween() {
    _Lib_Tween__WEBPACK_IMPORTED_MODULE_2__["default"].create(this.object3d.position, this.targetPosition, this.durationMillis, _Lib_Easings__WEBPACK_IMPORTED_MODULE_3__["default"][this.easingOptions[this.easing]][this.easingDirectionOptions[this.easingDirection]], this.onCompleted.bind(this));
  }
  onCompleted() {
    if (this.targetPosition.equals(this.firstPosition)) {
      this.targetPosition = this.secondPosition.clone();
    } else {
      this.targetPosition = this.firstPosition.clone();
    }
  }
}
__name(TweenCameraFlyover, "TweenCameraFlyover");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.button()
], TweenCameraFlyover.prototype, "run", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.vector3()
], TweenCameraFlyover.prototype, "targetPosition", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], TweenCameraFlyover.prototype, "durationMillis", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], TweenCameraFlyover.prototype, "easing", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], TweenCameraFlyover.prototype, "easingDirection", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.object3d()
], TweenCameraFlyover.prototype, "cameraTarget", 2);
rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(TweenCameraFlyover);


/***/ }),

/***/ "./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenCameraTruck.re copy.ts":
/*!***************************************************************************************!*\
  !*** ./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenCameraTruck.re copy.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TweenCameraPan)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Lib_Tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Lib/Tween */ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Tween.ts");
/* harmony import */ var _Lib_Easings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Lib/Easings */ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Easings.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};




class TweenCameraPan extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.run = this.addMoveTween.bind(this);
    this.targetFocusPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-3, 3, -10);
    this.durationMillis = 2e3;
    this.easing = 5;
    this.easingOptions = ["Linear", "Quadratic", "Cubic", "Quartic", "Quintic", "Sinusoidal", "Exponential", "Circular", "Elastic", "Back", "Bounce"];
    this.easingDirection = 3;
    this.easingDirectionOptions = ["EaseNone", "EaseIn", "EaseOut", "EaseInOut"];
    this.firstFocusPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
    this.secondFocusPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(17.627, 0, 4.249);
  }
  awake() {
    this.targetFocusPosition = this.secondFocusPosition.clone();
  }
  start() {
  }
  update() {
    if (this.cameraTarget) {
      this.object3d.lookAt(this.cameraTarget.position);
    } else {
      rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Debug.logWarning("Camera has no look-at target set!");
    }
  }
  addMoveTween() {
    _Lib_Tween__WEBPACK_IMPORTED_MODULE_2__["default"].create(this.cameraTarget.position, this.targetFocusPosition, this.durationMillis, _Lib_Easings__WEBPACK_IMPORTED_MODULE_3__["default"][this.easingOptions[this.easing]][this.easingDirectionOptions[this.easingDirection]], this.onCompleted.bind(this));
  }
  onCompleted() {
    if (this.targetFocusPosition.equals(this.firstFocusPosition)) {
      this.targetFocusPosition = this.secondFocusPosition.clone();
    } else {
      this.targetFocusPosition = this.firstFocusPosition.clone();
    }
  }
}
__name(TweenCameraPan, "TweenCameraPan");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.button()
], TweenCameraPan.prototype, "run", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.vector3()
], TweenCameraPan.prototype, "targetFocusPosition", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], TweenCameraPan.prototype, "durationMillis", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], TweenCameraPan.prototype, "easing", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], TweenCameraPan.prototype, "easingDirection", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.object3d()
], TweenCameraPan.prototype, "cameraTarget", 2);
rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(TweenCameraPan);


/***/ }),

/***/ "./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenCameraTruck.re.ts":
/*!**********************************************************************************!*\
  !*** ./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenCameraTruck.re.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TweenCameraTruck)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Lib_Tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Lib/Tween */ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Tween.ts");
/* harmony import */ var _Lib_Easings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Lib/Easings */ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Easings.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};




class TweenCameraTruck extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.run = this.addMoveTween.bind(this);
    this.targetCameraPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-3, 3, -10);
    this.targetFocusPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-3, 3, -10);
    this.durationMillis = 2e3;
    this.easing = 1;
    this.easingOptions = ["Linear", "Quadratic", "Cubic", "Quartic", "Quintic", "Sinusoidal", "Exponential", "Circular", "Elastic", "Back", "Bounce"];
    this.easingDirection = 3;
    this.easingDirectionOptions = ["EaseNone", "EaseIn", "EaseOut", "EaseInOut"];
    this.firstCameraPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-11.627, 6.991, -16.249);
    this.secondCameraPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(6, 6.991, -12);
    this.firstFocusPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
    this.secondFocusPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(17.627, 0, 4.249);
  }
  awake() {
    this.targetCameraPosition = this.secondCameraPosition.clone();
    this.targetFocusPosition = this.secondFocusPosition.clone();
  }
  start() {
  }
  update() {
    if (this.cameraTarget) {
      this.object3d.lookAt(this.cameraTarget.position);
    } else {
      rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Debug.logWarning("Camera has no look-at target set!");
    }
  }
  addMoveTween() {
    _Lib_Tween__WEBPACK_IMPORTED_MODULE_2__["default"].create(this.object3d.position, this.targetCameraPosition, this.durationMillis, _Lib_Easings__WEBPACK_IMPORTED_MODULE_3__["default"][this.easingOptions[this.easing]][this.easingDirectionOptions[this.easingDirection]], this.onCompleted.bind(this));
    _Lib_Tween__WEBPACK_IMPORTED_MODULE_2__["default"].create(this.cameraTarget.position, this.targetFocusPosition, this.durationMillis, _Lib_Easings__WEBPACK_IMPORTED_MODULE_3__["default"][this.easingOptions[this.easing]][this.easingDirectionOptions[this.easingDirection]]);
  }
  onCompleted() {
    if (this.targetCameraPosition.equals(this.firstCameraPosition)) {
      this.targetCameraPosition = this.secondCameraPosition.clone();
      this.targetFocusPosition = this.secondFocusPosition.clone();
    } else {
      this.targetCameraPosition = this.firstCameraPosition.clone();
      this.targetFocusPosition = this.firstFocusPosition.clone();
    }
  }
}
__name(TweenCameraTruck, "TweenCameraTruck");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.button()
], TweenCameraTruck.prototype, "run", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.vector3()
], TweenCameraTruck.prototype, "targetCameraPosition", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.vector3()
], TweenCameraTruck.prototype, "targetFocusPosition", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], TweenCameraTruck.prototype, "durationMillis", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], TweenCameraTruck.prototype, "easing", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], TweenCameraTruck.prototype, "easingDirection", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.object3d()
], TweenCameraTruck.prototype, "cameraTarget", 2);
rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(TweenCameraTruck);


/***/ }),

/***/ "./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenConfig.re.ts":
/*!*****************************************************************************!*\
  !*** ./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenConfig.re.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TweenConfig)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Lib_Tween__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Lib/Tween */ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Tween.ts");
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });


class TweenConfig extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  awake() {
  }
  start() {
  }
  update() {
    _Lib_Tween__WEBPACK_IMPORTED_MODULE_1__["default"].update();
  }
}
__name(TweenConfig, "TweenConfig");
rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(TweenConfig);


/***/ }),

/***/ "./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenPosition.re.ts":
/*!*******************************************************************************!*\
  !*** ./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenPosition.re.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TweenPosition)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Lib_Tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Lib/Tween */ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Tween.ts");
/* harmony import */ var _Lib_Easings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Lib/Easings */ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Easings.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};




class TweenPosition extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.run = this.addMoveTween.bind(this);
    this.targetPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-3, 3, -10);
    this.durationMillis = 2e3;
    this.easing = 8;
    this.easingOptions = ["Linear", "Quadratic", "Cubic", "Quartic", "Quintic", "Sinusoidal", "Exponential", "Circular", "Elastic", "Back", "Bounce"];
    this.easingDirection = 2;
    this.easingDirectionOptions = ["EaseNone", "EaseIn", "EaseOut", "EaseInOut"];
    this.firstPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-3, 3, 0);
    this.secondPosition = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-3, 3, -10);
  }
  awake() {
    this.targetPosition = this.secondPosition.clone();
  }
  start() {
  }
  update() {
  }
  addMoveTween() {
    _Lib_Tween__WEBPACK_IMPORTED_MODULE_2__["default"].create(this.object3d.position, this.targetPosition, this.durationMillis, _Lib_Easings__WEBPACK_IMPORTED_MODULE_3__["default"][this.easingOptions[this.easing]][this.easingDirectionOptions[this.easingDirection]], this.onCompleted.bind(this));
  }
  onCompleted() {
    if (this.targetPosition.equals(this.firstPosition)) {
      this.targetPosition = this.secondPosition.clone();
    } else {
      this.targetPosition = this.firstPosition.clone();
    }
  }
}
__name(TweenPosition, "TweenPosition");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.button()
], TweenPosition.prototype, "run", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.vector3()
], TweenPosition.prototype, "targetPosition", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], TweenPosition.prototype, "durationMillis", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], TweenPosition.prototype, "easing", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], TweenPosition.prototype, "easingDirection", 2);
rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(TweenPosition);


/***/ }),

/***/ "./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenRotation.re.ts":
/*!*******************************************************************************!*\
  !*** ./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenRotation.re.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TweenRotation)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Lib_Tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Lib/Tween */ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Tween.ts");
/* harmony import */ var _Lib_Easings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Lib/Easings */ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Easings.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};




class TweenRotation extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.run = this.addRotateTween.bind(this);
    this.targetRotationDegrees = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 90, 90);
    this.durationMillis = 2e3;
    this.easing = 1;
    this.easingOptions = ["Linear", "Quadratic", "Cubic", "Quartic", "Quintic", "Sinusoidal", "Exponential", "Circular", "Elastic", "Back", "Bounce"];
    this.easingDirection = 3;
    this.easingDirectionOptions = ["EaseNone", "EaseIn", "EaseOut", "EaseInOut"];
    this.firstRotation = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
    this.secondRotation = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 90, 90);
  }
  awake() {
    this.targetRotationDegrees = this.secondRotation.clone();
  }
  addRotateTween() {
    const rotationInRadians = this.targetRotationDegrees.clone().multiplyScalar(Math.PI / 180);
    _Lib_Tween__WEBPACK_IMPORTED_MODULE_2__["default"].create(this.object3d.rotation, rotationInRadians, this.durationMillis, _Lib_Easings__WEBPACK_IMPORTED_MODULE_3__["default"][this.easingOptions[this.easing]][this.easingDirectionOptions[this.easingDirection]], this.onCompleted.bind(this));
  }
  onCompleted() {
    if (this.targetRotationDegrees.equals(this.firstRotation)) {
      this.targetRotationDegrees = this.secondRotation.clone();
    } else {
      this.targetRotationDegrees = this.firstRotation.clone();
    }
  }
}
__name(TweenRotation, "TweenRotation");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.button()
], TweenRotation.prototype, "run", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.vector3()
], TweenRotation.prototype, "targetRotationDegrees", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], TweenRotation.prototype, "durationMillis", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], TweenRotation.prototype, "easing", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], TweenRotation.prototype, "easingDirection", 2);
rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(TweenRotation);


/***/ }),

/***/ "./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenScale.re.ts":
/*!****************************************************************************!*\
  !*** ./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenScale.re.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TweenScale)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Lib_Tween__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Lib/Tween */ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Tween.ts");
/* harmony import */ var _Lib_Easings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Lib/Easings */ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Easings.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};




class TweenScale extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.run = this.addScaleTween.bind(this);
    this.targetScale = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(2, 2, 2);
    this.durationMillis = 2e3;
    this.easing = 10;
    this.easingOptions = ["Linear", "Quadratic", "Cubic", "Quartic", "Quintic", "Sinusoidal", "Exponential", "Circular", "Elastic", "Back", "Bounce"];
    this.easingDirection = 2;
    this.easingDirectionOptions = ["EaseNone", "EaseIn", "EaseOut", "EaseInOut"];
    this.firstScale = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1);
    this.secondScale = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(2, 2, 2);
  }
  awake() {
    this.targetScale = this.secondScale.clone();
  }
  start() {
  }
  update() {
  }
  addScaleTween() {
    _Lib_Tween__WEBPACK_IMPORTED_MODULE_2__["default"].create(this.object3d.scale, this.targetScale, this.durationMillis, _Lib_Easings__WEBPACK_IMPORTED_MODULE_3__["default"][this.easingOptions[this.easing]][this.easingDirectionOptions[this.easingDirection]], this.onCompleted.bind(this));
  }
  onCompleted() {
    if (this.targetScale.equals(this.firstScale)) {
      this.targetScale = this.secondScale.clone();
    } else {
      this.targetScale = this.firstScale.clone();
    }
  }
}
__name(TweenScale, "TweenScale");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.button()
], TweenScale.prototype, "run", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.vector3()
], TweenScale.prototype, "targetScale", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num()
], TweenScale.prototype, "durationMillis", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], TweenScale.prototype, "easing", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], TweenScale.prototype, "easingDirection", 2);
rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(TweenScale);


/***/ }),

/***/ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Easings.ts":
/*!***************************************************************!*\
  !*** ./Assets/rogue_packages/EyeOfMidas/tween/Lib/Easings.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const EASINGS = {
  Linear: {
    EaseNone: (percentageComplete) => percentageComplete
  },
  Quadratic: {
    EaseIn: (percentageComplete) => percentageComplete * percentageComplete,
    EaseOut: (percentageComplete) => -percentageComplete * (percentageComplete - 2),
    EaseInOut: (percentageComplete) => {
      if ((percentageComplete *= 2) < 1)
        return 0.5 * percentageComplete * percentageComplete;
      return -0.5 * (--percentageComplete * (percentageComplete - 2) - 1);
    }
  },
  Cubic: {
    EaseIn: (percentageComplete) => percentageComplete * percentageComplete * percentageComplete,
    EaseOut: (percentageComplete) => --percentageComplete * percentageComplete * percentageComplete + 1,
    EaseInOut: (percentageComplete) => {
      if ((percentageComplete *= 2) < 1)
        return 0.5 * percentageComplete * percentageComplete * percentageComplete;
      return 0.5 * ((percentageComplete -= 2) * percentageComplete * percentageComplete + 2);
    }
  },
  Quartic: {
    EaseIn: (percentageComplete) => percentageComplete * percentageComplete * percentageComplete * percentageComplete,
    EaseOut: (percentageComplete) => -(--percentageComplete * percentageComplete * percentageComplete * percentageComplete - 1),
    EaseInOut: (percentageComplete) => {
      if ((percentageComplete *= 2) < 1)
        return 0.5 * percentageComplete * percentageComplete * percentageComplete * percentageComplete;
      return -0.5 * ((percentageComplete -= 2) * percentageComplete * percentageComplete * percentageComplete - 2);
    }
  },
  Quintic: {
    EaseIn: (percentageComplete) => percentageComplete * percentageComplete * percentageComplete * percentageComplete * percentageComplete,
    EaseOut: (percentageComplete) => (percentageComplete = percentageComplete - 1) * percentageComplete * percentageComplete * percentageComplete * percentageComplete + 1,
    EaseInOut: (percentageComplete) => {
      if ((percentageComplete *= 2) < 1)
        return 0.5 * percentageComplete * percentageComplete * percentageComplete * percentageComplete * percentageComplete;
      return 0.5 * ((percentageComplete -= 2) * percentageComplete * percentageComplete * percentageComplete * percentageComplete + 2);
    }
  },
  Sinusoidal: {
    EaseIn: (percentageComplete) => -Math.cos(percentageComplete * Math.PI / 2) + 1,
    EaseOut: (percentageComplete) => Math.sin(percentageComplete * Math.PI / 2),
    EaseInOut: (percentageComplete) => -0.5 * (Math.cos(Math.PI * percentageComplete) - 1)
  },
  Exponential: {
    EaseIn: (percentageComplete) => {
      return percentageComplete == 0 ? 0 : Math.pow(2, 10 * (percentageComplete - 1));
    },
    EaseOut: (percentageComplete) => {
      return percentageComplete == 1 ? 1 : -Math.pow(2, -10 * percentageComplete) + 1;
    },
    EaseInOut: (percentageComplete) => {
      if (percentageComplete == 0)
        return 0;
      if (percentageComplete == 1)
        return 1;
      if ((percentageComplete *= 2) < 1)
        return 0.5 * Math.pow(2, 10 * (percentageComplete - 1));
      return 0.5 * (-Math.pow(2, -10 * (percentageComplete - 1)) + 2);
    }
  },
  Circular: {
    EaseIn: (percentageComplete) => -(Math.sqrt(1 - percentageComplete * percentageComplete) - 1),
    EaseOut: (percentageComplete) => Math.sqrt(1 - --percentageComplete * percentageComplete),
    EaseInOut: (percentageComplete) => {
      if ((percentageComplete /= 0.5) < 1)
        return -0.5 * (Math.sqrt(1 - percentageComplete * percentageComplete) - 1);
      return 0.5 * (Math.sqrt(1 - (percentageComplete -= 2) * percentageComplete) + 1);
    }
  },
  Elastic: {
    EaseIn: (percentageComplete) => {
      var s, a = 0.1, p = 0.4;
      if (percentageComplete == 0)
        return 0;
      if (percentageComplete == 1)
        return 1;
      if (!p)
        p = 0.3;
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      return -(a * Math.pow(2, 10 * (percentageComplete -= 1)) * Math.sin((percentageComplete - s) * (2 * Math.PI) / p));
    },
    EaseOut: (percentageComplete) => {
      var s, a = 0.1, p = 0.4;
      if (percentageComplete == 0)
        return 0;
      if (percentageComplete == 1)
        return 1;
      if (!p)
        p = 0.3;
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      return a * Math.pow(2, -10 * percentageComplete) * Math.sin((percentageComplete - s) * (2 * Math.PI) / p) + 1;
    },
    EaseInOut: (percentageComplete) => {
      var s, a = 0.1, p = 0.4;
      if (percentageComplete == 0)
        return 0;
      if (percentageComplete == 1)
        return 1;
      if (!p)
        p = 0.3;
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else
        s = p / (2 * Math.PI) * Math.asin(1 / a);
      if ((percentageComplete *= 2) < 1)
        return -0.5 * (a * Math.pow(2, 10 * (percentageComplete -= 1)) * Math.sin((percentageComplete - s) * (2 * Math.PI) / p));
      return a * Math.pow(2, -10 * (percentageComplete -= 1)) * Math.sin((percentageComplete - s) * (2 * Math.PI) / p) * 0.5 + 1;
    }
  },
  Back: {
    EaseIn: (percentageComplete) => {
      var s = 1.70158;
      return percentageComplete * percentageComplete * ((s + 1) * percentageComplete - s);
    },
    EaseOut: (percentageComplete) => {
      var s = 1.70158;
      return (percentageComplete = percentageComplete - 1) * percentageComplete * ((s + 1) * percentageComplete + s) + 1;
    },
    EaseInOut: (percentageComplete) => {
      var s = 1.70158 * 1.525;
      if ((percentageComplete *= 2) < 1)
        return 0.5 * (percentageComplete * percentageComplete * ((s + 1) * percentageComplete - s));
      return 0.5 * ((percentageComplete -= 2) * percentageComplete * ((s + 1) * percentageComplete + s) + 2);
    }
  },
  Bounce: {
    EaseIn: (percentageComplete) => 1 - EASINGS.Bounce.EaseOut(1 - percentageComplete),
    EaseOut: (percentageComplete) => {
      if ((percentageComplete /= 1) < 1 / 2.75) {
        return 7.5625 * percentageComplete * percentageComplete;
      } else if (percentageComplete < 2 / 2.75) {
        return 7.5625 * (percentageComplete -= 1.5 / 2.75) * percentageComplete + 0.75;
      } else if (percentageComplete < 2.5 / 2.75) {
        return 7.5625 * (percentageComplete -= 2.25 / 2.75) * percentageComplete + 0.9375;
      } else {
        return 7.5625 * (percentageComplete -= 2.625 / 2.75) * percentageComplete + 0.984375;
      }
    },
    EaseInOut: (percentageComplete) => {
      if (percentageComplete < 0.5)
        return EASINGS.Bounce.EaseIn(percentageComplete * 2) * 0.5;
      return EASINGS.Bounce.EaseOut(percentageComplete * 2 - 1) * 0.5 + 0.5;
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EASINGS);


/***/ }),

/***/ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Tween.ts":
/*!*************************************************************!*\
  !*** ./Assets/rogue_packages/EyeOfMidas/tween/Lib/Tween.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tween)
/* harmony export */ });
/* harmony import */ var _Easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Easings */ "./Assets/rogue_packages/EyeOfMidas/tween/Lib/Easings.ts");
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

const _Tween = class {
  static create(obj, targetProperties, duration, easing = _Easings__WEBPACK_IMPORTED_MODULE_0__["default"].Linear.EaseNone, completedCallback = () => {
  }) {
    let singleTween = new _Tween();
    singleTween.id = ++_Tween.idCounter;
    singleTween.obj = obj;
    singleTween.objStart = {};
    singleTween.objTarget = targetProperties;
    _Tween.saveProperties(singleTween.objStart, obj, targetProperties);
    singleTween.startTime = new Date().getTime();
    singleTween.endTime = singleTween.startTime + duration;
    singleTween.easing = easing;
    singleTween.completedCallback = completedCallback;
    _Tween.activeTweens.push(singleTween);
    return singleTween.id;
  }
  static cancel(tweenId) {
    let tween = _Tween.activeTweens.find((tween2) => tweenId == tween2.id);
    if (tween) {
      let index = _Tween.activeTweens.indexOf(tween);
      _Tween.activeTweens.splice(index, 1);
      return tween;
    }
    return;
  }
  static stop(tweenId) {
    let tween = _Tween.cancel(tweenId);
    tween?.completedCallback();
    return tween;
  }
  static saveProperties(singleTweenStart, obj, targetProperties) {
    for (let property in targetProperties) {
      let startValue = obj[property];
      if (typeof startValue == "object") {
        singleTweenStart[property] = {};
        _Tween.saveProperties(singleTweenStart[property], obj[property], targetProperties[property]);
        continue;
      }
      singleTweenStart[property] = startValue;
    }
  }
  static update() {
    let completed = [];
    for (let i = 0; i < _Tween.activeTweens.length; i++) {
      let singleTween = _Tween.activeTweens[i];
      if (_Tween.updateSingleTween(singleTween) == 1) {
        completed.push(singleTween);
      }
    }
    for (let i = 0; i < completed.length; i++) {
      let singleTween = completed[i];
      singleTween.completedCallback();
      let foundIndex = _Tween.activeTweens.indexOf(singleTween);
      if (foundIndex != -1) {
        _Tween.activeTweens.splice(foundIndex, 1);
      }
    }
  }
  static updateSingleTween(singleTween) {
    let currentTime = new Date().getTime();
    let runTime = currentTime - singleTween.startTime;
    let duration = singleTween.endTime - singleTween.startTime;
    let percentageComplete = Math.min(1, runTime / duration);
    let valueToUpdate = singleTween.easing(percentageComplete);
    _Tween.updateProperties(singleTween.obj, singleTween.objStart, singleTween.objTarget, valueToUpdate);
    return percentageComplete;
  }
  static updateProperties(obj, objStart, objTarget, valueToUpdate) {
    for (let property in objStart) {
      let startValue = objStart[property];
      if (typeof startValue == "object") {
        _Tween.updateProperties(obj[property], objStart[property], objTarget[property], valueToUpdate);
        continue;
      }
      let endValue = objTarget[property];
      let delta = endValue - startValue;
      obj[property] = startValue + delta * valueToUpdate;
    }
  }
};
let Tween = _Tween;
__name(Tween, "Tween");
Tween.activeTweens = [];
Tween.idCounter = 0;

;


/***/ }),

/***/ "./Assets/rogue_packages/RogueEngine/rogue-animator/RogueAnimator.re.ts":
/*!******************************************************************************!*\
  !*** ./Assets/rogue_packages/RogueEngine/rogue-animator/RogueAnimator.re.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RogueAnimator)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


const v0 = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();
let RogueAnimator = class extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.clips = {};
    this.actions = {};
    this._selected = 0;
    this.selectedOptions = Object.keys(this.clips);
    this.playLabel = "Play";
    this.stopped = false;
    this.stopping = false;
    this.animationFinishedListeners = [];
    this.animationFinished = /* @__PURE__ */ __name(() => {
      if (this.stopping) {
        this.stopped = true;
        this.stopping = false;
      }
      this.animationFinishedListeners.forEach((listener) => listener());
      if (this.activeAction.loop === three__WEBPACK_IMPORTED_MODULE_1__.LoopOnce && !this.activeAction.clampWhenFinished) {
        this.mix(Object.keys(this.actions)[0], 0.1, 1, false);
      }
    }, "animationFinished");
  }
  get animations() {
    return this.isReady ? Object.values(this.clips) : [];
  }
  get selected() {
    this.selectedOptions = Object.keys(this.clips);
    this.isReady && this.animationsHaveChanged() && this.updateConfigs();
    return this._selected;
  }
  set selected(value) {
    this._selected = value;
    this.activeAction && this.activeAction.reset();
    this.animationsHaveChanged() && this.updateConfigs();
    if (this.playLabel === "Stop" && !rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.isRunning) {
      this.playAction();
    }
  }
  get selectedAction() {
    const actionName = this.selectedOptions[this.selected];
    return this.actions[actionName];
  }
  stopAction() {
    this.selectedAction?.reset();
    this.mixer.stopAllAction();
  }
  playAction() {
    this.stopAction();
    this.playLabel = "Stop";
    if (!this.selectedAction)
      return;
    this.selectedAction.play();
  }
  play() {
    if (rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.isRunning)
      return;
    if (this.playLabel === "Play" && !this.editorUpdate) {
      this.mixer;
      this.animationsHaveChanged() && this.updateConfigs();
      this.playAction();
      const rootBone = this.getRootBone();
      const originalPos = rootBone?.position.clone();
      this.editorUpdate = rogue_engine__WEBPACK_IMPORTED_MODULE_0__.onUpdate((sceneController) => {
        if (sceneController === rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime)
          return;
        if (this.animationsHaveChanged()) {
          this.stopAction();
          this.updateConfigs();
        }
        this.mixer.update(sceneController.deltaTime);
        originalPos && rootBone?.position.copy(originalPos);
      });
    } else {
      this.playLabel = "Play";
      this.stopAction();
      this.editorUpdate?.stop();
      this.editorUpdate = void 0;
    }
  }
  get isActive() {
    return !this.stopped && !this.stopping;
  }
  stop() {
    this.stopping = true;
  }
  resume() {
    this.stopped = false;
    this.stopping = false;
  }
  get mixer() {
    if (!this._mixer) {
      this._mixer = new three__WEBPACK_IMPORTED_MODULE_1__.AnimationMixer(this.object3d);
      this.actions = {};
      for (let key in this.clips) {
        let clip = this.clips[key];
        this.actions[key] = clip ? new three__WEBPACK_IMPORTED_MODULE_1__.AnimationAction(this._mixer, clip) : void 0;
      }
    }
    return this._mixer;
  }
  animationsHaveChanged() {
    if (this.selectedOptions.length !== this.animations.length)
      return true;
    const keys = Object.keys(this.clips);
    for (let i = 0; i < this.selectedOptions.length; i++) {
      if (this.selectedOptions[i] !== keys[i])
        return true;
      if (this.actions[keys[i]]) {
        if (this.actions[keys[i]].getClip() !== this.clips[keys[i]])
          return true;
      } else {
        if (this.clips[keys[i]])
          return true;
      }
    }
    return false;
  }
  updateConfigs() {
    this._mixer = void 0;
    this.mixer;
  }
  get baseAction() {
    if (!this._baseAction)
      this._baseAction = Object.values(this.actions)[0];
    return this._baseAction;
  }
  set baseAction(action) {
    this._baseAction = action;
  }
  setBaseAction(actionName) {
    this._baseAction = this.getAction(actionName);
  }
  setWeight(action, weight) {
    if (typeof action === "string") {
      action = this.getAction(action);
    }
    action?.setEffectiveWeight(weight);
  }
  getAction(name) {
    return this.actions[name];
  }
  getWeight(action) {
    if (typeof action === "string") {
      action = this.getAction(action);
    }
    return action?.getEffectiveWeight() | 0;
  }
  mix(actionName, transitionTime = 0.1, weight = 1, warp = true) {
    const action = this.getAction(actionName);
    if (!action)
      return;
    if (action === this.activeAction) {
      action.setEffectiveWeight(weight);
      if (weight < 1) {
        this.baseAction.enabled = true;
        this.baseAction.setEffectiveTimeScale(1);
        this.baseAction?.setEffectiveWeight(1 - weight);
      }
      return;
    }
    action.reset();
    if (!this.activeAction) {
      this.activeAction = action;
    }
    this.activeAction.enabled = true;
    action.enabled = true;
    if (weight >= 0.8) {
      this.setWeight(this.baseAction, 0);
    }
    action.crossFadeFrom(this.activeAction, transitionTime, warp);
    this.setWeight(action, weight);
    this.baseAction = this.activeAction;
    this.activeAction = action;
  }
  getRootBone() {
    return this.findRootBone(this.object3d);
  }
  findRootBone(object) {
    if (object instanceof three__WEBPACK_IMPORTED_MODULE_1__.Bone) {
      return object;
    }
    for (let child of object.children) {
      const skeleton = this.findRootBone(child);
      if (skeleton)
        return skeleton;
    }
    return;
  }
  onAnimationFinished(cb) {
    this.animationFinishedListeners.push(cb);
  }
  awake() {
    this.editorUpdate?.stop();
    this.editorUpdate = void 0;
  }
  start() {
    this.updateConfigs();
    this.mixer.existingAction(this.animations[this.selected])?.reset();
    this.mixer.stopAllAction();
    Object.values(this.actions).forEach((action, i) => {
      if (!action)
        return;
      action.play();
      this.setWeight(action, 0);
    });
    this.mixer.removeEventListener("finished", this.animationFinished);
    this.mixer.addEventListener("finished", this.animationFinished);
    const actionName = Object.keys(this.actions)[0];
    this.mix(actionName);
  }
  update() {
    const rootBone = this.getRootBone();
    let pos = v0;
    if (rootBone) {
      pos = rootBone.position.clone();
    }
    this.mixer.update(rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.deltaTime);
    if (rootBone) {
      rootBone.position.x = pos.x;
      rootBone.position.z = pos.z;
    }
  }
};
__name(RogueAnimator, "RogueAnimator");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.map.animation()
], RogueAnimator.prototype, "clips", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], RogueAnimator.prototype, "selected", 1);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.button()
], RogueAnimator.prototype, "play", 1);
RogueAnimator = __decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent
], RogueAnimator);



/***/ }),

/***/ "./Assets/rogue_packages/RogueEngine/rogue-character/DamagePoint.re.ts":
/*!*****************************************************************************!*\
  !*** ./Assets/rogue_packages/RogueEngine/rogue-character/DamagePoint.re.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DamagePoint)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RE_RogueEngine_rogue_character_RogueCharacter_re__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @RE/RogueEngine/rogue-character/RogueCharacter.re */ "./Assets/rogue_packages/RogueEngine/rogue-character/RogueCharacter.re.ts");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};


let DamagePoint = class extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.multiplier = 1;
  }
  applyDamage(damage) {
    const enemyCharacter = _RE_RogueEngine_rogue_character_RogueCharacter_re__WEBPACK_IMPORTED_MODULE_1__["default"].get(this.object3d, true);
    const actualDamage = damage * this.multiplier;
    enemyCharacter?.applyDamage(actualDamage);
  }
};
__name(DamagePoint, "DamagePoint");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num(0)
], DamagePoint.prototype, "multiplier", 2);
DamagePoint = __decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent
], DamagePoint);



/***/ }),

/***/ "./Assets/rogue_packages/RogueEngine/rogue-character/RogueCharacter.re.ts":
/*!********************************************************************************!*\
  !*** ./Assets/rogue_packages/RogueEngine/rogue-character/RogueCharacter.re.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RogueCharacter)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

let RogueCharacter = class extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.type = "Friendly";
    this.typeOptions = [
      { name: "Friendly", value: "Friendly" },
      { name: "Enemy", value: "Enemy" }
    ];
    this.hp = 100;
    this.shield = 100;
    this.armor = 10;
    this.stamina = 100;
    this.hpRegen = 20;
    this.shieldRegen = 20;
    this.staminaRegen = 20;
    this.hpRegenWait = 1.5;
    this.shieldRegenWait = 1.5;
    this.staminaRegenWait = 1;
    this.curHP = this.hp;
    this.curShield = this.shield;
    this.curStamina = this.stamina;
    this.curHpRegenWait = 0;
    this.curShieldRegenWait = 0;
    this.curStaminaRegenWait = 0;
  }
  afterUpdate() {
    if (this.curHP === 0)
      return;
    this.curHpRegenWait = Math.max(this.curHpRegenWait - rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.deltaTime, 0);
    if (this.hpRegen > 0 && this.curHP < this.hp && this.curHpRegenWait === 0) {
      this.curHP = Math.min(this.curHP + this.hpRegen * rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.deltaTime, this.hp);
    }
    this.curShieldRegenWait = Math.max(this.curShieldRegenWait - rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.deltaTime, 0);
    if (this.shieldRegen > 0 && this.curShield < this.shield && this.curShieldRegenWait === 0) {
      this.curShield = Math.min(this.curShield + this.shieldRegen * rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.deltaTime, this.shield);
    }
    this.curStaminaRegenWait = Math.max(this.curStaminaRegenWait - rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.deltaTime, 0);
    if (this.staminaRegen > 0 && this.curStamina < this.shield && this.curStaminaRegenWait === 0) {
      this.curStamina = Math.min(this.curStamina + this.staminaRegen * rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.deltaTime, this.stamina);
    }
  }
  spendStamina(amount) {
    if (amount < 0)
      return;
    this.curStamina = Math.max(this.curStamina - amount, 0);
    this.curStaminaRegenWait = this.staminaRegenWait;
  }
  recoverStamina(amount) {
    if (amount < 0)
      return;
    this.curStamina = Math.min(this.curStamina + amount, this.stamina);
  }
  recoverShield(amount) {
    if (amount < 0)
      return;
    this.curShield = Math.min(this.curShield + amount, this.shield);
  }
  heal(amount) {
    if (amount < 0)
      return;
    this.curHP = Math.min(this.curHP + amount, this.hp);
  }
  applyDamage(damage) {
    if (damage < 0)
      return;
    let actualDamage = damage;
    if (this.shield > 0) {
      this.curShieldRegenWait = this.shieldRegenWait;
    }
    this.curHpRegenWait = this.hpRegenWait;
    if (this.shield > 0 && this.curShield > 0) {
      actualDamage = this.curShield - damage;
      this.curShield = Math.max(actualDamage, 0);
      actualDamage = Math.abs(actualDamage);
      if (this.curShield > 0)
        return;
    }
    actualDamage = Math.max(actualDamage - this.armor, 0);
    this.curHP = Math.max(this.curHP - actualDamage, 0);
  }
};
__name(RogueCharacter, "RogueCharacter");
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.select()
], RogueCharacter.prototype, "type", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num(0)
], RogueCharacter.prototype, "hp", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num(0)
], RogueCharacter.prototype, "shield", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num(0)
], RogueCharacter.prototype, "armor", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num(0)
], RogueCharacter.prototype, "stamina", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num(0)
], RogueCharacter.prototype, "hpRegen", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num(0)
], RogueCharacter.prototype, "shieldRegen", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num(0)
], RogueCharacter.prototype, "staminaRegen", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num(0)
], RogueCharacter.prototype, "hpRegenWait", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num(0)
], RogueCharacter.prototype, "shieldRegenWait", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num(0)
], RogueCharacter.prototype, "staminaRegenWait", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num(0)
], RogueCharacter.prototype, "curHP", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num(0)
], RogueCharacter.prototype, "curShield", 2);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.num(0)
], RogueCharacter.prototype, "curStamina", 2);
RogueCharacter = __decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent
], RogueCharacter);



/***/ }),

/***/ "./Assets/rogue_packages/RogueEngine/rogue-css2d/RogueCSS2D.re.ts":
/*!************************************************************************!*\
  !*** ./Assets/rogue_packages/RogueEngine/rogue-css2d/RogueCSS2D.re.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RogueCSS2D)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/renderers/CSS2DRenderer */ "./node_modules/three/examples/jsm/renderers/CSS2DRenderer.js");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};



const _RogueCSS2D = class extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.offset = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0);
    this.div = document.createElement("div");
    this.css2DObject = new three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_2__.CSS2DObject(this.div);
  }
  get content() {
    return this.div.innerHTML || "Hello World!";
  }
  set content(v) {
    this.div.innerHTML = v;
  }
  awake() {
    if (!this.enabled)
      return;
    this.setupLabel();
    _RogueCSS2D.setupLabelRenderer();
  }
  setupLabel() {
    if (!this.enabled)
      return;
    const labelObj = this.object3d.children.find((child) => child.userData.isCSS2DLabel);
    if (labelObj)
      this.object3d.remove(labelObj);
    this.object3d.add(this.css2DObject);
    this.css2DObject.name = this.name;
    this.css2DObject.position.copy(this.offset);
    this.css2DObject.userData.isCSS2DLabel = true;
    this.css2DObject.layers.set(0);
  }
  static setupLabelRenderer() {
    const container = rogue_engine__WEBPACK_IMPORTED_MODULE_0__.App.sceneController.rogueDOMContainer.parentElement;
    while (_RogueCSS2D.renderer.domElement.firstChild) {
      _RogueCSS2D.renderer.domElement.removeChild(_RogueCSS2D.renderer.domElement.lastChild);
    }
    _RogueCSS2D.renderer.domElement.id = "CSS2DRenderer";
    document.getElementById("CSS2DRenderer")?.remove();
    _RogueCSS2D.renderer.setSize(rogue_engine__WEBPACK_IMPORTED_MODULE_0__.App.sceneController.rogueDOMContainer.clientWidth, rogue_engine__WEBPACK_IMPORTED_MODULE_0__.App.sceneController.rogueDOMContainer.clientHeight);
    _RogueCSS2D.renderer.domElement.style.position = "absolute";
    container.prepend(_RogueCSS2D.renderer.domElement);
  }
  update() {
    const { clientWidth, clientHeight } = rogue_engine__WEBPACK_IMPORTED_MODULE_0__.App.sceneController.rogueDOMContainer;
    const { width, height } = _RogueCSS2D.renderer.getSize();
    if (clientWidth !== width || clientHeight !== height) {
      _RogueCSS2D.renderer.setSize(clientWidth, clientHeight);
    }
    this.css2DObject.position.copy(this.offset);
    _RogueCSS2D.renderer.render(rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.scene, rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.camera);
  }
  onBeforeRemoved() {
    this.css2DObject.parent?.remove(this.css2DObject);
  }
  onDisabled() {
    this.object3d.remove(this.css2DObject);
  }
};
let RogueCSS2D = _RogueCSS2D;
__name(RogueCSS2D, "RogueCSS2D");
RogueCSS2D.renderer = new three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_2__.CSS2DRenderer();
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.code("html")
], RogueCSS2D.prototype, "content", 1);
__decorateClass([
  rogue_engine__WEBPACK_IMPORTED_MODULE_0__.props.vector3()
], RogueCSS2D.prototype, "offset", 2);

rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(RogueCSS2D);


/***/ }),

/***/ "rogue-engine":
/*!******************************************************************************************************************!*\
  !*** external {"commonjs":"rogue-engine","commonjs2":"rogue-engine","amd":"rogue-engine","root":"rogue-engine"} ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_rogue_engine__;

/***/ }),

/***/ "three":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"three","commonjs2":"three","amd":"three","root":"three"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_three__;

/***/ }),

/***/ "./node_modules/three/examples/jsm/renderers/CSS2DRenderer.js":
/*!********************************************************************!*\
  !*** ./node_modules/three/examples/jsm/renderers/CSS2DRenderer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSS2DObject": () => (/* binding */ CSS2DObject),
/* harmony export */   "CSS2DRenderer": () => (/* binding */ CSS2DRenderer)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");


class CSS2DObject extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {

	constructor( element = document.createElement( 'div' ) ) {

		super();

		this.isCSS2DObject = true;

		this.element = element;

		this.element.style.position = 'absolute';
		this.element.style.userSelect = 'none';

		this.element.setAttribute( 'draggable', false );

		this.center = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2( 0.5, 0.5 ); // ( 0, 0 ) is the lower left; ( 1, 1 ) is the top right

		this.addEventListener( 'removed', function () {

			this.traverse( function ( object ) {

				if ( object.element instanceof Element && object.element.parentNode !== null ) {

					object.element.parentNode.removeChild( object.element );

				}

			} );

		} );

	}

	copy( source, recursive ) {

		super.copy( source, recursive );

		this.element = source.element.cloneNode( true );

		this.center = source.center;

		return this;

	}

}

//

const _vector = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const _viewMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
const _viewProjectionMatrix = new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4();
const _a = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
const _b = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

class CSS2DRenderer {

	constructor( parameters = {} ) {

		const _this = this;

		let _width, _height;
		let _widthHalf, _heightHalf;

		const cache = {
			objects: new WeakMap()
		};

		const domElement = parameters.element !== undefined ? parameters.element : document.createElement( 'div' );

		domElement.style.overflow = 'hidden';

		this.domElement = domElement;

		this.getSize = function () {

			return {
				width: _width,
				height: _height
			};

		};

		this.render = function ( scene, camera ) {

			if ( scene.matrixWorldAutoUpdate === true ) scene.updateMatrixWorld();
			if ( camera.parent === null && camera.matrixWorldAutoUpdate === true ) camera.updateMatrixWorld();

			_viewMatrix.copy( camera.matrixWorldInverse );
			_viewProjectionMatrix.multiplyMatrices( camera.projectionMatrix, _viewMatrix );

			renderObject( scene, scene, camera );
			zOrder( scene );

		};

		this.setSize = function ( width, height ) {

			_width = width;
			_height = height;

			_widthHalf = _width / 2;
			_heightHalf = _height / 2;

			domElement.style.width = width + 'px';
			domElement.style.height = height + 'px';

		};

		function hideObject( object ) {

			if ( object.isCSS2DObject ) object.element.style.display = 'none';

			for ( let i = 0, l = object.children.length; i < l; i ++ ) {

				hideObject( object.children[ i ] );

			}

		}

		function renderObject( object, scene, camera ) {

			if ( object.visible === false ) {

				hideObject( object );

				return;

			}
			
			if ( object.isCSS2DObject ) {

				_vector.setFromMatrixPosition( object.matrixWorld );
				_vector.applyMatrix4( _viewProjectionMatrix );

				const visible = ( _vector.z >= - 1 && _vector.z <= 1 ) && ( object.layers.test( camera.layers ) === true );

				const element = object.element;
				element.style.display = visible === true ? '' : 'none';

				if ( visible === true ) {

					object.onBeforeRender( _this, scene, camera );

					element.style.transform = 'translate(' + ( - 100 * object.center.x ) + '%,' + ( - 100 * object.center.y ) + '%)' + 'translate(' + ( _vector.x * _widthHalf + _widthHalf ) + 'px,' + ( - _vector.y * _heightHalf + _heightHalf ) + 'px)';

					if ( element.parentNode !== domElement ) {

						domElement.appendChild( element );

					}

					object.onAfterRender( _this, scene, camera );

				}

				const objectData = {
					distanceToCameraSquared: getDistanceToSquared( camera, object )
				};

				cache.objects.set( object, objectData );

			}

			for ( let i = 0, l = object.children.length; i < l; i ++ ) {

				renderObject( object.children[ i ], scene, camera );

			}

		}

		function getDistanceToSquared( object1, object2 ) {

			_a.setFromMatrixPosition( object1.matrixWorld );
			_b.setFromMatrixPosition( object2.matrixWorld );

			return _a.distanceToSquared( _b );

		}

		function filterAndFlatten( scene ) {

			const result = [];

			scene.traverseVisible( function ( object ) {

				if ( object.isCSS2DObject ) result.push( object );

			} );

			return result;

		}

		function zOrder( scene ) {

			const sorted = filterAndFlatten( scene ).sort( function ( a, b ) {

				if ( a.renderOrder !== b.renderOrder ) {

					return b.renderOrder - a.renderOrder;

				}

				const distanceA = cache.objects.get( a ).distanceToCameraSquared;
				const distanceB = cache.objects.get( b ).distanceToCameraSquared;

				return distanceA - distanceB;

			} );

			const zMax = sorted.length;

			for ( let i = 0, l = sorted.length; i < l; i ++ ) {

				sorted[ i ].element.style.zIndex = zMax - i;

			}

		}

	}

}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"rogue-engine-user-scripts": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_name_"] = self["webpackChunk_name_"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./Assets/Components/CameraFollow.ts");
/******/ 	__webpack_require__("./Assets/Components/ThirdPersonController.ts");
/******/ 	__webpack_require__("./Assets/Components/VillageGenerator.ts");
/******/ 	__webpack_require__("./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenCameraFlyover.re.ts");
/******/ 	__webpack_require__("./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenCameraTruck.re copy.ts");
/******/ 	__webpack_require__("./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenCameraTruck.re.ts");
/******/ 	__webpack_require__("./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenConfig.re.ts");
/******/ 	__webpack_require__("./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenPosition.re.ts");
/******/ 	__webpack_require__("./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenRotation.re.ts");
/******/ 	__webpack_require__("./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenScale.re.ts");
/******/ 	__webpack_require__("./Assets/rogue_packages/EyeOfMidas/tween/Lib/Easings.ts");
/******/ 	__webpack_require__("./Assets/rogue_packages/EyeOfMidas/tween/Lib/Tween.ts");
/******/ 	__webpack_require__("./Assets/rogue_packages/RogueEngine/rogue-animator/RogueAnimator.re.ts");
/******/ 	__webpack_require__("./Assets/rogue_packages/RogueEngine/rogue-character/DamagePoint.re.ts");
/******/ 	__webpack_require__("./Assets/rogue_packages/RogueEngine/rogue-character/RogueCharacter.re.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./Assets/rogue_packages/RogueEngine/rogue-css2d/RogueCSS2D.re.ts");
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=rogue-engine-user-scripts.js.map