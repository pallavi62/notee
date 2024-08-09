var input=document.getElementById('box');
function getmsg(){
    document.getElementById('msg').innerHTML=input.value;
}
function resetmsg(){
    document.getElementById('msg').innerHTML=input.value;
    input.value="";
}
