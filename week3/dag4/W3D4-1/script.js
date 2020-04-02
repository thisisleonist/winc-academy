const log = log => console.log(log);

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 52.090736, lng: 5.12142 },
        zoom: 9,
        mapTypeId: 'terrain',
        styles: MAP_STYLE
    });

    const markers = {
        winc: { coor: { lat: 52.378361, lng: 4.854710 }, title: 'Winc Academy' }

    };

    const marker = new google.maps.Marker({
        position: markers.winc.coor,
        map: map,
        title: markers.winc.title,
        draggable: true,
        animation: google.maps.Animation.DROP,
    });
}

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
