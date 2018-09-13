//-------------VARIABLES GLOBALES

    var latitud;
    var longitud;
    var distancia_max = 0.001000;


    var usuario = {
        historial_clapps: [
            {
                clappeado: "Markiño",
                num_clapps: 5
            },
            {
                clappeado: "Mese",
                num_clapps: 2
            }
        ] 
    }

    var bandas_activas = [
        //en el futuro sólo incluiría ID y posicion_show, lo de más lo traería de la base de datos a través del ID
        {
            name: "Mese",
            imagen: "images/perfil_rober.png",
            ciudad: "Madrid",
            posicion_show: {
                latitud: 40.407063,
                longitud: -3.703284
            }
        },
        {
            name: "Paul and the pauls",
            imagen: "images/perfil_pablo.jpeg",
            ciudad: "Valladolid",
            posicion_show: {
                latitud: 40.450249,
                longitud: -3.695041
            }
        },
        {
            name: "Marina",
            imagen: "images/perfil_marina.jpeg",
            ciudad: "Berlin",
            posicion_show: {
                latitud: 52.516050,
                longitud: 13.462634
            }
        },
        {
            name: "Markiño",
            imagen: "images/perfil_markuser.jpg",
            ciudad: "Berlin",
            posicion_show: {
                latitud: 52.490818,
                longitud: 13.402605
            }
        },
        {
            name: "Poni",
            imagen: "images/perfil_maria.png",
            ciudad: "Intermundicia",
            posicion_show: {
                latitud: 40.423399,
                longitud: -3.691778
            }
        },
        {
            name: "Bro",
            imagen: "images/perfil_bro.png",
            ciudad: "Mandril",
            posicion_show: {
                latitud: 40.433127,
                longitud: -3.704691
            }
        },
        {
            name: "HIGOMAN",
            imagen: "images/perfil_luca.png",
            ciudad: "tarragona",
            posicion_show: {
                latitud: 41.11516,
                longitud: 1.252181
            }
        }
    ];

//-------------FUNCIONES

    //geolocalizacion

        var apiGeolocationSuccess = function(position) {
            latitud = position.coords.latitude;
            longitud = position.coords.longitude;
            console.log("API geolocation success!\n\nlat = " + latitud + "\nlng = " + longitud);
            encontrar();
        };

        var tryAPIGeolocation = function() {
            jQuery.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDCa1LUe1vOczX1hO_iGYgyo8p_jYuGOPU", function(success) {
                apiGeolocationSuccess({coords: {latitude: success.location.lat, longitude: success.location.lng}});
            })
            .fail(function(err) {
                console.log("API Geolocation error! \n\n"+err);
                $(".act .name").html("API Geolocation error! \n\n"+err);
            });
        };

        var browserGeolocationSuccess = function(position) {
            latitud = position.coords.latitude;
            longitud = position.coords.longitude;
            console.log("Browser geolocation success!\n\nlat = " + position.coords.latitude + "\nlng = " + position.coords.longitude);
            // latitud = 41.11516;
            // longitud = 1.252181;
            encontrar();
        };

        var browserGeolocationFail = function(error) {
            switch (error.code) {
                case error.TIMEOUT:
                    console.log("Browser geolocation error !\n\nTimeout.");
                break;
                case error.PERMISSION_DENIED:
                    if(error.message.indexOf("Only secure origins are allowed") == 0) {
                        tryAPIGeolocation();
                    } else {
                        console.log("Permison denied");
                        $(".act .name").html("No nos has dado permiso de acceder a tu ubicación");
                    }
                break;
                case error.POSITION_UNAVAILABLE:
                    console.log("Browser geolocation error !\n\nPosition unavailable.");
                    $(".act .name").html("Browser geolocation error !\n\nPosition unavailable");
                break;
            }
        };

        var tryGeolocation = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    browserGeolocationSuccess,
                    browserGeolocationFail,
                    {maximumAge: 20000, timeout: 10000, enableHighAccuracy: false}
                );
            } else {
                console.log("Navigator geolocation unavailable.");
            }
        };


    //comparar distancias
        function cerca (posicion1, posicion2) {
            var distancia;
            // debugger;
            distancia = Math.pow((Math.pow(posicion1.latitud - posicion2.latitud, 2) + Math.pow(posicion1.longitud - posicion2.longitud,2)), 0.5);
            console.log(distancia);
            return distancia <= distancia_max;
        }

    //traer banda que esté dentro del area
        function encontrar() {
            var musico_encontrado = false;
            var posicion_clapp = {
                latitud: latitud,
                longitud: longitud
            };
            console.log("encontrar en: " + posicion_clapp.latitud + "," + posicion_clapp.longitud);
            bandas_activas.forEach(function(element) {
                console.log(element.name);
                if (cerca(element.posicion_show, posicion_clapp)) {
                    show_encontrado(element);
                    console.log("está cerca");
                    musico_encontrado = true;
                } else {
                    console.log("está lejos");
                }
            });
            if (!musico_encontrado) {
                $(".act .name").html("no music :'(");
            }
        };

    //sacar los datos de la banda encontrada
        function show_encontrado (banda) {
            $(".clapp .fondo img").attr("src", banda.imagen);
            $(".act .name").html("<b>" + banda.name + "</b>");
        }
    
    //ordenar los shows activos por distancia al clapp


    //accion de clappear
        var clapps = 0;

        $(".btn_clapp").click(function() {
            if (clapps == 0) {
                clapps += 1;
                $(".num_clapps").html("+" + clapps + " clapp");
            } else if (clapps < 50) { 
                clapps += 1;
                $(".num_clapps").html("+" + clapps + " clapps");
            }
            //guardar a la banda en la lista de clapps del usuario
        });
    //sumarle los clapps a la banda en la bbdd

    //cargar clapps en historial
        var cargar_historial = function() {
            console.log("cargar historial");
            usuario.historial_clapps.forEach(function(element) {
                console.log(element.clappeado);
                var banda = bandas_activas.find(o => o.name === element.clappeado);
                console.log(banda);
                $(".clapps").append(
                    '<li class="clappeado"><img src="' + banda.imagen + '"><p class="band">' + banda.name + '</p><p class="clapps_dados">' + element.num_clapps + '</p></li>'
                );
            });
        };
    
        var bandas_activasjson = {};
        bandas_activasjson.getStrings = function() {
			return $.getJSON('bandas_activas.js');
        }
        console.log(bandas_activasjson);
        // var bandas_activasjson = function(){
        //     $.getJSON('editor/strings.json');
        // }
        // $.getJSON( "ajax/test.json", function( data ) {
        //     var bandas_activasjson = [];
        //     $.each( data, function( key, val ) {
              
        //     });
           
        //     $( "<ul/>", {
        //       "class": "my-new-list",
        //       html: items.join( "" )
        //     }).appendTo( "body" );
        //   });
        
        //   var factory = {};
		
 

