"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

$(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let SearchComponent = class SearchComponent {
};
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        templateUrl: './app/search/search.component.html',
        styleUrls: ['./app/search/search.component.css'],
    })
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=landing.component.js.map
