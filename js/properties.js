var config = {
	"protocol" : "http",
	"port" : "3333",
	"domain" : "localhoost",
	"project" : "PolyGamesApp"
}

function getURI() {
	return config.protocol + "://" + config.domain + ":" + config.port + "/"
			+ config.project + "/api/";
}