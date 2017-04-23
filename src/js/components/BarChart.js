
import React from "react"
import * as d3 from "d3"

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default class BarChart extends React.Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.Data !== this.props.Data) {
      return this.renderBarChart(nextProps.Data)
    } else {
      return false
    }
  }

  renderBarChart(data) {
  
    var chart = d3.select(".chart"),
        margin = {top: 5, right: 10, bottom: 30, left: 75},
        width = 1000 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom

    var tooltip = d3.select("main").append("div").attr("class", "toolTip")

    var barWidth = Math.ceil(width / data.length);

    var minDate = new Date(data[0].date)
    var maxDate = new Date(data[data.length-1].date)

    var x = d3.scaleTime().range([0, width])
        .domain([minDate, maxDate])

    var y = d3.scaleLinear().range([height, 0])
        .domain([0, d3.max(data, function(d) { return d.value; })])

    var g = chart.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    var formatCurrency = d3.format("$,.2f");

    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(15))

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10))
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .attr("fill", "black")
        .style("font-size", "16px")
        .text("Gross Domestic Product, USA")

    g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(new Date(d.date)) })
        .attr("y", function(d) { return y(d.value) })
        // .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.value) })
        .attr("width", barWidth)
          .on("mouseover", function(d) {
            var date = new Date(d.date)
            var year = date.getFullYear()
            var month = date.getMonth()

            tooltip.html(`<span class='amount'>${formatCurrency(d.value)} Billion </span><br><span class='year'> ${year} - ${months[month]} </span>`)
              .style("opacity", "0.9")
              .style("left", (d3.event.pageX + 5) + "px")
              .style("top", (d3.event.pageY - 50) + "px");

          })
          .on("mouseout", function() { tooltip.style("opacity", "0") });

    return true
  }

	render() {
		return (
			<main>
				<svg width="1000" height="500" class="chart"></svg>
			</main>
		)
	}
}
