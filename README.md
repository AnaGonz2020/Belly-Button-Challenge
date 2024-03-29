# Belly-Button-Challenge
# MODULE 14 CHALLENGE
ANA GONZALEZ

# Files
* Final results are hosted on GitHub Pagses:(https://anagonz2020.github.io/Belly-Button-Challenge/)
<br></br>
*In the repository are the completed challenge files.*

* README.md - ReadMe file for the project.
* index.html is the html file for the challenge.
* Data Folder- This folder contains the samples.json data file. Note: I did not utilize this json as we were calling the information from a provided API URL.
* static/js Folder - This folder contains the app.js file which is the JavaScript code that updates the html file.
<br></br>
Instructions

# Complete the following steps:<br><br/>
* Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

# Bar Chart
* Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
* Use sample_values as the values for the bar chart.
* Use otu_ids as the labels for the bar chart.
* Use otu_labels as the hovertext for the chart.

# Bubble Chart
* Create a bubble chart that displays each sample.
* Use otu_ids for the x values.
* Use sample_values for the y values.
* Use sample_values for the marker size.
* Use otu_ids for the marker colors.
* Use otu_labels for the text values.

* Display the sample metadata, i.e., an individual's demographic information.
* Display each key-value pair from the metadata JSON object somewhere on the page.

* Update all the plots when a new sample is selected. 
* Additionally, you are welcome to create any layout that you would like for your dashboard.


* Deploy your app to a free static page hosting service, such as GitHub Pages. 
* Submit the links to your deployment and your GitHub repo.
* Ensure that your repository has regular commits and a thorough README.md file
Advanced Challenge Assignment (Optional with no extra points earning)

# The following task is advanced and therefore optional.
* Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ Links to an external site to plot the weekly washing frequency of the individual.
* You will need to modify the example gauge code to account for values ranging from 0 through 9.
* Update the chart whenever a new sample is selected.
