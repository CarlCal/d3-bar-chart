
import React from "react"
import * as d3 from "d3"

export default class BarChart extends React.Component {
	render() {

	var jsonRect = [
    { "x_axis": 30, "y_axis": 30},
    { "x_axis": 70, "y_axis": 70},
    { "x_axis": 110, "y_axis": 100}];

 
 var svgContainer = d3.select(".chart")
 
 var rects = svgContainer.selectAll("rect")
                           .data(jsonRect)
                           .enter()
                           .append("rect")

 var rectAttributes = rects
                       .attr("x", function (d) {return d.x_axis})
                       .attr("y", function (d) {return d.y_axis})
                       .attr("width", 10)
                       .attr("height", 50)
                       .style("fill", "black")
 
		return (
			<main>
				<svg class="chart" width="1000" height="500"></svg>
				<div class="tooltip"></div>
			</main>
		)
	}
}
