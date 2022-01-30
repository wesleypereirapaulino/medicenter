var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 8000);

	var slidewidth = document.getElementById("banner_container").offsetWidth;
	var objs = document.getElementsByClassName("slides");
	for(var i=0;i<objs.length;i++) {
		objs[i].style.width = slidewidth+"px";
	}

	document.querySelector("#menu_mobile").addEventListener("click",function(){

		if (document.querySelector(".container_menu_principal").style.display == 'flex'){
			document.querySelector(".container_menu_principal").style.display = 'none';
		}
		else{
			document.querySelector(".container_menu_principal").style.display = 'flex';

		}
	});
};

function passarSlide() {
	var slidewidth = document.getElementById("banner_container").offsetWidth;
	
	if(slideItem >= 1) {
		slideItem = 0;
	} else {
		slideItem++;
	}

	document.getElementsByClassName("banner_int")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("banner_container").offsetWidth;
	document.getElementsByClassName("banner_int")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}