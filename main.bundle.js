webpackJsonp([0,3],{

/***/ 1137:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1138:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1139:
/***/ function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n.component {\n    display: inline-block;\n    margin-right: 5px;\n}\n\n/deep/ #ground-switcher mdl-switch .mdl-switch__track {\n    background-color: rgba(244, 54, 72, 0.5);\n}\n\n/deep/ #ground-switcher mdl-switch .mdl-switch__thumb {\n    background-color: rgba(244, 54, 72, 1);\n}\n\n/deep/ #ground-switcher mdl-switch.is-checked .mdl-switch__track{\n    background-color: rgba(114, 181, 63, 0.5);\n}\n\n/deep/ #ground-switcher mdl-switch.is-checked .mdl-switch__thumb{\n    background-color: rgba(114, 181, 63, 1);\n}\n"

/***/ },

/***/ 1140:
/***/ function(module, exports) {

module.exports = "canvas{\n    cursor: default;\n}\n"

/***/ },

/***/ 1141:
/***/ function(module, exports) {

module.exports = ".center{\n    text-align: center;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n.canvas-layer{\n    position: relative;\n}\n.canvas-layer base-image{\n    position: absolute;\n}\n.canvas-layer drawable-canvas{\n    position: absolute;\n    opacity: 0.5;\n}\n"

/***/ },

/***/ 1142:
/***/ function(module, exports) {

module.exports = ".center{\n    text-align: center;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n"

/***/ },

/***/ 1143:
/***/ function(module, exports) {

module.exports = "<mdl-layout mdl-fixed-header>\n    <mdl-layout-header>\n        <mdl-layout-header-row>\n            <mdl-layout-title>Amazon Turk Annotation Test</mdl-layout-title>\n        </mdl-layout-header-row>\n    </mdl-layout-header>\n    <mdl-layout-content>\n        <modification-layer *ngIf=\"isPage('modification')\"></modification-layer>\n        <verification-layer *ngIf=\"isPage('verification')\"></verification-layer>\n    </mdl-layout-content>\n</mdl-layout>\n"

/***/ },

/***/ 1144:
/***/ function(module, exports) {

module.exports = "\n<canvas #canvas [height]=\"height\" [width]=\"width\"></canvas>\n"

/***/ },

/***/ 1145:
/***/ function(module, exports) {

module.exports = "<button mdl-button mdl-button-type=\"raised\" mdl-ripple\n    (click)=\"reset()\">\n    RESET\n</button>\n\n<span>\n    brush size: {{brushSize}}\n</span>\n<div id=\"slider-bar\" class=\"component\">\n    <mdl-slider min=\"2\" max=\"20\" [(ngModel)]=\"brushSize\"\n        (ngModelChange)=\"setSize($event)\"></mdl-slider>\n</div>\n<svg height=\"30px\" width=\"30px\" class=\"component\">\n    <circle cx=\"50%\" cy=\"50%\"\n    [attr.r]=\"brushSize\" [attr.fill]=\"groundColor(groundChecked)\"></circle>\n</svg>\n<div id=\"ground-switcher\" class=\"component\">\n    <mdl-switch [(ngModel)]=\"groundChecked\" mdl-ripple\n        (ngModelChange)=\"setGround($event)\"></mdl-switch>\n    <span>\n        {{groundText(groundChecked)}}\n    </span>\n</div>\n"

/***/ },

/***/ 1146:
/***/ function(module, exports) {

module.exports = "<canvas #canvas [height]=\"height\" [width]=\"width\" (mouseup)=\"dragEnd($event)\" (mousedown)=\"dragStart($event)\" (mousemove)=\"dragMove($event)\"></canvas>\n"

/***/ },

/***/ 1147:
/***/ function(module, exports) {

module.exports = "<div class=\"center\">\n    <app-control-bar></app-control-bar>\n</div>\n<div class=\"canvas-layer center\" [style.width.px]=\"width\" [style.height.px]=\"height\">\n    <base-image [height]=\"height\" [width]=\"width\"></base-image>\n    <drawable-canvas [height]=\"height\" [width]=\"width\"></drawable-canvas>\n</div>\n<div class=\"center\">\n<button mdl-button mdl-ripple (click)=\"submit($event)\">SUBMIT</button>\n</div>\n\n"

/***/ },

/***/ 1148:
/***/ function(module, exports) {

module.exports = "<div class=\"center\">\n    <base-image [height]=\"height\" [width]=\"width\"></base-image>\n</div>\n<div class=\"center\">\n    <button mdl-button mdl-ripple (click)=\"submit(true)\">YES</button>\n    <button mdl-button mdl-ripple (click)=\"submit(false)\">NO</button>\n</div>\n"

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__(985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_Utils__ = __webpack_require__(684);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfigService = (function () {
    function ConfigService(http) {
        var _this = this;
        this.bucket = new __WEBPACK_IMPORTED_MODULE_2_aws_sdk__["S3"]();
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* URLSearchParams */](window.location.search.slice(1));
        var height, width;
        _a = param.get('vid').split(','), this.videoId = _a[0], this.objectId = _a[1], this.frameId = _a[2];
        this.destination = 'https://workersandbox.mturk.com/mturk/externalSubmit';
        this.page = param.get('page');
        this.size = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) {
            http.get(_this.getBoundingSrc()).subscribe(function (res) {
                var parser = new DOMParser();
                var xml = parser.parseFromString(res.text(), 'text/xml');
                var queryint = function (query) { return parseInt(xml.querySelector(query).textContent); };
                var height = queryint('size height');
                var width = queryint('size width');
                var scale = 600 / width;
                observer.next([width * scale, height * scale]);
                _this.width = width * scale;
                _this.height = height * scale;
            });
        });
        this.bucket.config.update({
            credentials: new __WEBPACK_IMPORTED_MODULE_2_aws_sdk__["Credentials"]('AKIAJVK7INOUTATLACQQ', 'bXfmxk7zzh5hZA+vRg/wk28e3vbs5w7eOukpL7wa'),
            region: 'us-west-2'
        });
        var _a;
    }
    ConfigService.prototype.getFrameSrc = function () {
        return window.location.pathname + "assets/" + this.videoId + "/" + this.objectId + "_" + this.frameId + ".png";
    };
    ConfigService.prototype.getBoundingSrc = function () {
        return window.location.pathname + "assets/" + this.videoId + "/00" + this.frameId + ".xml";
    };
    ConfigService.prototype.submitVerification = function (valid) {
        this.submitForm({
            'assignmentId': this.assignmentId,
            'frameId': this.frameId,
            'objectId': this.objectId,
            'videoId': this.videoId,
            'valid': valid.toString(),
        }, this.destination);
    };
    ConfigService.prototype.submitModification = function (image) {
        var _this = this;
        var _a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_Utils__["a" /* imgdata2mask */])(image), red = _a[0], green = _a[1];
        var f_red = new File([red], 'red.mask', { type: 'text/binary' });
        var f_green = new File([green], 'green.mask', { type: 'text/binary' });
        var n_red = 'green';
        var n_green = 'red';
        var path = "experimentdata/" + this.frameId + "-" + this.objectId + "-" + this.videoId + "-" + this.assignmentId;
        Promise.all([
            this.submitS3(f_red, n_red),
            this.submitS3(f_green, n_green),
        ]).then(function (_) {
            return _this.submitForm({
                'assignmentId': _this.assignmentId,
                'frameId': _this.frameId,
                'objectId': _this.objectId,
                'videoId': _this.videoId,
                'height': _this.height,
                'width': _this.width,
                'redfilepath': path + "/" + n_red + ".mask",
                'greenfilepath': path + "/" + n_green + ".mask",
            }, _this.destination);
        });
    };
    ConfigService.prototype.submitS3 = function (file, name) {
        /* return this.bucket.putObject({ */
        /*   Key: `experimentdata/${this.frameId}-${this.objectId}-${this.videoId}-${this.assignmentId}/${name}.mask`, */
        /*   ContentType: file.type, */
        /*   Body: file, */
        /*   Bucket: 'bucket-for-annotation-search' */
        /* }).promise(); */
        return new Promise(function (resolve, reject) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"])(file, name);
            resolve(null);
        });
    };
    ConfigService.prototype.submitForm = function (pair, destination) {
        var text = JSON.stringify(pair);
        console.log(pair);
        var file = new File([text], 'form', { type: 'plain/text' });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"])(file, 'form');
        /* let form = <HTMLFormElement>document.createElement('form'); */
        /* _.each(pair, (value, key) => { */
        /*   let input = <HTMLInputElement>document.createElement('input'); */
        /*   input.type = "text"; */
        /*   input.value = value; */
        /*   input.name = key; */
        /*   form.appendChild(input); */
        /* }); */
        /* let button = <HTMLInputElement>document.createElement('input'); */
        /* button.type = 'submit'; */
        /* form.action = this.destination; */
        /* document.body.appendChild(form); */
        /* form.submit(); */
    };
    ConfigService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ConfigService);
    return ConfigService;
    var _a;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/config.service.js.map

