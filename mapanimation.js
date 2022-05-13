mapboxgl.accessToken =
"pk.eyJ1Ijoid2VzdG9uMjAwOCIsImEiOiJjbDJ1eXU0Y2IwM2Z5M2pvNWJtcnhoaDluIn0.IoilqLZ07PL9mc3DvgDuGA";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-71.104081, 42.365554],
  zoom: 12,
});

async function run(){
const locations = await getBusLocations();

  console.log(new Date());
  setTimeout(run, 15000);
  };



var bus;
// Request bus data from MBTA
async function getBusLocations(){
const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
const response = await fetch(url);
const json     = await response.json();
bus = json
move();
return json.data;

};
// uncomment line below to auto start tracking
//run();

function move() {

// Create create and move for buses
let counter = 0;
  while(counter < bus.data.length) {
    const marker = new mapboxgl.Marker()
      .setLngLat([bus.data[counter].attributes.longitude, bus.data[counter].attributes.latitude])
      .addTo(map);
      setTimeout(() => {marker.remove()},15000);
          counter++;
  }
  }
