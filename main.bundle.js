webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <h1>welcome to {{title}}</h1>\n  <p>{{data.ressource.name  }} {{data.ressource.amount }} : {{data.ressource.amountEachTick}} / s </p>\n</div>\n<div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(service) {
        this.service = service;
        this.title = 'CotCot Idle';
        //get data from service
        this.data = service.getData();
        // console.log("init app");
        // console.log(this.data);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.service.data$.subscribe(function (v) {
            // console.log("app home");
            // console.log(v);
            //this.data = v;
        });
        //launch clock
        console.log("Start the game clock");
        this.service.gameStart();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__units_home_units_home_component__ = __webpack_require__("../../../../../src/app/units-home/units-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unit_unit_component__ = __webpack_require__("../../../../../src/app/unit/unit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ressource_ressource_component__ = __webpack_require__("../../../../../src/app/ressource/ressource.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'units-home', component: __WEBPACK_IMPORTED_MODULE_4__units_home_units_home_component__["a" /* UnitsHomeComponent */] },
    { path: 'ressource', component: __WEBPACK_IMPORTED_MODULE_6__ressource_ressource_component__["a" /* RessourceComponent */] },
    { path: '',
        redirectTo: '/units-home',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__units_home_units_home_component__["a" /* UnitsHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__unit_unit_component__["a" /* UnitComponent */],
            __WEBPACK_IMPORTED_MODULE_6__ressource_ressource_component__["a" /* RessourceComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Ressource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Unit; });
/* unused harmony export GameData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Ressource = (function () {
    function Ressource(obj) {
        this.name = obj.name;
        this.amount = obj.amount;
        this.amountTotal = obj.amountTotal;
        this.amountEachTick = obj.amountEachTick;
    }
    //
    Ressource.prototype.produce = function () {
        return this.amountEachTick;
    };
    //TODO:change name, this produce ressource updating amount and amountTotal
    //    with the value of amountEachTick
    Ressource.prototype.produceN = function (n) {
        //let n = this.amountEachTick;
        this.amount += n;
        this.amountTotal += n;
    };
    Ressource.prototype.spend = function (n) {
        if (n <= this.amount) {
            this.amount -= n;
            return true;
        }
        return false;
    };
    return Ressource;
}());

var Unit = (function () {
    function Unit(obj) {
        this.rank = obj.rank;
        this.name = obj.name;
        this.amount = obj.amount;
        this.amountBought = obj.amountBought;
        this.amountEachTick = obj.amountEachTick;
        this.amountTotal = obj.amountTotal;
        this.baseCost = obj.baseCost;
        this.costMultiplier = obj.costMultiplier;
        this.productionBase = obj.productionBase;
        this.productionMultiplier = obj.productionMultiplier;
    }
    Unit.prototype.produce = function () {
        return this.amount * this.productionBase * this.productionMultiplier;
    };
    Unit.prototype.produceN = function (n) {
        //let n  = this.amount * this.productionBase * this.productionMultiplier;
        this.amount += n;
        this.amountTotal += n;
    };
    Unit.prototype.buy = function (n) {
        this.amount += n;
        this.amountBought += n;
        this.amountTotal += n;
    };
    Unit.prototype.cost1Buy = function (cost, multiplier, amount) {
        return Math.ceil(cost * (1 + Math.log2(Math.pow((amount + 2) / 2, multiplier))));
    };
    Unit.prototype.costNBuy = function (n) {
        if (n < 0) {
            throw new Error("not a valid number");
        }
        var res = 0;
        for (var i = 0; i < n; i++) {
            res += this.cost1Buy(this.baseCost, this.costMultiplier, this.amount + i);
        }
        return res;
    };
    return Unit;
}());

var GameData = (function () {
    function GameData(res, units) {
        this.ressource = res;
        this.units = units;
    }
    return GameData;
}());

var data = new GameData(new Ressource({
    name: "Oeufs en chocolat",
    amountTotal: 50,
    amount: 50,
    amountEachTick: 0,
}), [
    new Unit({
        rank: 0,
        name: "Poules en chocolat",
        productionBase: 1,
        productionMultiplier: 1,
        amount: 0,
        amountBought: 0,
        amountEachTick: 0,
        amountTotal: 0,
        baseCost: 10,
        costMultiplier: 1.2,
    }),
    new Unit({
        rank: 1,
        name: "Oeufs Doré",
        productionBase: 1,
        productionMultiplier: 1,
        amount: 0,
        amountBought: 0,
        amountEachTick: 0,
        amountTotal: 0,
        baseCost: 1000,
        costMultiplier: 1.2,
    }),
    new Unit({
        rank: 2,
        name: "Poules Doré",
        productionBase: 1,
        productionMultiplier: 1,
        amount: 0,
        amountBought: 0,
        amountEachTick: 0,
        amountTotal: 0,
        baseCost: 100000,
        costMultiplier: 1.3,
    }),
    new Unit({
        rank: 3,
        name: "Oeufs Arc-En-Ciel",
        productionBase: 2,
        productionMultiplier: 1,
        amount: 0,
        amountBought: 0,
        amountEachTick: 0,
        amountTotal: 0,
        baseCost: 100000000,
        costMultiplier: 1.4,
    }),
]);
var DataService = (function () {
    function DataService() {
        //observable string source
        //https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
        this.dataSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        //observable string streams
        this.data$ = this.dataSubject.asObservable();
        console.log(data);
    }
    DataService.prototype.setData = function (gameData) {
        data = gameData;
        this.dataSubject.next(data);
    };
    DataService.prototype.getData = function () {
        return data;
    };
    DataService.prototype.getRessource = function () {
        return this.getData().ressource;
    };
    DataService.prototype.getUnits = function () {
        return this.getData().units;
    };
    DataService.prototype.getUnitN = function (n) {
        return this.getData().units[n]; //TODO check length? && error handling
    };
    //calculations/game
    DataService.prototype.gameStart = function () {
        this.gameInit();
        this.gameClock();
    };
    DataService.prototype.gameInit = function () {
    };
    DataService.prototype.gameClock = function (interval) {
        var _this = this;
        if (interval === void 0) { interval = 1000; }
        setInterval(function () {
            //generateRessource
            var gameData;
            var newRessource = _this.generateRessource();
            var newUnit = _this.generateUnit();
            //updateAmount
            //propagate change
            gameData = new GameData(newRessource, newUnit);
            _this.setData(gameData);
        }, interval);
    };
    DataService.prototype.generateRessource = function () {
        var newRessource = this.getRessource();
        newRessource.produceN(this.getUnitN(0).produce());
        newRessource.amountEachTick = this.getUnitN(0).produce();
        return newRessource;
    };
    DataService.prototype.generateUnit = function () {
        //console.log("generate units")
        var newUnit = this.getUnits();
        newUnit.map(function (item, i, tab) {
            if (i < tab.length - 1) {
                item.amountEachTick = newUnit[item.rank + 1].produce();
                item.produceN(newUnit[i + 1].produce());
            }
        });
        return newUnit;
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/ressource/ressource.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <h1>RESSOURCES</h1>\n  <p>J'adore les {{dataRessource.name}}! J'en ai {{dataRessource.amount}}! et j'en gagne {{dataRessource.amountEachTick}} par seconde</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ressource/ressource.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"ressource.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ressource/ressource.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RessourceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RessourceComponent = (function () {
    function RessourceComponent() {
    }
    RessourceComponent.prototype.ngOnInit = function () {
    };
    return RessourceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["c" /* Ressource */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["c" /* Ressource */]) === "function" && _a || Object)
], RessourceComponent.prototype, "dataRessource", void 0);
RessourceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-ressource',
        template: __webpack_require__("../../../../../src/app/ressource/ressource.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ressource/ressource.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], RessourceComponent);

var _a;
//# sourceMappingURL=ressource.component.js.map

/***/ }),

