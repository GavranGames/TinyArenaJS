npcs = {};

var Npc = function(key,name,x,y,mxh,text){
	this.key = key;
	this.x = x;
	this.y = y;
	this.maxhealth = mxh;
	this.health = mxh;
	this.text=text;
	this.name=name;
	npcs[key] = this;
}
Npc.prototype = {
	draw:function(){map.updatePosition(this);},
	move:function(){
		var d = getDirection(this,player);
		ma = map.checkAccessibility(this.x+d.x,this.y+d.y);
		if(ma === true){
			this.x += d.x;
			this.y += d.y;
			map.refreshMap();
		}
		else if(ma !== false){
			if(ma === 'player'){this.attack(player);}
			else{this.attack(npcs[ma]);}
		}
		else{addLog(this.name+' hit a wall.');}
	},
	attack:function(target){
		damages = Math.floor(Math.random()*3);
		target.health -= damages;
		if(damages > 0){map.getBloody(target);}
		if(target.health < 1){
			$('[occupent="player"]').css('color','red');
			addLog(this.name+' kills '+target.name+'.','red');
		}
		else if(damages > 1){addLog(this.name+' deals tremendous damages to '+target.name+'.','red');}
		else if (damages > 0){addLog(this.name+' touches '+target.name+'.','red');}
		else {addLog(this.name+' misses '+target.name+'.','lightgreen');}
	}
}

function npcTurn(){
	$.each(npcs,function(key,value){npcs[key].move();});
}

function npcDraw(){
	$.each(npcs,function(key,value){npcs[key].draw();});
}