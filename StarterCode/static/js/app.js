const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
  //Use sample_values as the values for the bar chart.
  let sampleValues = data.samples.map(function (row){
    return row.sample_values
  });
  //Use otu_ids as the labels for the bar chart.
  let labelValues = data.samples.map(function (label){
    return label.otu_labels
  });
  //Use otu_labels as the hovertext for the chart.

let trace1 = {
  x: data.samples.map(row => row.sample_values),
  y: data.samples.map(label => label.otu_labels),
  type:"bar"
};

//Data trace array 
let traceData = [trace1];

// Apply the group barmode to the layout
let layout = {
  title: "Top 10 OTUs"
};


//Render the plot to the div tag with id "bar"
Plotly.newplot("bar", traceData, layout)