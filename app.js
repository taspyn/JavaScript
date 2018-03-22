console.log('app is running')

let lights = document.querySelectorAll('.circle')

function swithOff(light){
	light.classList.add('off')
}

function swithOn(light){
	light.classList.remove('off')

}

lights.forEach(function(light){
	swithOff(light);
})

swithOn(lights[0]);

let current = 0;

setInterval(function(){
	swithOff(lights[current]);

	current = current +1;

	if(current >= lights.length) {
		current = 0;
	}
swithOn(lights[current]);
},2000)

