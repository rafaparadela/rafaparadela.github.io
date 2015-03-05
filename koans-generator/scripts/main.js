/*jshint strict:false */
/*jshint quotmark: double */

$(function() {
    
    if (!Modernizr.localstorage) console.log('No html5 storage supported');
    reloadViews();
});

var json_reset = 
{
  "modules": [
    {
      "postparagraph": "Explanation text, with ***markdown*** too.",
      "preparagraph": "Preface text with `markdown`",
      "code": "val left = 2\nval right = 1\nassert(leff + right == __)",
      "solutions": [
        "3"
      ]
    }
  ],
  "title": "My Koans"
};

var json = json_reset;


function reloadViews() {
    readCookie();
    drawJSON();
    drawMD();
    drawHTML();
}

function rewriteJSONfromJSON() {
    // console.log('rewriteJSONfromJSON');
    var newValue = $('#json .json').val();
    if(newValue.length==0){
        json = {};
    }
    else{
        var newJSON = JSON.parse(newValue);
        json = newJSON;
    }

    drawMD();
    drawHTML();
    writeCookie();
}



// HTML
function drawHTML() {
    var wrapper = $('#html');
    $('#html .html').empty();
    if(json.title) wrapper.find('h3.title').text(json.title);
    if(json.modules && json.modules instanceof Array){
        $.each(json.modules, function(index, module) {
            drawModuleHTML(index,module);
        });
    }
    drawJSON();
}

function drawModuleHTML(index, module) {
    var wrapper = $('#html .html');

    var themodule = $('<div></div>').attr({'class':'module', 'data-index':index}); wrapper.append(themodule);
    if(module.preparagraph){
        var preparagraph = $('<div></div>').attr({'class':'preparagraph'}).html(marked(module.preparagraph)); themodule.append(preparagraph);
    }
    if(module.code){
        var pre = $('<pre></pre>').attr({'class':'pre'}); themodule.append(pre);
        var code = $('<code></code>').attr({'class':'code'}).html(module.code); pre.append(code);
    }
    if(module.postparagraph){
        var postparagraph = $('<div></div>').attr({'class':'postparagraph'}).html(marked(module.postparagraph)); themodule.append(postparagraph);
    }
}

function drawJSON() {
    var wrapper = $('#json .json');
    
    var str = JSON.stringify(json, undefined, 2); // indentation level = 2
    wrapper.html(str);
    
    var height = $('#md').height();
    wrapper.height(height-40);

    wrapper.off().on({
		change: function() {
			rewriteJSONfromJSON();
	  	}, keypress: function() {
            rewriteJSONfromJSON();
	  	}, blur: function() {
	    	rewriteJSONfromJSON();
	  	}
	});
    
    
}


// Markdown
function drawMD() {
    var title_input = $('#md .title');
    if(json.title) title_input.val(json.title);
    title_input.off().on({
		change: function() {
			rewriteJSONfromMD();
	  	}, keyup: function() {
	    	rewriteJSONfromMD();
	  	}, blur: function() {
	    	rewriteJSONfromMD();
	  	}
	});
    
    $('#md .md').empty();
    if(json.modules && json.modules instanceof Array){
        $.each(json.modules, function(index, module) {
            drawModuleMD(index,module,false);
        });
    }
}

function addModule() {
	var module = false;
	drawModuleMD(0, module, true);
}

