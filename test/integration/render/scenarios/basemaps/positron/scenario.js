const map = new mapboxgl.Map({
    container: 'map',
    style: carto.basemaps.positron,
    center: [0, 0],
    zoom: 0
});

map.on('load', () => {
    window.loaded = true;
});
