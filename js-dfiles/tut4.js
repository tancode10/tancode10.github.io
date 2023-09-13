

function copytext(){
    document.getElementById('btn1').innerHTML='TEXT Copied!';
    navigator.clipboard.writeText(`
Hello, I am tancode . Please SUBDCRIBE the channel if you learn new from my videos.
`);
}


function copyhtml(){
    document.getElementById('btn2').innerHTML='HTML Copied!';
    navigator.clipboard.writeText(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>copy</title>
</head>
<body>
<h1>
Hello, I am tancode . Please SUBDCRIBE the channel if you learn new from my videos.

</h1>
</body>
</html>
`);
}


function copycss(){
    document.getElementById('btn3').innerHTML='CSS Copied!';
    navigator.clipboard.writeText(`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    p{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        font-size: 3rem;
        -webkit-text-stroke: 2px red;
    }
`);
}


function copyjs(){
    document.getElementById('btn4').innerHTML='JS Copied!';
    navigator.clipboard.writeText(`
    
var a=10;
var b='20 is greater than 10';
var c=20;

var d=1.2;

console.log(b);
console.log(c+d);
console.log(a+d);



`);
}