/* eslint-disable */
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWxleGVpc3Bpcml0IiwiYSI6ImNqeTZ4d2d1ZjAwaXIzY21xb2NwdDN1ZXAifQ.81plIfBR0rYe74v1wgW9dQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alexeispirit/cjy6y3vek0ytn1cn7ijblo3j9',
    scrollZoom: false
    // center: [-118.295929, 34.103771],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