/***/ },

/***/ 1450:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 1451:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 1452:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(571);


/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ControlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlService = (function () {
    function ControlService() {
    }
    ControlService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ControlService);
    return ControlService;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/control.service.js.map

/***/ },

/***/ 344:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 570:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 570;


/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(678);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/main.js.map

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(config) {
        this.config = config;
    }
    AppComponent.prototype.isPage = function (page) {
        return this.config.page == page;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(1143),
            styles: [__webpack_require__(1137)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/app.component.js.map

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_mdl__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__control_bar_control_bar_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__drawable_canvas_drawable_canvas_component__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modification_layer_modification_layer_component__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_image_base_image_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__verification_layer_verification_layer_component__ = __webpack_require__(685);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/* const appRoutes: Routes = [ */
/*   {path: 'verification', component: VerificationLayerComponent}, */
/*   {path: 'modification', component: ModificationLayerComponent}, */
/*   {path: "**", component: BaseImageComponent} */
/* ] */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__control_bar_control_bar_component__["a" /* ControlBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__drawable_canvas_drawable_canvas_component__["a" /* DrawableCanvasComponent */],
                __WEBPACK_IMPORTED_MODULE_8__modification_layer_modification_layer_component__["a" /* ModificationLayerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__base_image_base_image_component__["a" /* BaseImageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__verification_layer_verification_layer_component__["a" /* VerificationLayerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_mdl__["MdlModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__config_service__["a" /* ConfigService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/app.module.js.map

/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bound__ = __webpack_require__(680);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BaseImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseImageComponent = (function () {
    function BaseImageComponent(config, http) {
        var _this = this;
        this.config = config;
        this.http = http;
        this.config.size.subscribe(function (size) {
            var width = size[0], height = size[1];
            _this.load(width, height);
        });
    }
    BaseImageComponent.prototype.ngAfterViewInit = function () {
        this.ctx = this.canvasRef.nativeElement.getContext('2d');
        this.load(this.width, this.height);
    };
    BaseImageComponent.prototype.load = function (width, height) {
        var _this = this;
        var img = document.createElement('img');
        img.src = this.config.getFrameSrc();
        img.height = height;
        img.width = width;
        img.onload = function () {
            _this.ctx.drawImage(img, 0, 0, width, height);
            _this.http.get(_this.config.getBoundingSrc())
                .subscribe(function (res) {
                var objectId = _this.config.objectId.replace('obj', '');
                var bound = __WEBPACK_IMPORTED_MODULE_3__bound__["a" /* Bound */].parseXML(res.text(), width, height, objectId);
                bound.draw(_this.ctx);
            });
        };
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])("canvas"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === 'function' && _a) || Object)
    ], BaseImageComponent.prototype, "canvasRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], BaseImageComponent.prototype, "height", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], BaseImageComponent.prototype, "width", void 0);
    BaseImageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'base-image',
            template: __webpack_require__(1144),
            /* viewProviders: [HTTP_PROVIDERS], */
            styles: [__webpack_require__(1138)],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _c) || Object])
    ], BaseImageComponent);
    return BaseImageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/base-image.component.js.map

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Bound; });

