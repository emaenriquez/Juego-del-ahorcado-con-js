

String.prototype.replaceAt=function(index, character) {
	return this.substr(0, index) + character + this.substr(index+character.length); 
}

let palabras = ["casa","perro","gato","elefante"]

let palabra = palabras[Math.floor(Math.random()*palabras.length)]

let palabraConGuiones = palabra.replace(/./g, "_ ")

let contadorDeFallos = 0

document.querySelector(".output").innerHTML = palabraConGuiones

document.querySelector(".calcular").addEventListener("click",()=>{

	const letra = document.querySelector(".letra").value

	let hafallado = true

	for(const i in palabra){
		if(letra == palabra[i]){
			palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
			hafallado = false
		}
	}

	if(hafallado){
		contadorDeFallos++
		document.querySelector(".ahorcado").style.backgroundPosition = -(150*contadorDeFallos) + "px 0"
		if(contadorDeFallos == 4){
			document.querySelector(".msj-perdedor").style.display = "flex"
		}
	} else{
		if(palabraConGuiones.indexOf ("_") < 0){
			document.querySelector(".msj-ganador").style.display = "flex"
		}
	}

	document.querySelector(".output").innerHTML = palabraConGuiones

	document.querySelector(".letra").value = ""

	document.querySelector(".letra").focus()
})
