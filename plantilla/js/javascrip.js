class Escena extends Phaser.Scene {

    //  Precargar imagenes del videojuego
	preload() {
		console.log('preload');
	}

    //  Muestras los elementos(iamgenes) en pantalla
	create() {
		console.log('create');
	}

    //  Se ejecuta varias veces por segundo(ej:detección de eventos)
	update() {
		console.log('update');
	}
}

const config = {
	type: Phaser.AUTO,          //  Motor de renderizado AUTO
	width: 960,
	height: 640,
	scene: Escena,              //  Pantalla (nivel*)
	scale: {                    //  Redimención de la pantalla - conservando la relación de aspecto original
		mode: Phaser.Scale.FIT
	}
	/*physics: {                //  Uso de fisicas(***gravedad) - ARCADE | MATTER 
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: {
				y: 300,
			},
		},
	},*/
};

new Phaser.Game(config);

//  Para ejecutar los juegos en Phaser.js se necesita de un servidor, 
//  ya que la carga de recursos se hace utilizando AJAX.