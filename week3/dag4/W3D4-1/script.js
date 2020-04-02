const log = log => console.log(log);

const markers = [
    { marker: { coords: { lat: 52.378361, lng: 4.854710 }, title: 'Winc Academy', image: 'winc.png'} },
    { marker: { coords: { lat: 51.753870, lng: 4.152480 }, title: 'Leon Rijsdam' } }
];

let map = null;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 52.090736, lng: 5.12142 },
        zoom: 9,
        mapTypeId: 'terrain',
        styles: MAP_STYLE,        
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    });
    addMarkers();
}

const addMarkers = () => {

    markers.forEach(item => {
        let marker = new google.maps.Marker({
            position: item.marker.coords,
            map: map,
            label: {
                text: item.marker.title,
                color: '#fff',
                fontWeight: '700'
            },
            draggable: false,
            animation: google.maps.Animation.DROP,
            icon: {
                url: item.marker.image
            }
        });
    });
};

const initScript = () => {
    const script = document.createElement("script");
    script.setAttribute(
        "src",
        "https://maps.googleapis.com/maps/api/js?key=" +
            API_KEY +
            "&language=nl&region=nl&callback=initMap"
    );
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    document.body.appendChild(script);
};

initScript();
