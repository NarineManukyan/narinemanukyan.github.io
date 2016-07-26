
//Plotly.d3.json('dataset.json', function(err, rows){
Plotly.d3.json('dataset.json', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }
var cityName = unpack(rows, 'search_region'),
    cityPop = unpack(rows, 'count'),
    cityLat = unpack(rows, 'latitude'),
    cityLon = unpack(rows, 'longitude'),
    color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"],
    citySize = [],
    hoverText = [],
    scale = 50000;

console.log(cityName);
for ( var i = 0 ; i < cityPop.length; i++) {
  var currentSize = cityPop[i] / scale;
  var currentText = cityName[i] + "<br>Population: " + cityPop[i];
  citySize.push(currentSize);
  hoverText.push(currentText);
}

  var data = [{
   type: 'scattergeo',
   locationmode: 'USA-states',
   lat: cityLat,
   lon: cityLon,
   text: hoverText,
   hoverinfo: 'text',
   marker: {
     size: citySize,
     line: {
       color: 'black',
       width: 2
     },
     
   }
}];

var layout = {
    title: '2014 US City Populations',
    showlegend: false,
    geo: {
      scope: 'usa',
      projection: {
        type: 'albers usa'
      },
      showland: true,
      landcolor: 'rgb(217, 217, 217)',
      subunitwidth: 1,
      countrywidth: 1,
      subunitcolor: 'rgb(255,255,255)',
      countrycolor: 'rgb(255,255,255)'
    },
};

Plotly.plot(myDiv, data, layout, {showLink: false});


  });