// This is where you would write your JavaScript code to create the data visualization.
// You can use jQuery and D3.js to manipulate the DOM and create the visualization.
// For example, you could use D3.js to create a bar chart, and use jQuery to fetch data from an API.

// Example D3.js code to create a bar chart:





const menu = document.querySelector('#mobile_menu');
const menu_links = document.querySelector('.navig_menu');
const kibramlogo = document.querySelector('#kibram_logo');

// NAVIGATION MENU
const mobilemenu = () => {
  menu.classList.toggle('is-active');
  menu_links.classList.toggle('active');
};

menu.addEventListener('click', mobilemenu);


// TEAM
const members = document.querySelectorAll('.member');
members.forEach(member => {
  const img = member.querySelector('img');
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.1)';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});




//////////// VISUALIZATIONS ////////////



////////////////////// COMPARE AUDIO TRACKS - SPIDER CHART //////////////////////
const width = 400;
const height = 400;


const numFeatures = 7;


const radius = Math.min(width, height) / 2;


const centerX = width / 2;
const centerY = height / 2;

const color = d3.scaleOrdinal()
  .range(["#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);


const svg = d3.select("#spider-chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);


const g = svg.append("g")
  .attr("transform", `translate(${centerX},${centerY})`);


const maxValue = 1;


const angleSlice = Math.PI * 2 / numFeatures;


const rScale = d3.scaleLinear()
  .range([0, radius])
  .domain([0, maxValue]);

const angleScale = d3.scaleLinear()
  .range([0, Math.PI * 2])
  .domain([0, numFeatures]);


const line = d3.lineRadial()
  .curve(d3.curveLinearClosed)
  .radius(d => rScale(d.value))
  .angle((d, i) => angleScale(i));


const area = d3.areaRadial()
  .curve(d3.curveLinearClosed)
  .outerRadius(d => rScale(d.value))
  .angle((d, i) => angleScale(i))
  .innerRadius(0);


const data = [
  { name: "Feature 1", value: 0.8 },
  { name: "Feature 2", value: 0.6 },
  { name: "Feature 3", value: 0.9 },
  { name: "Feature 4", value: 0.5 },
  { name: "Feature 5", value: 0.7 },
  { name: "Feature 6", value: 0.8 },
  { name: "Feature 7", value: 0.6 }
];

g.selectAll(".spider-chart-line")
  .data(data)
  .enter()
  .append("path")
  .attr("class", "spider-chart-line")
  .attr("d", line(data))
  .style("stroke-width", "2px")
  .style("stroke", (d, i) => color(i));


g.selectAll(".spider-chart-area")
  .data([data])
  .enter()
  .append("path")
  .attr("class", "spider-chart-area")
  .attr("d", area)
  .style("fill", (d, i) => color(i))
  .style("opacity", 0.3);


g.selectAll(".spider-chart-label")
  .data(data)
  .enter()
  .append("text")
  .attr("class", "spider-chart-label")
  .attr



const lineLabels = group.selectAll(".lineLabel")
  .data(data)
  .enter().append("g")
  .attr("class", "lineLabel");

lineLabels.append("line")
  .attr("x1", 0)
  .attr("y1", 0)
  .attr("x2", (d, i) => rScale(maxValue) * Math.cos(angleSlice * i - Math.PI/2))
  .attr("y2", (d, i) => rScale(maxValue) * Math.sin(angleSlice * i - Math.PI/2))
  .attr("class", "line");

lineLabels.append("text")
  .attr("class", "label")
  .text(d => d)
  .attr("x", (d, i) => rScale(maxValue * labelFactor) * Math.cos(angleSlice * i - Math.PI/2))
  .attr("y", (d, i) => rScale(maxValue * labelFactor) * Math.sin(angleSlice * i - Math.PI/2))
  .style("font-size", "12px");

////////////////////// COMPARE AUDIO TRACKS - SPIDER CHART - END //////////////////////