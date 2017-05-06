import { Component, OnInit } from '@angular/core';
import { APIRepository } from '../api/user-repository';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
	selector: 'resources',
	templateUrl: './app/compare/compare.component.html',
  	styleUrls: [ './app/compare/compare.component.css' ]
})

export class CompareComponent implements OnInit {
	myStorage = localStorage;
	constructor(private userService: APIRepository, private router: Router) {
		if (this.myStorage.getItem("userId") === null) { // ===
			console.log("there's a userid" + this.myStorage.getItem("userId"));
			// navigate back to login and clear local storage
			this.router.navigateByUrl("");
			this.myStorage.removeItem("userId");
		}
	}
	ngOnInit() {

		var d3 = window['d3'];
//
		var diameter = 500, //max size of the bubbles
		    color    = d3.scale.category20b(); //color category

		var bubble = d3.layout.pack()
		    .sort(null)
		    .size([diameter, diameter])
		    .padding(1.5);


		var svg = d3.select("#bubbles")
		    .append("svg")
		    .attr("width", diameter)
		    .attr("height", diameter)
		    .attr("class", "bubble")

				var tip = d3.tip()
					.attr('class', 'd3-tip')
					.offset([-10, 0])
					.html(function(d) {
						return "\
						<strong>Total Cost:</strong> \
						<span>" + d.value + "</span> \
						<style> \
							.d3-tip \
							{ line-height: 1; } \
						  { font-weight: bold; } \
						  { padding: 12px; } \
						  { background-color: rgba(0, 0, 0, 1); } \
						  { color: #fff; } \
						  { border-radius: 2px; } \
							.d3-tip:after \
							{ box-sizing: border-box; } \
							{ display: inline; } \
							{ font-size: 10px; } \
							{ width: 100%; } \
							{ line-height: 1; } \
							{ color: rgba(0, 0, 0, 0.8); } \
							{ position: absolute; } \
							{ text-align: center; } \
							.d3-tip.n:after \
							{ margin: -1px 0 0 0; } \
							{ top: 100%; } \
							{ left: 0; } \
							span \
							{ color: red; } \
						</style>";

					})
					svg.call(tip);

					/*var circleAttrs = {
          cx: function(d) { return xScale(d.x); },
          cy: function(d) { return yScale(d.y); },
          r: function(d) { return d.value; }
      };*/

		d3.csv("indexity.csv", function(error, data){
				//convert numerical values from strings to numbers
		    data = data.map(function(d){ d.value = +d["Total"]; return d; });

				//document.getElementById("bubbles").align = "center";

		    //bubbles needs very specific format, convert data to this.
		    var nodes = bubble.nodes({children:data}).filter(function(d) { return !d.children; });

		    //setup the chart
		    var bubbles = svg.append("g")
		        .attr("transform", "translate(0,0)")
		        .selectAll(".bubble")
		        .data(nodes)
		        .enter();


		    //create the bubbles
		    bubbles.append("circle")
		        .attr("r", function(d){ return d.r; })
		        .attr("cx", function(d){ return d.x; })
		        .attr("cy", function(d){ return d.y; })
						.on('mouseover', tip.show)
      			.on('mouseout', tip.hide)
		        .style("fill", function(d) {
							//console.log(d.value);
							return color(d.value);
						});

		    //format the text for each bubble
		    bubbles.append("text")
		        .attr("x", function(d){ return d.x; })
		        .attr("y", function(d){ return d.y + 5; })
		        .attr("text-anchor", "middle")
		        .text(function(d){ return d["City"]; })
		        .style({
		            "fill":"black",
		            "font-family":"Cuprum, Helvetica Neue, Helvetica, Arial, san-serif",
		            "font-size": "15px"
		        });


		})
		function zoom() {
  		svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
		}

	}
}
