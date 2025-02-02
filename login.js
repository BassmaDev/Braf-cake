var loginIcon=document.getElementById('loginIcon');
var modal=document.getElementById('loginModal')
var closeButton=document.getElementsByClassName('close')[0];
var loginForm = document.getElementById('loginForm');
loginIcon.onclick = function(){
    modal.style.display = 'block';
}
closeButton.onclick= function(){
    modal.style.display='none';
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display='none';
    }
}
loginForm.onsubmit= function(event){
    event.preventDeflault();
    var username=document.getElementById('username').value;
    var password =document.getElementById('password').value;
    localStorage.setItem('username',username);
    localStorage.setItem('loggedIn','true');
    modal.style.display='none';
}