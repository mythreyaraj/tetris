var i=0;
var j=40;
var col=j/20;
var k=new Array(380,380,380,380,380,380,380,380,380,380);
var c;
var ctx;
window.onload=function(){
				c=document.getElementById("myCanvas");
		ctx=c.getContext("2d");
		fall();

	}
	function fall(){
			ctx.fillStyle="blue";
			ctx.rect(0+j,0+i,20,20);
			ctx.fillRect(0+j,0+i,19,19);
			/*ctx.beginPath();
			ctx.moveTo(0+j,0+i);
			ctx.lineTo(0+j,20+i);
			ctx.lineTo(20+j,20+i);
			ctx.lineTo(20+j,0+i);
			ctx.lineTo(0+j,0+i);
			ctx.fill*/											
			
	
		if(!(i==k[col])){
				setTimeout(function(){
					ctx.clearRect(0+j-1,0+i-1,21,21);		
					i+=20;
					fall();},75);
									
		}
		else{
			k[col]-=20;
			check();
		}	
	
}
function check(){
	//i=0;	
	clear();
	setTimeout(function(){i=0;},20);
	if(k[col]<=-20){
		
	}
	else{
		//random();
		fall();
	}
}
function left(){
	if(col>0&&k[col-1]>i){
	ctx.clearRect(0+j-1,0+i-1,21,21);
	col--;
	j=col*20;}
}
function right(){
	if(col<9&&k[col+1]>i){
		ctx.clearRect(0+j-1,0+i-1,21,21);
		col++;
		
		j=col*20;
	}
}
//var l=380;
function clear(){
	var count=0;
	var flag=0;
	for(count=0;count<10;count++){
		if(k[count]<380){
			flag++;
		}			
		//console.log("k="+k[count]);
	//	if(k[count]!=380)		
		//console.log(flag);		
	//	}
				
				
	}
//	console.log("&i="+i);
	if(flag==10){
		console.log("clearing");
		ctx.fillStyle="red";
		ctx.fillRect(0,i,200,20);
		var img=ctx.getImageData(0,0,200,i);
		ctx.putImageData(img,0,20);
	//	l-=20;
//		ctx.clearRect(0,i,200,20);
		for(count=0;count<10;count++)
		k[count]+=20;
		flag=0;	
	}
		
}
window.onkeydown=function(evt){
	
var code=evt.charCode?evt.charCode:evt.keyCode;
if(code==37)left();
if(code==39)right();
}




