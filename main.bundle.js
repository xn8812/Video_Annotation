webpackJsonp([0,3],{

/***/ 1170:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1171:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1172:
/***/ function(module, exports) {

module.exports = ":host {\n    display: block;\n}\n\n.component {\n    display: inline-block;\n    margin-right: 5px;\n}\n\n/deep/ #ground-switcher mdl-switch .mdl-switch__track {\n    background-color: rgba(244, 54, 72, 0.5);\n}\n\n/deep/ #ground-switcher mdl-switch .mdl-switch__thumb {\n    background-color: rgba(244, 54, 72, 1);\n}\n\n/deep/ #ground-switcher mdl-switch.is-checked .mdl-switch__track{\n    background-color: rgba(114, 181, 63, 0.5);\n}\n\n/deep/ #ground-switcher mdl-switch.is-checked .mdl-switch__thumb{\n    background-color: rgba(114, 181, 63, 1);\n}\n"

/***/ },

/***/ 1173:
/***/ function(module, exports) {

module.exports = "canvas{\n    cursor: default;\n}\n"

/***/ },

/***/ 1174:
/***/ function(module, exports) {

module.exports = ".center{\n    text-align: center;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n.canvas-layer{\n    position: relative;\n}\n.canvas-layer base-image{\n    position: absolute;\n}\n.canvas-layer drawable-canvas{\n    position: absolute;\n    opacity: 0.5;\n}\n"

/***/ },

/***/ 1175:
/***/ function(module, exports) {

module.exports = ".center{\n    text-align: center;\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n"

/***/ },

/***/ 1176:
/***/ function(module, exports) {

module.exports = "<mdl-layout mdl-fixed-header>\n    <mdl-layout-header>\n        <mdl-layout-header-row>\n            <mdl-layout-title>Amazon Turk Annotation Test</mdl-layout-title>\n        </mdl-layout-header-row>\n    </mdl-layout-header>\n    <mdl-layout-content>\n        <modification-layer *ngIf=\"isPage('modification')\"></modification-layer>\n        <verification-layer *ngIf=\"isPage('verification')\"></verification-layer>\n    </mdl-layout-content>\n</mdl-layout>\n"

/***/ },

/***/ 1177:
/***/ function(module, exports) {

module.exports = "\n<canvas #canvas [height]=\"height\" [width]=\"width\"></canvas>\n"

/***/ },

/***/ 1178:
/***/ function(module, exports) {

module.exports = "<button mdl-button mdl-button-type=\"raised\" mdl-ripple\n    (click)=\"reset()\">\n    RESET\n</button>\n\n<span>\n    brush size: {{brushSize}}\n</span>\n<div id=\"slider-bar\" class=\"component\">\n    <mdl-slider min=\"2\" max=\"20\" [(ngModel)]=\"brushSize\"\n        (ngModelChange)=\"setSize($event)\"></mdl-slider>\n</div>\n<svg height=\"30px\" width=\"30px\" class=\"component\">\n    <circle cx=\"50%\" cy=\"50%\"\n    [attr.r]=\"brushSize\" [attr.fill]=\"groundColor(groundChecked)\"></circle>\n</svg>\n<div id=\"ground-switcher\" class=\"component\">\n    <mdl-switch [(ngModel)]=\"groundChecked\" mdl-ripple\n        (ngModelChange)=\"setGround($event)\"></mdl-switch>\n    <span>\n        {{groundText(groundChecked)}}\n    </span>\n</div>\n"

/***/ },

/***/ 1179:
/***/ function(module, exports) {

module.exports = "<canvas #canvas [height]=\"height\" [width]=\"width\" (mouseup)=\"dragEnd($event)\" (mousedown)=\"dragStart($event)\" (mousemove)=\"dragMove($event)\"></canvas>\n"

/***/ },

/***/ 1180:
/***/ function(module, exports) {

module.exports = "\n<div class=\"center\">\n    <app-control-bar></app-control-bar>\n</div>\n<div class=\"canvas-layer center\" [style.width.px]=\"width\" [style.height.px]=\"height\">\n    <base-image [height]=\"height\" [width]=\"width\"></base-image>\n    <drawable-canvas [height]=\"height\" [width]=\"width\"></drawable-canvas>\n</div>\n<div class=\"center\">\n<button mdl-button mdl-ripple (click)=\"submit($event)\">SUBMIT</button>\n</div>\n<p class=\"center introduction\">\n    Please modify the annotation for the boundary outlined with green color. There is also a grey boundary with text label to help you.<br/>\n    For <strong>background</strong> area the segmentation wrongly included, drag the mouse to paint the correspinding area to <span style=\"color: red\">red</span><br>\n    For <strong>foreground</strong> area the segmentation wrongly excluded, click the switch to use green paint, and drag the mouse to paint the correspinding area <span style=\"color: green\">green</span><br>\n    Click <strong>SUBMIT</strong> below the image to submit<br>\n    Click <strong>RESET</strong> if you want to restart the annotation<br>\n    You could also adjust the brush size with the slider to obtain coarser or finer stroke.\n</p>\n\n"

/***/ },

/***/ 1181:
/***/ function(module, exports) {

module.exports = "\n<div class=\"center\">\n    <base-image [height]=\"height\" [width]=\"width\"></base-image>\n</div>\n<div class=\"center\">\n    <button mdl-button mdl-ripple (click)=\"submit(true)\">YES</button>\n    <button mdl-button mdl-ripple (click)=\"submit(false)\">NO</button>\n</div>\n\n<p class=\"center introduction\">\n    Please determine if the quality annotation for the boundary outlined with green color is acceptable. There is also a grey boundary with text label to help you.<br>\n    Click <strong>YES</strong> if you think the boundary is acceptable<br>\n    Click <strong>No</strong> if you think the boundary needs further annotation<br>\n</p>\n"

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aws_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aws_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(1190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_Utils__ = __webpack_require__(695);
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







window['aws'] = __WEBPACK_IMPORTED_MODULE_2_aws_sdk__;
var ConfigService = (function () {
    function ConfigService(http) {
        var _this = this;
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* URLSearchParams */](window.location.search.slice(1));
        _a = decodeURIComponent(param.get('vid')).split(','), this.videoId = _a[0], this.objectId = _a[1], this.frameId = _a[2];
        this.assignmentId = param.get('assignmentId');
        this.destination = decodeURIComponent(param.get('turkSubmitTo'));
        console.log(this.destination);
        this.page = param.get('page');
        this.size = __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].create(function (observer) {
            http.get(_this.getBoundingSrc()).subscribe(function (res) {
                var parser = new DOMParser();
                var xml = parser.parseFromString(res.text(), 'text/xml');
                var queryint = function (query) { return parseInt(xml.querySelector(query).textContent); };
                var height = queryint('size height');
                var width = queryint('size width');
                var scale = 600 / width;
                _this.width = Math.floor(width * scale);
                _this.height = Math.floor(height * scale);
                observer.next([_this.width, _this.height]);
            });
        });
        this.bucket = new __WEBPACK_IMPORTED_MODULE_2_aws_sdk__["S3"]({ params: { Bucket: 'bucket-for-annotation-search' } });
        http.get("assets/credential").subscribe(function (res) {
            var data = JSON.parse(__WEBPACK_IMPORTED_MODULE_4_crypto_js__["AES"].decrypt(res.text(), 'mturk segmentation')
                .toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8));
            var credential = new __WEBPACK_IMPORTED_MODULE_2_aws_sdk__["Credentials"](data['accessKeyId'], data['secrete']);
            _this.bucket.config.update({
                credentials: credential,
                region: 'us-west-2'
            });
            _this.bucket.listObjects({
                Bucket: 'bucket-for-annotation-search'
            }).promise().then(function (x) { return console.log(x); }).catch(function (error) { return console.log(error); });
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
            'formtype': 'verification',
            'assignmentId': this.assignmentId,
            'frameId': this.frameId,
            'objectId': this.objectId,
            'videoId': this.videoId,
            'valid': valid.toString(),
        }, this.destination);
    };
    ConfigService.prototype.submitModification = function (image) {
        var _this = this;
        var _a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_Utils__["a" /* imgdata2mask */])(image), red = _a[0], green = _a[1];
        var f_red = new File([red], 'red.mask', { type: 'text/binary' });
        var f_green = new File([green], 'green.mask', { type: 'text/binary' });
        var path = "experimentdata/" + this.videoId + "-" + this.objectId + "-" + this.frameId + "-" + this.assignmentId;
        var n_red = path + "/green.mask";
        var n_green = path + "/red.mask";
        Promise.all([
            this.submitS3(f_red, n_red),
            this.submitS3(f_green, n_green),
        ]).then(function (_) {
            return _this.submitForm({
                'formtype': 'modification',
                'assignmentId': _this.assignmentId,
                'frameId': _this.frameId,
                'objectId': _this.objectId,
                'videoId': _this.videoId,
                'height': _this.height,
                'width': _this.width,
                'redfilepath': n_red,
                'greenfilepath': n_green,
            }, _this.destination);
        });
    };
    ConfigService.prototype.submitS3 = function (file, path) {
        return this.bucket.putObject({
            Key: path,
            ContentType: file.type,
            Body: file,
            Bucket: 'bucket-for-annotation-search'
        }).promise();
        // return new Promise((resolve, reject) => {
        //   saveAs(file, name);
        //   resolve(null);
        // });
    };
    ConfigService.prototype.submitForm = function (pair, destination) {
        // const text = JSON.stringify(pair);
        // console.log(pair);
        // const file = new File([text], 'form', { type: 'plain/text' });
        // saveAs(file, 'form');
        var form = document.createElement('form');
        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](pair, function (value, key) {
            var input = document.createElement('input');
            input.type = "text";
            input.value = value;
            input.name = key;
            form.appendChild(input);
        });
        var button = document.createElement('input');
        button.type = 'submit';
        form.action = this.destination;
        document.body.appendChild(form);
        form.submit();
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

/***/ 1481:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 1482:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 1483:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(582);


/***/ },

/***/ 290:
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

/***/ 352:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 581:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 581;


/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(689);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/main.js.map

/***/ },