var Bound = (function () {
    function Bound(value) {
        this.x = value.x;
        this.y = value.y;
        this.height = value.height;
        this.width = value.width;
        this.name = value.name;
    }
    Bound.prototype.scale = function (xscale, yscale) {
        this.x = this.x * xscale;
        this.y = this.y * yscale;
        this.width = this.width * xscale;
        this.height = this.height * yscale;
    };
    Bound.getNameFromId = function (id) {
        var id_map = {
            'n02691156': "airplane",
            'n02419796': "antelope",
            'n02131653': "bear",
            'n02834778': "bicycle",
            'n01503061': "bird",
            'n02924116': "bus",
            'n02958343': "car",
            'n02402425': "cattle",
            'n02084071': "dog",
            'n02121808': "domestic_cat",
            'n02503517': "elephant",
            'n02118333': "fox",
            'n02510455': "giant_panda",
            'n02342885': "hamster",
            'n02374451': "horse",
            'n02129165': "lion",
            'n01674464': "lizard",
            'n02484322': "monkey",
            'n03790512': "motorcycle",
            'n02324045': "rabbit",
            'n02509815': "red_panda",
            'n02411705': "sheep",
            'n01726692': "snake",
            'n02355227': "squirrel",
            'n02129604': "tiger",
            'n04468005': "train",
            'n01662784': "turtle",
            'n04530566': "watercraft",
            'n02062744': "whale",
            'n02391049': "zebra",
        };
        return id_map[id];
    };
    Bound.parseXML = function (res, canvas_width, canvas_height, objectId) {
        var parser = new DOMParser();
        var xml = parser.parseFromString(res, 'text/xml');
        var node = xml.querySelector('annotation');
        var queryint = function (query) { return parseInt(node.querySelector(query).textContent); };
        var height = queryint('size height');
        var width = queryint('size width');
        node = __WEBPACK_IMPORTED_MODULE_0_lodash__["find"](node.querySelectorAll('object'), function (obj) {
            return obj.querySelector('trackid').textContent == objectId;
        });
        var nameid = node.querySelector('name').textContent;
        var name = this.getNameFromId(nameid);
        var xmax = queryint('object xmax');
        var xmin = queryint('object xmin');
        var ymax = queryint('object ymax');
        var ymin = queryint('object ymin');
        var bound = new Bound({
            x: xmin, y: ymin, height: (ymax - ymin), width: (xmax - xmin),
            name: name
        });
        bound.scale(canvas_width / width, canvas_height / height);
        return bound;
    };
    Bound.prototype.draw = function (ctx) {
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'rgba(0,0,0,0.5)';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.font = '30px Arial';
        ctx.fillText(this.name, this.x + this.width / 2, this.y);
    };
    return Bound;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/bound.js.map

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control_service__ = __webpack_require__(284);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ControlBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlBarComponent = (function () {
    function ControlBarComponent(control) {
        this.brushSize = 5;
        this.groundCheck = true;
        this.control = control;
        this.control.controller = this;
    }
    ControlBarComponent.prototype.reset = function () {
        this.control.reciever.reset();
    };
    ControlBarComponent.prototype.setSize = function (size) {
        this.control.reciever.brushSize = size;
    };
    ControlBarComponent.prototype.setGround = function (check) {
        this.control.reciever.brushColor = this.groundColor(check);
    };
    ControlBarComponent.prototype.ngOnInit = function () {
    };
    ControlBarComponent.prototype.groundColor = function (check) {
        return check ? "green" : "red";
    };
    ControlBarComponent.prototype.groundText = function (check) {
        return check ? "foreground" : "backgroud";
    };
    ControlBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-control-bar',
            template: __webpack_require__(1145),
            styles: [__webpack_require__(1139)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */]) === 'function' && _a) || Object])
    ], ControlBarComponent);
    return ControlBarComponent;
    var _a;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/control-bar.component.js.map

