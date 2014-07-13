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
var skss;


function getReferencias () {
    FBRef= new Firebase('https://sksgallery.firebaseio.com');
	sksRef= FBRef.child('sks');
	cargaSKS();
}

function cargaSKS() {
	$('#grid').html('<li class="placeholder"><i class="fa fa-cog fa-spin"></i></li>');
	sksRef.on('value', function(snapshot) {
		$('#grid').empty();
		skss = snapshot.val();
		$.each(skss, function(index, sks) {
			draw(sks);
		});
		organiceList();
	});
	
}


function draw(sks) {
	var destino = $('#grid');
	var li = $('<li></li>'); destino.prepend(li);
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


//ADD SKS
function new_sks() {
	var title = $('#sks_title').val();
	var gif = $('#sks_gif').val();
	var zip = $('#sks_zip').val();
	var autor = $('#sks_autor').val();
	
	if(title.length>0 && gif.length>0 && zip.length>0 && autor.length>0){
		sksRef.push({title : title, gif : gif, zip:zip, autor:autor});
		$('#add_sks_modal').modal('hide');
	}
	
	
}


//Efecto Masonry
function organiceList() {
	console.log('entro aqui');
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