/***/ 688:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(140);
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
            template: __webpack_require__(1176),
            styles: [__webpack_require__(1170)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/app.component.js.map

/***/ },

/***/ 689:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_mdl__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__control_bar_control_bar_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__drawable_canvas_drawable_canvas_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modification_layer_modification_layer_component__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_image_base_image_component__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__config_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__verification_layer_verification_layer_component__ = __webpack_require__(696);
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

/***/ 690:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bound__ = __webpack_require__(691);
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
            template: __webpack_require__(1177),
            /* viewProviders: [HTTP_PROVIDERS], */
            styles: [__webpack_require__(1171)],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _c) || Object])
    ], BaseImageComponent);
    return BaseImageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/base-image.component.js.map

/***/ },

/***/ 691:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(535);
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

/***/ 692:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control_service__ = __webpack_require__(290);
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
            template: __webpack_require__(1178),
            styles: [__webpack_require__(1172)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */]) === 'function' && _a) || Object])
    ], ControlBarComponent);
    return ControlBarComponent;
    var _a;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/control-bar.component.js.map

/***/ },

/***/ 693:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control_service__ = __webpack_require__(290);
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
            template: __webpack_require__(1179),
            styles: [__webpack_require__(1173)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */]) === 'function' && _b) || Object])
    ], DrawableCanvasComponent);
    return DrawableCanvasComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/drawable-canvas.component.js.map

/***/ },

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control_service__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(140);
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
        this.config = config;
        config.size.subscribe(function (size) {
            _this.width = size[0], _this.height = size[1];
        });
        this.control = control;
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
            template: __webpack_require__(1180),
            styles: [__webpack_require__(1174)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__control_service__["a" /* ControlService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === 'function' && _b) || Object])
    ], ModificationLayerComponent);
    return ModificationLayerComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/modification-layer.component.js.map

/***/ },

/***/ 695:
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

/***/ 696:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(140);
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
            template: __webpack_require__(1181),
            styles: [__webpack_require__(1175)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]) === 'function' && _a) || Object])
    ], VerificationLayerComponent);
    return VerificationLayerComponent;
    var _a;
}());
//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/verification-layer.component.js.map

/***/ },

/***/ 697:
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

/***/ 698:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/darwinsenior/workspace/segmentation/src/polyfills.js.map

/***/ }

},[1483]);
//# sourceMappingURL=main.bundle.map