/***/ },

/***/ 682:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control_service__ = __webpack_require__(284);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DrawableCanvasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrawableCanvasComponent = (function () {
    function DrawableCanvasComponent(control) {
        this.brushSize = 5;
        this.dragging = false;
        this.pts = [];
        this.brushColor = "red";
        this.control = control;
        this.control.reciever = this;
    }
    DrawableCanvasComponent.prototype.reset = function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
    };
    DrawableCanvasComponent.prototype.ngAfterViewInit = function () {
        this.canvas = this.canvasRef.nativeElement;
        this.ctx = this.canvas.getContext('2d');
    };
    DrawableCanvasComponent.prototype.dragStart = function (e) {
        console.log("this method called");
        console.log(this.ctx);
        this.dragging = true;
        this.ctx.lineWidth = this.brushSize;
        var color = this.brushColor;
        this.ctx.strokeStyle = color;
        this.pts.length = 0;
        this.ctx.globalCompositeOperation = 'source-over';
        this.ctx.lineCap = this.ctx.lineJoin = 'round';
        e.stopPropagation();
    };
    DrawableCanvasComponent.prototype.dragMove = function (e) {
        if (this.dragging) {
            var rect = this.canvas.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            if (this.pts.length == 2) {
                this.ctx.beginPath();
                this.ctx.bezierCurveTo(this.pts[0][0], this.pts[0][1], this.pts[1][0], this.pts[1][1], x, y);
                this.ctx.stroke();
                this.ctx.moveTo(x, y);
                this.pts.length = 0;
            }
            this.pts.push([x, y]);
        }
    };
    DrawableCanvasComponent.prototype.dragEnd = function (e) {
        this.dragging = false;
        this.pts.length = 0;
    };
    Object.defineProperty(DrawableCanvasComponent.prototype, "image", {
        get: function () {
            return this.ctx.getImageData(0, 0, this.width, this.height);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], DrawableCanvasComponent.prototype, "brushSize", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], DrawableCanvasComponent.prototype, "height", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], DrawableCanvasComponent.prototype, "width", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])("canvas"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === 'function' && _a) || Object)
    ], DrawableCanvasComponent.prototype, "canvasRef", void 0);
    DrawableCanvasComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'drawable-canvas',
            template: __webpack_require__(1146),
            styles: [__webpack_require__(1140)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */]) === 'function' && _b) || Object])
    ], DrawableCanvasComponent);
    return DrawableCanvasComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/drawable-canvas.component.js.map

