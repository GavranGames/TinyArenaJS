score = 0;
id = 0
$(document).ready(function(){
	new Character(rgn(15,20),rgn(1,20),10,'@');
	new Npc('orc'+(id++),'the orc',rgn(1,5),rgn(1,20),8,'<span style="color:lightgreen;font-weight:bold;">ô</span>');
	map.initiate(20,20);
	
	$(window).on('keydown',function(event){
		if(player.health < 1){return true;}
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