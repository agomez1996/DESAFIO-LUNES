function identidad(){
    var x = parseInt(document.getElementById("x").value);
    var rad = x*Math.PI/180;
    var a = Math.sin(rad)+Math.cos(rad);
    var iz = a*a;
    var iz1 = iz.toFixed(4);
    var b = 2*Math.sin(rad)*Math.cos(rad);
    var der = 1+b;
    var der1 = der.toFixed(4);
    document.getElementById('respa').innerHTML="La identidad evaluada con x = "+x+" es parte izquierda "+iz1+" , parte derecha  "+der1+""

    var left = (1-2*Math.cos(rad)-3*Math.pow(Math.cos(rad),2))/Math.pow(Math.sin(rad),2);
    var left1 = left.toFixed(4);
    var right = (1-3*Math.cos(rad))/(1-Math.cos(rad))
    var right1 = right.toFixed(4);
    document.getElementById('respb').innerHTML= "La identidad evalueada con x = "+x+" es parte izquierda "+left1+" , parte derecha "+right1+""
}
/*EJERCICIO 2 */
function evaluar(){ 
    var Anum = parseInt(document.getElementById('alphanum').value);
    var Aden = parseInt(document.getElementById('alphaden').value);
    var anguloA = Math.PI/Aden;

    var Bnum = parseInt(document.getElementById('betanum').value);
    var Bden = parseInt(document.getElementById('betaden').value);
    var anguloB = Math.PI/Bden;
    
    var iz = Math.tan(anguloA+anguloB);
    var iz1 = iz.toFixed(4);
    var der = (Math.tan(anguloA)+Math.tan(anguloB))/(1 - (Math.tan(anguloA)*Math.tan(anguloB)))
    var der1 = der.toFixed(4);

    document.getElementById('respuesta').innerHTML = "Parte izquierda "+iz1+" es igual a la parte derecha "+der1+"" 
}

/*JERCICIO 3*/
function calcular(){
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var P = Math.PI*(a+b)*(3-(Math.sqrt((3*a+b)*(a+3*b))/(a+b)));
    /*var sum = a+b;
    var mul = ((3*a)+b)*(a+(3*b));
    var raiz = Math.sqrt(mul);
    var P = (3.14*sum)*(3-(raiz/sum));*/

    document.getElementById('resp').innerHTML="El perimetro de la elipse con a ="+a+" y b ="+b+" es igual a "+P+""
}

/*EJERCICIO  4*/
function cubico(){
    var P = parseFloat(document.getElementById('P').value);
    var xi = (P*(Math.pow(P,3)+2*P))/(2*Math.pow(P,3)+P);
    for (n=1;n<=30;n++){
        var xip1 = xi*(Math.pow(xi,3)+2*P)/(2*Math.pow(xi,3)+P);
        if (Math.abs((xip1-xi)/xi)<0.00001){
            var QRT = xip1;
            var QRT1 = QRT.toFixed(4); 
            break
        }
        var xi = xip1;
    }
    document.getElementById('respu').innerHTML="la raiz cubica de "+P+" es "+QRT1+""
}

/*EJERICIO 5 */
function tiempo(){
    var ta = parseInt(document.getElementById('ta').value);
    var tb = parseInt(document.getElementById('tb').value);
    var Dg = 150;
    var Vd = 50;
    var C = Dg/Vd;
    var Ke = 0.4;
    var Ka = 1.6;
    var K = Ka/(Ka-Ke);
    var Con = C*K;
    for (i=0;i<=ta;i++){
        Cpa = Con*((Math.exp(-Ke*i)-Math.exp(-Ka*i)));
    }
    document.getElementById('respt').innerHTML="En el tiempo de "+ta+" horas,  el Cp es : "+Cpa+""

    var t = 0;
    while (t<=16){
    Cpb = Con*((Math.exp(-Ke*t)-Math.exp(-Ka*t)));
    var t = t+4
    }
    document.getElementById('resptb').innerHTML="En el tiempo de "+tb+" horas,  el Cp es "+Cpb+""
}

    