/***/ "../../../../../src/app/unit/unit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3>UNITS: {{dataUnit.name}}</h3>\n<p>J'ai {{dataUnit.amount}} {{dataUnit.name}}</p>\n<p>Production: {{dataUnit.produce()}} {{itemProduced()}} par seconde</p>\n<button (click)=\"buy(1)\" [disabled]=\"!canBuy(1)\">Buy 1 : cost {{dataUnit.costNBuy(1)}}</button>\n<button (click)=\"buy(10)\" [disabled]=\"!canBuy(10)\">Buy 10 : cost {{dataUnit.costNBuy(10)}}</button>\n<button (click)=\"buy(100)\" *ngIf=\"canBuy(100)\">Buy 100: cost {{dataUnit.costNBuy(100)}}</button>"

/***/ }),

/***/ "../../../../../src/app/unit/unit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"unit.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/unit/unit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnitComponent = (function () {
    function UnitComponent() {
        this.buyUnit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    UnitComponent.prototype.ngOnInit = function () {
    };
    UnitComponent.prototype.buy = function (n) {
        //console.log("jemet");
        this.buyUnit.emit({ n: n, rank: this.dataUnit.rank });
    };
    /**
    * Check is there is enough ressources to buy n of this unit
    */
    UnitComponent.prototype.canBuy = function (n) {
        //console.log(this.dataRessource.amount);
        return this.dataRessource.amount >= this.dataUnit.costNBuy(n);
    };
    /**
    *
    */
    UnitComponent.prototype.itemProduced = function () {
        return (this.dataUnit.rank == 0) ? this.dataRessource.name : "UNIT";
    };
    return UnitComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["b" /* Unit */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["b" /* Unit */]) === "function" && _a || Object)
], UnitComponent.prototype, "dataUnit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["c" /* Ressource */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["c" /* Ressource */]) === "function" && _b || Object)
], UnitComponent.prototype, "dataRessource", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], UnitComponent.prototype, "buyUnit", void 0);
UnitComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-unit',
        template: __webpack_require__("../../../../../src/app/unit/unit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/unit/unit.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], UnitComponent);

var _a, _b;
//# sourceMappingURL=unit.component.js.map

/***/ }),

