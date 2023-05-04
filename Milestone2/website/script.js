// This is where you would write your JavaScript code to create the data visualization.
// You can use jQuery and D3.js to manipulate the DOM and create the visualization.
// For example, you could use D3.js to create a bar chart, and use jQuery to fetch data from an API.

// Example D3.js code to create a bar chart:
const data = [5, 10, 15, 20, 25];

const svg = d3.select("#chart")
  .append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

const rect = svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 50)
  .attr("y", (d) => 400 - d * 10)
  .attr("width", 40)
  .attr("height", (d) => d * 10)
  .attr("fill", "steelblue");




const menu = document.querySelector('#mobile_menu');
const menu_links = document.querySelector('.navig_menu');
const kibramlogo = document.querySelector('#kibram_logo');


const mobilemenu = () => {
  menu.classList.toggle('is-active');
  menu_links.classList.toggle('active');
};

menu.addEventListener('click', mobilemenu);