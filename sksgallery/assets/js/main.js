;(function(){
	
	getReferencias();

	// Menu settings
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});


})(jQuery)

// Firebase

var FBRef;
var sksRef;


function getReferencias () {
    FBRef= new Firebase('https://sksgallery.firebaseio.com');
	sksRef= FBRef.child('sks');
	cargaSKS();
}

function cargaSKS() {

	sksRef.on('value', function(snapshot) {
		$.each(snapshot.val(), function(index, sks) {
			draw(sks);
		});
		organiceList();
	});
}

function draw(sks) {
	
	console.log(sks);
	
	var destino = $('#grid');
	var li = $('<li></li>'); destino.append(li);
		var img = $('<img>').attr({'src': sks.gif }); li.append(img);
		var info = $('<div></div>').attr({'class':'info'}); li.append(info);
			var right = $('<div></div>').attr({'class':'pull-right'}); info.append(right);
				var i = $('<i></i>').attr({'class':'fa fa-cloud-download','data-url':sks.zip}); right.append(i);
			
				i.click(function(event) {
					download(this);
				});
			
			var left = $('<div></div>').attr({'class':'pull-left'}); info.append(left);
				var h4 = $('<h4></h4>').text(sks.title); left.append(h4);
				var p = $('<p></p>').text(sks.autor); left.append(p);
	

}


//Efecto Masonry
function organiceList() {
	new AnimOnScroll( document.getElementById( 'grid' ), {
		minDuration : 0.4,
		maxDuration : 0.7,
		viewportFactor : 0.2
	} );
}


// Download
function download(element) {
	var icon = $(element);
	var url = icon.attr('data-url');
	window.location=url;
	
}