function F0()
{
	alert("Hi!");
};
function F1()
{
	var a=parseFloat(t1a.value);
	var b=parseFloat(t1b.value);
	var s=a*b;
	s1.innerHTML="s="+s;
}
function F2()
{
	var r=parseFloat(tr.value);
	var s=Math.PI*r*r;
	s2.innerHTML="s="+s;
	
}
function F3()
{
	var a=parseFloat(t1c.value);
	var b=parseFloat(t1h.value);
	var c=parseFloat(t1l.value);
	var s=(a+b+c)/2
	var area=Math.sqrt (s*(s-a)*(s-b)*(s-c))
	s2.innerHTML="s="+s;
	
}