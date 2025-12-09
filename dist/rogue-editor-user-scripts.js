"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rogue-editor-user-scripts"] = factory();
	else
		root["rogue-editor-user-scripts"] = factory();
})(self, function() {
return (self["webpackChunk_name_"] = self["webpackChunk_name_"] || []).push([["rogue-editor-user-scripts"],{

/***/ "./Assets/rogue_packages/RogueEngine/rogue-css2d/_Editor/RogueCSS2DEditor.re.ts":
/*!**************************************************************************************!*\
  !*** ./Assets/rogue_packages/RogueEngine/rogue-css2d/_Editor/RogueCSS2DEditor.re.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RogueCSS2DEditor)
/* harmony export */ });
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rogue-engine */ "rogue-engine");
/* harmony import */ var rogue_engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rogue_engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RogueCSS2D_re__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../RogueCSS2D.re */ "./Assets/rogue_packages/RogueEngine/rogue-css2d/RogueCSS2D.re.ts");
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });


class RogueCSS2DEditor extends rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.handleOnComponentAdded = { stop: () => {
    } };
    this.handleOnComponentRemoved = { stop: () => {
    } };
    this.handleOnObjectAdded = { stop: () => {
    } };
    this.setUp = /* @__PURE__ */ __name(() => {
      rogue_engine__WEBPACK_IMPORTED_MODULE_0__.traverseComponents((component) => {
        if (!(component instanceof _RogueCSS2D_re__WEBPACK_IMPORTED_MODULE_1__["default"]))
          return;
        component.setupLabel();
      });
      _RogueCSS2D_re__WEBPACK_IMPORTED_MODULE_1__["default"].setupLabelRenderer();
    }, "setUp");
  }
  start() {
    this.setUp();
    this.handleOnComponentAdded?.stop();
    this.handleOnComponentRemoved?.stop();
    this.handleOnObjectAdded = rogue_engine__WEBPACK_IMPORTED_MODULE_0__.onObjectAdded((obj) => {
      rogue_engine__WEBPACK_IMPORTED_MODULE_0__.onNextFrame(() => {
        const comp = _RogueCSS2D_re__WEBPACK_IMPORTED_MODULE_1__["default"].get(obj);
        if (comp) {
          this.setUp();
        }
      });
    });
    this.handleOnComponentAdded = rogue_engine__WEBPACK_IMPORTED_MODULE_0__.onComponentAdded(this.setUp);
    this.handleOnComponentRemoved = rogue_engine__WEBPACK_IMPORTED_MODULE_0__.onComponentRemoved((comp) => {
      if (!(comp instanceof _RogueCSS2D_re__WEBPACK_IMPORTED_MODULE_1__["default"]))
        return;
      comp.css2DObject.removeFromParent();
    });
    const onPlay = rogue_engine__WEBPACK_IMPORTED_MODULE_0__.Runtime.onPlay(() => {
      this.handleOnComponentAdded.stop();
      this.handleOnComponentRemoved.stop();
      this.handleOnObjectAdded.stop();
      onPlay.stop();
    });
  }
  update() {
    const { clientWidth, clientHeight } = rogue_engine__WEBPACK_IMPORTED_MODULE_0__.App.sceneController.rogueDOMContainer;
    const { width, height } = _RogueCSS2D_re__WEBPACK_IMPORTED_MODULE_1__["default"].renderer.getSize();
    if (clientWidth !== width || clientHeight !== height) {
      _RogueCSS2D_re__WEBPACK_IMPORTED_MODULE_1__["default"].renderer.setSize(clientWidth, clientHeight);
    }
    _RogueCSS2D_re__WEBPACK_IMPORTED_MODULE_1__["default"].renderer.render(rogue_engine__WEBPACK_IMPORTED_MODULE_0__.App.sceneController.scene, rogue_engine__WEBPACK_IMPORTED_MODULE_0__.App.sceneController.camera);
    rogue_engine__WEBPACK_IMPORTED_MODULE_0__.traverseComponents((component) => {
      if (!(component instanceof _RogueCSS2D_re__WEBPACK_IMPORTED_MODULE_1__["default"]))
        return;
      component.css2DObject.position.copy(component.offset);
    });
  }
}
__name(RogueCSS2DEditor, "RogueCSS2DEditor");
RogueCSS2DEditor.isEditorComponent = true;
rogue_engine__WEBPACK_IMPORTED_MODULE_0__.registerComponent(RogueCSS2DEditor);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./Assets/Components/CameraFollow.ts"), __webpack_exec__("./Assets/Components/ThirdPersonController.ts"), __webpack_exec__("./Assets/Components/VillageGenerator.ts"), __webpack_exec__("./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenCameraFlyover.re.ts"), __webpack_exec__("./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenCameraTruck.re copy.ts"), __webpack_exec__("./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenCameraTruck.re.ts"), __webpack_exec__("./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenConfig.re.ts"), __webpack_exec__("./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenPosition.re.ts"), __webpack_exec__("./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenRotation.re.ts"), __webpack_exec__("./Assets/rogue_packages/EyeOfMidas/tween/Components/TweenScale.re.ts"), __webpack_exec__("./Assets/rogue_packages/EyeOfMidas/tween/Lib/Easings.ts"), __webpack_exec__("./Assets/rogue_packages/EyeOfMidas/tween/Lib/Tween.ts"), __webpack_exec__("./Assets/rogue_packages/RogueEngine/rogue-animator/RogueAnimator.re.ts"), __webpack_exec__("./Assets/rogue_packages/RogueEngine/rogue-character/DamagePoint.re.ts"), __webpack_exec__("./Assets/rogue_packages/RogueEngine/rogue-character/RogueCharacter.re.ts"), __webpack_exec__("./Assets/rogue_packages/RogueEngine/rogue-css2d/_Editor/RogueCSS2DEditor.re.ts"), __webpack_exec__("./Assets/rogue_packages/RogueEngine/rogue-css2d/RogueCSS2D.re.ts"));
/******/ return __webpack_exports__;
/******/ }
]);
});
//# sourceMappingURL=rogue-editor-user-scripts.js.map