/***/ "../../../../../src/app/units-home/units-home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>UNITS</h1>\n<ul class=\"units-home--list nav nav-pills nav-stacked\">\n  <li class=\"units-home--item\" role=\"presentation\">\n    <button (click)=\"showTab('ressource')\">{{data.ressource.name}} ({{data.ressource.amount}}, +{{data.ressource.amountEachTick}}/s)</button>\n  </li>\n  <li class=\"units-home--item\" *ngFor=\"let unit of dataUnit\" role=\"presentation\">\n    <button (click)=\"showTab(unit.rank);\" *ngIf=\"unit.rank&lt;2 || pow(100,unit.rank)&lt;data.ressource.amount\"> {{unit.name}} ({{unit.amount}}, +{{unit.amountEachTick}}/s)</button>\n  </li>\n</ul>\n<div class=\"content\" *ngIf=\"show == 'ressource'\">\n  <app-ressource [dataRessource]=\"data.ressource\"></app-ressource>\n</div>\n<div class=\"content\" *ngFor=\"let unit of dataUnit\">\n  <app-unit *ngIf=\"show == unit.rank\" [dataUnit]=\"unit\" [dataRessource]=\"data.ressource\" (buyUnit)=\"buyUnit($event)\"></app-unit>\n</div>"

/***/ }),

/***/ "../../../../../src/app/units-home/units-home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".units-home--list {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.units-home--item {\n  -webkit-transform: rotate(-180deg);\n  transform: rotate(-180deg); }\n", "", {"version":3,"sources":["C:/Users/Administrateur/Desktop/cours/angular-app/cotcot-idle/src/app/units-home/C:/Users/Administrateur/Desktop/cours/angular-app/cotcot-idle/src/app/units-home/units-home.component.scss"],"names":[],"mappings":"AAAA;EAEI,kCAAiC;EACjC,0BAAyB,EAC5B;;AACD;EAEI,mCAAkC;EAClC,2BAA0B,EAC7B","file":"units-home.component.scss","sourcesContent":[".units-home--list{\r\n    -moz-transform: rotate(180deg);\r\n    -webkit-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n}\r\n.units-home--item{\r\n    -moz-transform: rotate(-180deg);\r\n    -webkit-transform: rotate(-180deg);\r\n    transform: rotate(-180deg);\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/units-home/units-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitsHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnitsHomeComponent = (function () {
    function UnitsHomeComponent(service) {
        this.service = service;
        this.show = "";
    }
    UnitsHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = this.service.getData();
        this.dataUnit = this.data.units;
        this.dataSubscription = this.service.data$.subscribe(function (v) {
            _this.data = v;
            _this.dataUnit = v.units;
            //
            // console.log("je suis dans unit-home, subscribe sur les changements de ressources");
            // console.log(v);
            // console.log(this.data);
        });
    };
    UnitsHomeComponent.prototype.ngOnDestroy = function () {
        this.dataSubscription.unsubscribe();
    };
    UnitsHomeComponent.prototype.buyUnit = function (e) {
        // console.log(e);
        if (this.data.ressource.spend(this.data.units[e.rank].costNBuy(e.n))) {
            this.data.units[e.rank].amount += e.n;
            this.service.setData(this.data);
        }
        else {
            console.log("ERROR BUY");
        }
    };
    UnitsHomeComponent.prototype.showTab = function (s) {
        // console.log(s);
        // console.log(typeof s);
        this.show = s;
    };
    //pow
    UnitsHomeComponent.prototype.pow = function (n, power) {
        return Math.pow(n, power);
    };
    return UnitsHomeComponent;
}());
UnitsHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-units-home',
        template: __webpack_require__("../../../../../src/app/units-home/units-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/units-home/units-home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], UnitsHomeComponent);

var _a;
//# sourceMappingURL=units-home.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map