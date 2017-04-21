
import React from "react"
import * as d3 from "d3"

export default class BarChart extends React.Component {
	render() {


var data = [
  { "name": "Apples", "value": 4 },
  { "name": "Pears", "value": 8 },
  { "name": "Oranges", "value": 15},
  { "name": "Mangos", "value": 16},
  { "name": "Grapes", "value": 23},
  { "name": "Bananas", "value": 42},
]

var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom

var barWidth = width / data.length

var x = d3.scaleBand()
    .rangeRound([0, width], .1)
    .domain(data.map(function(d) { return d.name }))

var y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.value; })])
    .range([height, 0])

var xAxis = d3.axisBottom(x).tickFormat(function(d) { return d.value })
var yAxis = d3.axisLeft(y).ticks(10 , "u")

var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

chart.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)

chart.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Frequency");

chart.selectAll(".bar")
    .data(data)
  .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.name) })
    .attr("y", function(d) { return y(d.value) })
    .attr("height", function(d) { return height - y(d.value)})
    .attr("width", x.bandwidth() - 1)

		return (
			<main>
				<svg class="chart"></svg>
				<div class="tooltip"></div>
			</main>
		)
	}
}
