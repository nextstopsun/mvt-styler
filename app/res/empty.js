var _style ={
	"version": 8,
	"sources": {
		"osm": {
			"type": "vector",
			"tiles": ["https://vector.mapzen.com/osm/all/{z}/{x}/{y}.mvt?api_key=vector-tiles-LM25tq4"]
		}
	},
	"layers": [
		{
			"id": "background",
			"type": "background",
			"paint": {
				"background-color": "#41afa5"
			}
		}, {
			"id": "water",
			"type": "fill",
			"source": "osm",
			"source-layer": "water",
			"filter": ["==", "$type", "Polygon"],
			"paint": {
				"fill-color": "#3887be"
			}
		}
	]
};

if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	module.exports = _style;
}
