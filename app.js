function add(){
    var a1r1c1=Number(document.getElementById("a1r1c1").value)
    var a1r1c2=Number(document.getElementById("a1r1c2").value)
    var a1r2c1=Number(document.getElementById("a1r2c1").value)
    var a1r2c2=Number(document.getElementById("a1r2c2").value)

    var a2r1c1=Number(document.getElementById("a2r1c1").value)
    var a2r1c2=Number(document.getElementById("a2r1c2").value)
    var a2r2c1=Number(document.getElementById("a2r2c1").value)
    var a2r2c2=Number(document.getElementById("a2r2c2").value)

    var a3r1c1=document.getElementById("a3r1c1")
    var a3r1c2=document.getElementById("a3r1c2")
    var a3r2c1=document.getElementById("a3r2c1")
    var a3r2c2=document.getElementById("a3r2c2")
    a3r1c1.innerHTML=a1r1c1+a2r1c1
    a3r1c2.innerHTML=a1r1c2+a2r1c2
    a3r2c1.innerHTML=a1r2c1+a2r2c1
    a3r2c2.innerHTML=a1r2c2+a2r2c2
}


function sub(){
    var a1r1c1=Number(document.getElementById("a1r1c1").value)
    var a1r1c2=Number(document.getElementById("a1r1c2").value)
    var a1r2c1=Number(document.getElementById("a1r2c1").value)
    var a1r2c2=Number(document.getElementById("a1r2c2").value)

    var a2r1c1=Number(document.getElementById("a2r1c1").value)
    var a2r1c2=Number(document.getElementById("a2r1c2").value)
    var a2r2c1=Number(document.getElementById("a2r2c1").value)
    var a2r2c2=Number(document.getElementById("a2r2c2").value)

    var a3r1c1=document.getElementById("a3r1c1")
    var a3r1c2=document.getElementById("a3r1c2")
    var a3r2c1=document.getElementById("a3r2c1")
    var a3r2c2=document.getElementById("a3r2c2")
    a3r1c1.innerHTML=a1r1c1-a2r1c1
    a3r1c2.innerHTML=a1r1c2-a2r1c2
    a3r2c1.innerHTML=a1r2c1-a2r2c1
    a3r2c2.innerHTML=a1r2c2-a2r2c2
}

function mul(){
    var a1r1c1=Number(document.getElementById("a1r1c1").value)
    var a1r1c2=Number(document.getElementById("a1r1c2").value)
    var a1r2c1=Number(document.getElementById("a1r2c1").value)
    var a1r2c2=Number(document.getElementById("a1r2c2").value)

    var a2r1c1=Number(document.getElementById("a2r1c1").value)
    var a2r1c2=Number(document.getElementById("a2r1c2").value)
    var a2r2c1=Number(document.getElementById("a2r2c1").value)
    var a2r2c2=Number(document.getElementById("a2r2c2").value)

    var a3r1c1=document.getElementById("a3r1c1")
    var a3r1c2=document.getElementById("a3r1c2")
    var a3r2c1=document.getElementById("a3r2c1")
    var a3r2c2=document.getElementById("a3r2c2")
    a3r1c1.innerHTML=(a1r1c1*a2r1c1)+(a1r1c2*a2r2c1)
    a3r1c2.innerHTML=(a1r1c1*a2r1c2)+(a1r1c2*a2r2c2)
    a3r2c1.innerHTML=(a1r2c1*a2r1c1)+(a1r2c2*a2r2c1)
    a3r2c2.innerHTML=(a1r2c1*a2r1c2)+(a1r2c2*a2r2c2)
}


function div(){
    var a1r1c1=Number(document.getElementById("a1r1c1").value)
    var a1r1c2=Number(document.getElementById("a1r1c2").value)
    var a1r2c1=Number(document.getElementById("a1r2c1").value)
    var a1r2c2=Number(document.getElementById("a1r2c2").value)

    var a2r1c1=Number(document.getElementById("a2r1c1").value)
    var a2r1c2=Number(document.getElementById("a2r1c2").value)
    var a2r2c1=Number(document.getElementById("a2r2c1").value)
    var a2r2c2=Number(document.getElementById("a2r2c2").value)

    var a3r1c1=document.getElementById("a3r1c1")
    var a3r1c2=document.getElementById("a3r1c2")
    var a3r2c1=document.getElementById("a3r2c1")
    var a3r2c2=document.getElementById("a3r2c2")
    a3r1c1.innerHTML=a1r1c1/a2r1c1
    a3r1c2.innerHTML=a1r1c2/a2r1c2
    a3r2c1.innerHTML=a1r2c1/a2r2c1
    a3r2c2.innerHTML=a1r2c2/a2r2c2
}