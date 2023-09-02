

var search = document.getElementById('search');
search.addEventListener('click', function1);

function function1() {
    window.location = 'search.html';
}

function function2(){
    var bernard=document.getElementById('rich-1').innerHTML;
    var bill=document.getElementById('rich-2').innerHTML;
    var elon=document.getElementById('rich-3').innerHTML;

    var search2 = document.getElementById('search2').value;
    document.getElementById('user-give-input').innerHTML = `User Is Searching For : ${search2}`
    document.getElementById('user-give-input').style.display='flex';

    if(search2=='Bernard Arnault' || search2=='bernard arnault'){
    document.getElementById('user-get-output').style.display='flex';
    document.getElementById('user-get-output').innerHTML=`${bernard}`;

        
    }
    else if(search2=='Elon Musk' || search2=='elon musk'){
    document.getElementById('user-get-output').style.display='flex';
    document.getElementById('user-get-output').innerHTML=`${elon}`;

        
    }
    else if(search2=='Bill Gates' || search2=='bill gates'){
    document.getElementById('user-get-output').style.display='flex';
    document.getElementById('user-get-output').innerHTML=`${bill}`;

        
    }
    else{
        document.getElementById('user-give-input').innerHTML = `not found`
        document.getElementById('user-get-output').style.display='none';

    }
}
