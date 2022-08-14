// @TODO: YOUR CODE HERE!

// Set up container + plot splace

// svg container 
var svgHeight = 400;
// get the width of containing box
var svgWidth = parseInt(d3.select("#scatter").style("width"));

//margins 
var margin = {
    top: 50,
    right: 50,
    bottom: 50, 
    left: 50
};

// chart area minus margins
var chartHeight = svgHeight - margin.top - margin.bottom;
var chartWidth = svgWidth - margin.left - margin.right;

// create canvas for the graph
var svg = d3.select("#scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth)
  .attr("class", "chart");

  
// RECHECK THIS
var circRadius;
  function crGet() {
    if (width <= 530) {
      circRadius = 5;
    }
    else {
      circRadius = 10;
    }
  }
  crGet();
  

// Create a group to nest bottom axis
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Pull .CSV data through D3
d3.csv("assets/data/data.csv").then(function(data) {
    //
    console.log(data)
    draw_scatter(data)
});



//Function to create visualisation
function draw_scatter(datas){
    // determine axis 
    var xaxis = "poverty"
    var yaxis = "healthcare"

    //MaxMin Values
    var xmax; 
    var xmin;
    var ymax;
    var ymin;

    datas.forEach(function(data) {
        console.log(data.state)
    })




}


