function F1()
{
	//alert("Sveiks!");
	var v=parseFloat(t1v.value);
	var w=v*3.6;
	s1.innerHTML="Ātrums [km/h] = "+w;
}

function F2()
{
	//alert("Sveiks!");	
	var a=parseFloat(t2v.value);
	var b=parseFloat(t3v.value);
	var m=b*100;
	if(a>m) s2. innerHTML=" a &gt; m";
	else if(a<m) s2. innerHTML=" m &lt; a";
	else s2. innerHTML=" a un m ir vienādi";
	
}
