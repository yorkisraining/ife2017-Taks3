//create by rain 2017.2.25

var json = [
	{//图1
		top:'0px',
		left:'300px',
		width:'300px',
		height:'187px',
		zIndex:6,
		opacity:0.2
	},
	{//图2
		top:'170px',
		left:'75px',
		width:'400px',
		height:'250px',
		zIndex:8,
		opacity:0.5
	},
	{//图3
		top:'400px',
		left:'400px',
		width:'500px',
		height:'312px',
		zIndex:10,
		opacity:1
	},
	{//图4
		top:'170px',
		left:'900px',
		width:'400px',
		height:'250px',
		zIndex:8,
		opacity:0.5
	},
	{//图5
		top:'0px',
		left:'800px',
		width:'300px',
		height:'187px',
		zIndex:6,
		opacity:0.2
	}
];

window.onload = function() {
	addCss();
}

function addCss() {
	for (var i in json) {
		$('li').eq(i).css({zIndex:json[i].zIndex});
		$('li').eq(i).animate({
				top:json[i].top,
				left:json[i].left,
				width:json[i].width,
				height:json[i].height,
				opacity:json[i].opacity
		}, 1500, function(){
			json.push(json.shift());
	        addCss();
		});
	}
}


