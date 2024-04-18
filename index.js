// open menubar



function showMenubar() {
	document.getElementById('sublinks-2').style.display='grid';
	document.getElementById('menubar').style.display='none';
	document.getElementById('crossbar').style.display='flex';
	document.getElementById('content').style.display='none';
        document.getElementById('youtube-video').style.display='none';
        document.getElementById('bottom').style.display='none';








}

function hideMenubar() {
	document.getElementById('sublinks-2').style.display='none';
	document.getElementById('menubar').style.display='flex';
	document.getElementById('crossbar').style.display='none';
	document.getElementById('content').style.display='block';
        document.getElementById('youtube-video').style.display='flex';
        document.getElementById('bottom').style.display='grid';





}

// copy file 
// p1
var copyhtml1=document.getElementById('copyhtml-1');
copyhtml1.addEventListener('click',copyhtmldoc1);

var copyhtml2=document.getElementById('copyhtml-2');
copyhtml2.addEventListener('click',copyhtmldoc2);

var copycss=document.getElementById('copycss');
copycss.addEventListener('click',copycssdoc);







function copyhtmldoc1(){
	copyhtml1.style.color='black';
	copyhtml1.style.backgroundColor='white';
	copyhtml1.style.fontWeight='bolder';


	navigator.clipboard.writeText(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <div id="container">
        <input type="search" name="search" id="search" placeholder="Search Anything...">
        
    </div>
    <script src="index.js"></script>
</body>
</html>`);
}

function copyhtmldoc2(){
	copyhtml2.style.color='black';
	copyhtml2.style.backgroundColor='white';
	copyhtml2.style.fontWeight='bolder';


	navigator.clipboard.writeText(`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>search</title>
    <link rel="stylesheet" href="style.css">
   
</head>

<body>
    <input type="search" id="search2" placeholder="Search Anything..."  onsearch="function2()">
    <br><br><br><br>

    <div id="user-give-input">

    </div>
<br>

    <div id="user-get-output">
   
    </div>

    <div id="list">
        <div class="richman" id="rich-1">
            <img src="wrm-img/Bernard Arnault.avif" alt="" width="230" height="150">
            <h3>Bernard Arnault</h3>
        </div>
<br>
        <div class="richman" id="rich-2">
            <img src="wrm-img/Bill Gates.jpg" alt="" width="200" height="200">
            <h3>Bill Gates </h3>
        </div>
        <br>
        <div class="richman" id="rich-3">
            <img src="wrm-img/Elon musk.jpg" alt="" width="230" height="150">
            <h3>Elon Musk</h3>
                    </div>
    </div>
    <script src="index.js"></script>
</body>

</html>`);
}



function copycssdoc(){
	copycss.style.color='black';
	copycss.style.backgroundColor='white';
	copycss.style.fontWeight='bolder';


	navigator.clipboard.writeText(`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#container {
    border: 2px solid black;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#search {
    outline: none;
    font-size: larger;
    padding: 4px;
    width: 80vw;

}



#search2 {
    width: 100vw;
    outline: none;
    font-size: larger;
}

#list {
    padding: 5px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;

    display: none;
}

#user-get-output {
    padding: 5px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    display: none;

}

#user-give-input {
    padding: 5px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    display: none;

}


.richman {
    border: 2px solid black;

}`);

	}
