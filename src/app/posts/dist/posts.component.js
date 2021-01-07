"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NzDemoInputTextareaWithCharacterCountComponent = exports.PostsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Item_1 = require("./Item");
var PostsComponent = /** @class */ (function () {
    function PostsComponent(http) {
        this.http = http;
        this.isVisible = false;
        this.formitems = new Item_1.Item();
    }
    Object.defineProperty(PostsComponent.prototype, "jsonProduct", {
        get: function () {
            return JSON.stringify(this.formitems);
        },
        enumerable: false,
        configurable: true
    });
    PostsComponent.prototype.showModal = function (p) {
        this.isVisible = true;
        console.log(p);
        return p;
    };
    PostsComponent.prototype.handleOk = function (i) {
        console.log('Button ok clicked!');
        console.log("new product " + this.jsonProduct);
        this.isVisible = false;
        return this.jsonProduct;
    };
    PostsComponent.prototype.handleCancel = function () {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    };
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://api.zaguru.com/api/Classes/getClasses').subscribe(function (p) {
            _this.posts = p;
        });
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'app-posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.css']
        })
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
var NzDemoInputTextareaWithCharacterCountComponent = /** @class */ (function () {
    function NzDemoInputTextareaWithCharacterCountComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            comment: [null, [forms_1.Validators.maxLength(100)]]
        });
    }
    return NzDemoInputTextareaWithCharacterCountComponent;
}());
exports.NzDemoInputTextareaWithCharacterCountComponent = NzDemoInputTextareaWithCharacterCountComponent;
