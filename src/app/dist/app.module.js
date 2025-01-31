"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var button_1 = require("ng-zorro-antd/button");
var table_1 = require("ng-zorro-antd/table");
var image_1 = require("ng-zorro-antd/image");
var input_1 = require("ng-zorro-antd/input");
var animations_1 = require("@angular/platform-browser/animations");
var form_1 = require("ng-zorro-antd/form");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var posts_component_1 = require("./posts/posts.component");
var nav_component_1 = require("./nav/nav.component");
var modal_1 = require("ng-zorro-antd/modal");
var common_1 = require("@angular/common");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                posts_component_1.PostsComponent,
                nav_component_1.NavComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                button_1.NzButtonModule,
                table_1.NzTableModule,
                input_1.NzInputModule,
                form_1.NzFormModule,
                image_1.NzImageModule,
                modal_1.NzModalModule,
            ],
            providers: [common_1.DatePipe],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