function drawModuleMD(index, module,isnew) {
    var wrapper = $('#md .md');
    
    var themodule = $('<div></div>').attr({'class':'module', 'data-index':index}); wrapper.append(themodule);
    
	var button = $('<button></button>').attr({'class':'btn btn-default btn-sm pull-right'}).html('<i class="icon ion-close"></i>'); themodule.append(button);
	button.click(function(){
		$(this).parent().remove();
		rewriteJSONfromMD(); 
	});
    
	//Preface
	var preparagraph_title = $('<h5></h5>').text('Preface'); themodule.append(preparagraph_title);
	var preparagraph = $('<textarea></textarea>').attr({'class':'preparagraph'}).val(module.preparagraph); themodule.append(preparagraph);
    if(module.preparagraph) preparagraph.val(module.preparagraph);
    preparagraph.off().on({
		change: function() {
			rewriteJSONfromMD();
	  	}, keyup: function() {
	    	rewriteJSONfromMD();
	  	}, blur: function() {
	    	rewriteJSONfromMD();
	  	}
	});		
	
	
	//Code
	var code_title = $('<h5></h5>').text('Code'); themodule.append(code_title);
	var code = $('<textarea></textarea>').attr({'class':'code', 'wrap':'off'}); themodule.append(code);
	if(module.code) code.val(module.code);
	
	//Solutions
	var solutions_title = $('<h5></h5>').text('Solutions'); themodule.append(solutions_title);
	var solutions = $('<div></div>').attr({'class':'solutions'}); themodule.append(solutions);
	
	if(module.solutions){
		$.each(module.solutions, function(solution_index, solution) {
			var input = $('<input>').attr({'type':'text', 'class':'solution', 'data-index':index}).val(solution); solutions.append(input);
            input.off().on({
        		change: function() {
        			rewriteJSONfromMD();
        	  	}, keyup: function() {
        	    	rewriteJSONfromMD();
        	  	}, blur: function() {
        	    	rewriteJSONfromMD();
        	  	}
        	});
		});
	}
	
	//Explanation
	var postparagraph_title = $('<h5></h5>').text('Explanation'); themodule.append(postparagraph_title);
	var postparagraph = $('<textarea></textarea>').attr({'class':'postparagraph'}); themodule.append(postparagraph);
	if(module.postparagraph) postparagraph.val(module.postparagraph);
    postparagraph.off().on({
		change: function() {
			rewriteJSONfromMD();
	  	}, keyup: function() {
	    	rewriteJSONfromMD();
	  	}, blur: function() {
	    	rewriteJSONfromMD();
	  	}
	});
    
	//Code events
	studyCode(code.get(0), index);
	code.on({
		change: function() {
			studyCode(this, index);
	  	}, keyup: function() {
	    	studyCode(this, index);
	  	}, blur: function() {
	    	studyCode(this, index);
	  	}
	});
    
}

function studyCode(element, index) {
	var textarea = $(element);
	var code = textarea.val();
	var matches = code.match(/\__/g);
	var counter_blinks = matches ? matches.length : 0;
	var solutions = textarea.siblings('.solutions');
	var counter = solutions.children('.solution').length;
			
	if(counter_blinks>counter){
		for (var i = counter_blinks-counter; i > 0; i--) {
			create_solution_input(solutions,'', index);
		}
	}
	if(counter_blinks<counter){
		for (var i = counter-counter_blinks; i > 0; i--) {
			remove_solution_input(solutions);
		}
	}

	rewriteJSONfromMD();
}

function create_solution_input(solutions, code, index) {
	var input = $('<input>').attr({'type':'text', 'class':'solution', 'data-index':index}).val(code);
    input.off().on({
		change: function() {
			rewriteJSONfromMD();
	  	}, keyup: function() {
	    	rewriteJSONfromMD();
	  	}, blur: function() {
	    	rewriteJSONfromMD();
	  	}
	});
	solutions.append(input);
}

function remove_solution_input(solutions) {
	solutions.children('.solution').last().remove();
}


function rewriteJSONfromMD() {
    console.log('rewriteJSONfromMD');
	var koan_group = $('#md .md');
    var title=$('#md .title').val();
	var modules = koan_group.children('.module');
	var koan_dict = {}; // create an empty array
	var modules_dict = [];
	
	modules.each(function(module_id) {
		var module = $(this);
		var solution_array = [];
		var solutions = module.find('.solution');
		solutions.each(function(i) {
			solution_array.push($(this).val());
		});

		var module_dict = {
			'preparagraph': module.find('.preparagraph').first().val(),
			'code': module.find('.code').first().val(),
			'solutions':solution_array,
            'postparagraph': module.find('.postparagraph').first().val()
		};

		modules_dict[module_id] = module_dict;
		
	});
    
    
    koan_dict['title'] = title;
	koan_dict['modules'] = modules_dict;
	
    json = koan_dict;
    
    drawJSON();
    drawHTML();
    writeCookie();
    
}


// Cookie

function writeCookie() {
    var str = JSON.stringify(json, undefined, 2);
    localStorage.setItem("json", str);
    console.log("Write local storage");
}

function readCookie() {
    if(localStorage.getItem("json")){
        console.log("Read local storage");
        json = $.parseJSON(localStorage.getItem("json"));
    }
}


//Reset
function reset() {
    json = json_reset;
    writeCookie();
    reloadViews();
}