"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let CompareComponent = class CompareComponent {
    ngOnInit() {
        var d3 = window['d3'];
        var diameter = 500, //max size of the bubbles
        color = d3.scale.category20b(); //color category
        var bubble = d3.layout.pack()
            .sort(null)
            .size([diameter, diameter])
            .padding(1.5);
        var svg = d3.select("#bubbles")
            .append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .attr("class", "bubble");
        d3.csv("indexity.csv", function (error, data) {
            console.log(data);
            //convert numerical values from strings to numbers
            data = data.map(function (d) { d.value = +d["Total"]; return d; });
            //bubbles needs very specific format, convert data to this.
            var nodes = bubble.nodes({ children: data }).filter(function (d) { return !d.children; });
            //setup the chart
            var bubbles = svg.append("g")
                .attr("transform", "translate(0,0)")
                .selectAll(".bubble")
                .data(nodes)
                .enter();
            //create the bubbles
            bubbles.append("circle")
                .attr("r", function (d) { return d.r; })
                .attr("cx", function (d) { return d.x; })
                .attr("cy", function (d) { return d.y; })
                .style("fill", function (d) { return color(d.value); });
            //format the text for each bubble
            bubbles.append("text")
                .attr("x", function (d) { return d.x; })
                .attr("y", function (d) { return d.y + 5; })
                .attr("text-anchor", "middle")
                .text(function (d) { return d["Amount"]; })
                .style({
                "fill": "white",
                "font-family": "Helvetica Neue, Helvetica, Arial, san-serif",
                "font-size": "12px"
            });
        });
    }
};
CompareComponent = __decorate([
    core_1.Component({
        selector: 'resources',
        templateUrl: './app/compare/compare.component.html',
        styleUrls: ['./app/compare/compare.component.css']
    })
], CompareComponent);
exports.CompareComponent = CompareComponent;
//# sourceMappingURL=compare.component.js.map