/***/ },

/***/ 683:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ModificationLayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModificationLayerComponent = (function () {
    function ModificationLayerComponent(control, config) {
        var _this = this;
        this.control = control;
        this.config = config;
        config.size.subscribe(function (size) {
            _this.width = size[0], _this.height = size[1];
        });
    }
    ModificationLayerComponent.prototype.ngOnInit = function () {
    };
    ModificationLayerComponent.prototype.submit = function () {
        var image = this.control.reciever.image;
        this.config.submitModification(image);
    };
    ModificationLayerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'modification-layer',
            template: __webpack_require__(1147),
            styles: [__webpack_require__(1141)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === 'function' && _b) || Object])
    ], ModificationLayerComponent);
    return ModificationLayerComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/modification-layer.component.js.map

/***/ },

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = imgdata2mask;
function imgdata2mask(img) {
    var rgba = img.data;
    var size = img.height * img.width;
    var red = new Uint8Array(size / 4);
    var green = new Uint8Array(size / 4);
    for (var i = 0; i < size; i++) {
        var j = Math.floor(i / 8);
        var k = 7 - (i % 8);
        if (img.data[i * 4] > 0) {
            red[j] += 1 << k;
        }
        if (img.data[i * 4 + 1] > 0) {
            green[j] += 1 << k;
        }
    }
    return [red, green];
}
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/Utils.js.map

/***/ },

/***/ 685:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return VerificationLayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerificationLayerComponent = (function () {
    function VerificationLayerComponent(config) {
        var _this = this;
        this.config = config;
        config.size.subscribe(function (size) {
            _this.width = size[0], _this.height = size[1];
        });
    }
    VerificationLayerComponent.prototype.submit = function (value) {
        this.config.submitVerification(value);
    };
    VerificationLayerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'verification-layer',
            template: __webpack_require__(1148),
            styles: [__webpack_require__(1142)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]) === 'function' && _a) || Object])
    ], VerificationLayerComponent);
    return VerificationLayerComponent;
    var _a;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/verification-layer.component.js.map

/***/ },

/***/ 686:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/environment.js.map

/***/ },

/***/ 687:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/polyfills.js.map

/***/ }

},[1452]);
//# sourceMappingURL=main.bundle.map