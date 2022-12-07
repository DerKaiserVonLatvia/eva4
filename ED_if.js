function F1()
{
	var a=parseFloat(t1a.value);
	var b=parseFloat(t1b.value);
	a=a*100; // metrus to cm//
	if(a>b) s1. innerHTML=" a &gt; b";
	else if(a<b) s1. innerHTML=" b &lt; a";
	else s1. innerHTML=" a un b ir vienādi";
	
	
}
function F2()
{
	var n1=parseFloat(t2n1.value);
	var n2=parseFloat(t2n2.value);
	var a=parseFloat(t2a.value);
	var n=0;
	if(a<500) {n=a*n1/100;}
	else {n=a*n2/100;}
	s2. innerHTML=" nodoklis n="+x;
	
}
function F3()
{
	var n1=parseFloat(t3n1.value);
	var n2=parseFloat(t3n2.value);
	var n3=parseFloat(t3n3.value);
	var a=parseFloat(t3a.value);
	var n=0;
	if(a<200) {n=a*n1/100;}
	else if (a<800) {n=a*n2/100;}
	else {n=a*n3/100;}
	s3. innerHTML=" nodoklis n="+x;
		
}
function F4()
{
	var a=parseFloat(t4a.value);
	var b=parseFloat(t4b.value);
	var c=parseFloat(t4c.value);
	if (a==0){s4.innerHTML= "Tas nav kv.vienādojums";}
	else{
		var d=b*b-4*a*c;
		if (d<0){s4.innerHTML="Sakņu nav (d<0)"; }
		else if (d==0){
			var x=-b/(2*a)
			s4. innerHTML=" ir viena sakne x="+x;
			
		}
		else{
			var x1=(-b-Math.sqrt(d))/(2*a);
			var x2=(-b+Math.sqrt(d))/(2*a);
			s4. innerHTML=" ir divas saknes :x1="+x1+",x2="+x2;
			
		}
	}
		
}
function F5() {
	
	var a=parseFloat(t5a.value);
	var b=parseFloat(t5b.value);
	var x="";
	if (a>0){
		x="x > "+b/a;
	}
	else if( x<0){
		x="x < "+b/a;
	}
	else if (x==0 && b>0)
	{
		x="x = NaN";
	}
	else if(x==0 && b<0){
		x="x = R";
		
	}
	s5. innerHTML=x;
	
}
function F6(){
	var r=parseFloat(t5a.value);
	var x1=parseFloat(t5b.value);
	var x2=parseFloat(t5a.value);
	var y1=parseFloat(t5b.value);
	var y2=parseFloat(t5a.value);
	
	
	
}



