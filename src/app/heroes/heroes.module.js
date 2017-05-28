"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var forms_1 = require("@angular/forms");
var hero_routing_module_1 = require("./hero.routing.module");
var hero_service_1 = require("./hero.service");
var hero_details_component_1 = require("./hero-details.component");
var hero_list_component_1 = require("./hero-list.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var HeroesModule = (function () {
    function HeroesModule() {
    }
    return HeroesModule;
}());
HeroesModule = __decorate([
    core_1.NgModule({
        declarations: [hero_list_component_1.HeroListComponent, hero_details_component_1.HeroDetailComponent],
        imports: [common_1.CommonModule, hero_routing_module_1.HeroRoutingModule, forms_1.FormsModule],
        providers: [hero_service_1.HeroService],
        exports: [forms_1.FormsModule]
    })
], HeroesModule);
exports.HeroesModule = HeroesModule;
//# sourceMappingURL=heroes.module.js.map