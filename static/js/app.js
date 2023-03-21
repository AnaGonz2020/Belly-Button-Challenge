//Define url to constant
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Function to load initial page with data and again when a new id is selected
function chartBuilder(sampleId) {

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
   console.log(data);

  const selectedSample = data.samples.find(O => O.id==sampleId);
    console.log(selectedSample);
  const selectedMeta = data.metadata.find(W => W.id==sampleId);
    console.log(selectedMeta);

  // Update panel with test subject metadata
  let infoBox = d3.select("#sample-metadata").text("");
    Object.entries(selectedMeta).forEach(([key, value]) => {
      infoBox.append("p").append("b").text(`${key}: ${value}`)
    });

  // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
  //Use sample_values as the values for the bar chart.
  let sample = selectedSample.sample_values;
  //Use otu_ids as the labels for the bar chart.
  let labels = selectedSample.otu_ids;
  //Use otu_labels as the hovertext for the chart.
  let hovertext = selectedSample.otu_labels;

  let barTitle = `<b>Top 10 OTU's for ID ${sampleId}`;

  let trace1 = {
  x: sample.slice(0,10).reverse(),
  y: labels.slice(0,10).map(labels => `OTu ${labels}`),
  text: hovertext.slice(0,10).reverse(),
  type:"bar",
  orientation: 'h',
  width: .9
};

//Data trace array 
let traceData = [trace1];

// Apply the group barmode to the layout
let layout = {
  title: barTitle
};


//Render the plot to the div tag with id "bar"
Plotly.newPlot("bar", traceData, layout)

  // construction of bubble chart

  let bubbleTitle = `<b>Top 20 OTUs for ID ${sampleId}`;
  let bubbleTrace = {
    x: labels.slice(0, 20),
    y: sample.slice(0, 20),
    text: hovertext.slice(0, 20),
    type: 'scatter',
    mode: 'markers',
    marker: {size: sample,
             color: labels,
             colorscale: 'Rainbow'},
  };

  let bubbleLayout = {
    title: bubbleTitle
  };

  sampleBubble = [bubbleTrace];

  Plotly.newPlot("bubble", sampleBubble, bubbleLayout);


  // construction of washing gauge

  let washing = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: selectedMeta.wfreq,
      title: { text: "<b>Washing Frequency</b> <br>Scrubs per Week", font: {size: 30}
    },
      type: "indicator",
      mode: "gauge+number",
      delta: { reference: 5 },
      gauge: {
        axis: { range: [null, 9], dtick: 1 },
        bar: {color: 'red', thickness: .3},
        bgcolor: 'red',
        steps: [
          { range: [0, 1], color: "#000000" },
          { range: [1, 2], color: "#2F4F4F" },
          { range: [2, 3], color: "#696969" },
          { range: [3, 4], color: "#808080" },
          { range: [4, 5], color: "#A9A9A9" },
          { range: [5, 6], color: "#DCDCDC" },
          { range: [6, 7], color: "#B0C4DE" },
          { range: [7, 8], color: "#6495ED" },
          { range: [8, 9], color: "#00008b" }
        ],
      }
    }
  ];
  
  var gaugeLayout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
  Plotly.newPlot('gauge', washing, gaugeLayout);
});
}

function startPage() {
  let selection = d3.select("#selDataset")
  d3.json(url).then(function(data) {
    let ids = data.names;
    let meta = data.metadata;
    ids.forEach(sampleId => {selection.append("option").text(sampleId).property("value", sampleId)
  });
  //console.log(meta);
});
chartBuilder(1555);
};

// Function to update charts when a new ID is selected.
function optionChanged(sampleId) {
  chartBuilder(sampleId);
  console.log(sampleId);
}

startPage();

