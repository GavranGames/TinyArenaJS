function cell(x,y){
	return $('.cell[x="'+(x)+'"][y="'+(y)+'"]');
}
var Character = function(x,y,mxh,text){
	this.x = x;
	this.y = y;
	this.maxhealth = mxh;
	this.health = mxh;
	this.text=text;
}
Character.prototype = {
	draw:function(){cell(this.x,this.y).html(this.text);},
	move:function(x,y){
		console.log(x+','+y);
		this.x += x;
		this.y += y;
		refreshMap();
	}
}
function rgn(mini,maxi){
	return mini + Math.floor(Math.random()*Math.round(maxi-mini));
}
player = new Character(rgn(15,20),rgn(1,20),10,'@');
orc = new Character(rgn(1,5),rgn(1,20),8,'<span style="color:lightgreen;font-weight:bold;">ô</span>');
function refreshMap(){
	$('.cell').text('.');
	player.draw();
	orc.draw();
}
$(document).ready(function(){
	for(i=0;i<=20;i++){
		for(j=20;j>=0;j--){
			$('#map').prepend('<div class="cell" x="'+j+'" y="'+i+'"></div>');
		}
	}
	refreshMap();
	$('#log').on('DOMNodeInserted',function(){
		$(this).scrollTop($(this).prop("scrollHeight"));
	});
});
$(window).load(function(){
	$('#log').height($('#display').height() - $('#top').height());
	$(window).on('keydown',function(event){
		console.log(event.keyCode);
		switch(event.keyCode){
			case(37):case(100):
				player.move(-1,0)
				break;
			case(103):
				player.move(-1,1)
				break;
			case(38):case(104):
				player.move(0,1)
				break;
			case(105):
				player.move(1,1)
				break;
			case(39):case(102):
				player.move(1,0)
				break;
			case(99):
				player.move(1,-1)
				break;
			case(40):case(98):
				player.move(0,-1)
				break;
			case(97):
				player.move(-1,-1)
				break;
		}
	});
});