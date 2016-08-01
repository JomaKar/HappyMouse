$(function(){
	var body = $('section.space');
	var Xbefore, Ybefore, posX, posY;
	var timer
	var i = 0;
	var r = 250, g = 250, b= 0;
	var change = true;
	var gg = 0, up= true, down=false;

	body.on('mousemove', function(){

		posX = event.pageX;
		posY = event.pageY;
		vel(posX, posY)
	});

	setInterval(function(){
			Xbefore = posX;
			Ybefore = posY;
	},100);

function vel(actX, actY){
		var div = $('<div class="circle' + i + '"></div>');
		var chX = actX - Xbefore;
		var chY = actY -Ybefore;
		
		chX = Math.abs(chX);
		chY = Math.abs(chY);
		var sum = chX + chY;
		var radius = sum / 2;
		var top = actY - radius;
		var left = actX -radius;

 /////Define color		

		if(r > 0 && g ==250 ){
			b+=10;
			r -= 10;
		}else if(g > 0 && b== 250){
			r+= 10;
			g -= 10;
		}else if(b > 0 && r== 250){
			g += 10;
			b -= 10;
		}

 // add a new circle

 if(change){

		div.appendTo(body);
		var cir = $('.circle' + i +'');
		cir.css({
			position: 'absolute',
			top: top,
			left: left,
			width: sum,
			height: sum,
			'border-radius': radius,
			'background-color': 'rgb('+ r +', '+ g +', '+ b +')'
		});

		i++;
	}
}

$(window).on('keypress', function(e) {
		var div = $('<div class="circle' + i + '"></div>');
		var chX = posX - Xbefore;
		var chY = posY -Ybefore;
		chX = Math.abs(chX);
		chY = Math.abs(chY);
		var sum = chX + chY;
		var radius = sum / 2;
		var top = posY - radius;
		var left = posX -radius;

			/////Define color		

			if(r > 0 && g ==250 ){
				b+=10;
				r -= 10;
			}else if(g > 0 && b== 250){
				r+= 10;
				g -= 10;
			}else if(b > 0 && r== 250){
				g += 10;
				b -= 10;
			}

			// add a new circle

				if(change){
					div.appendTo(body);
					var cir = $('.circle' + i);
					cir.css({
					position: 'absolute',
					top: top,
					left: left,
					width: sum,
					height: sum,
					'border-radius': radius,
					'background-color': 'rgb('+ r +', '+ g +', '+ b +')'
					});
				}

//fade circles
if(e.which===32){
		var sum2 = sum;

		cir.animate({
				opacity: 0,
				width: sum += 600,
				height: sum2 += 600,
				'border-radius': radius +=300,
				top: top-=300,
				left: left -= 300
			}, 
			{duration: 600, complete:function(){
				$(this).remove();
			}}
		);

		i++;
}

// fade down lines
if(e.which===120){
	change= true;
		var sum1= sum;
		cir.animate({
			height: sum1 += 400,
			'border-radius': radius +=200
		},800
		);

		i++;
}

// fade up lines
if( e.which===122){
	change= true;
		var sumX= sum;
		cir.animate({
			top: top -= 400,
			height: sumX += 400,
			'border-radius': radius +=200
		},800
		);

		i++;
}

///move without effects
if( e.which===60){
	change= false;
	$(window).on('keyup',function(){
		change = true;
	})
}

// colorCirclesChainDelete
if(e.which===99){
		var sumT = sum;
		change = false;
		//appending indepently from the default circles
		div.appendTo(body);
		var cir = $('.circle' + i +'');
		cir.css({
		position: 'absolute',
		top: top,
		left: left,
		width: sum,
		height: sum,
		'border-radius': radius,
		'background-color': 'rgb('+ r +', '+ g +', '+ b +')'
		});

		cir.animate({
				width: sumT += 20,
				height: sumT,
				'border-radius': radius +=10,
				top: top-=10,
				left: left -= 10
			}, 
			{duration: 600, complete:function(){
				$(this).remove();
			}}
		);

		i++;
		//giving back default effect
		$(window).on('keyup',function(){
		change = true;
		})
}

//grayCirclesChain
if(e.which===97){
	var change2 = false;
	change =  false;

	body.on('mousemove', function(){

		posX2 = event.pageX;
		posY2 = event.pageY;
		velGray(posX2, posY2)
	});

	function velGray(posX2,posY2){
		var chX2 = posX2 - Xbefore;
		var chY2 = posY2 -Ybefore;
		chX2 = Math.abs(chX2);
		chY2 = Math.abs(chY2);
		var sum = chX2 + chY2;
		var radius2 = sum / 2;
		var top2 = posY2 - radius2;
		var left2 = posX2 -radius2;

		if(!change2){
		var div = $('<div class="circle' + i + '"></div>');
		
		div.appendTo(body);
		var cir = $('.circle' + i);
		cir.css({
		position: 'absolute',
		top: top2,
		left: left2,
		width: sum,
		height: sum,
		'border-radius': radius2,
		'background-color': 'rgb('+ gg +', '+ gg +', '+ gg +')'
		});

		//setting gray scale
		if(gg >= 0 && up == true && down== false){
			gg += 8;
		}else if(gg <= 248 && up== false && down == true){
			gg -= 8;
		}

		if(gg==0){
			up= true;
			down = false;
		}else if(gg==248){
			up = false;
			down = true;
		}	

	 	i++;
	 }
	}
	$(window).on('keyup',function(){
		change2 = true;
		change = true;
	})

}
//broken lines
if(e.which ===115){
	var line = $('<div class="line' + i + '"></div>');
	change= false;
	var time = 400;
	var ro = Math.floor(Math.random() * 255),
	 go = Math.floor(Math.random() * 255),
	  bo= Math.floor(Math.random() * 255);

	for(var o = 0; o <= 3; o ++){


		setTimeout(function(){
			line.appendTo(body);

			line.css({
				position: 'absolute',
				left: posX,
				top: 0,
				opacity: 100,
				width: 20,
				height: '900px',
				'background-color': 'rgb('+ ro +', '+ go +', '+ bo +')'
			});

			line.animate({
				width: 900,
				left: posX -= 440,
				opacity: 0
			}, {duration:300, complete: function(){
				$(this).remove();
			}});

			i++;
		}, time);
		time +=400;
	}

	$(window).on('keyup',function(){
		change2 = true;
		change = true;
	})
}    
	    console.log(e.which);
		console.log(e.charCode);


}); 

body.on('dblclick', function(){
	$(this).children().remove();
})

});

///out scope


function breakLine(){
	console.log('hola')
}