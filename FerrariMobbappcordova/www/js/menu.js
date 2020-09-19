var urlBaseSite = ''
 
 $(document).ready(function() {
     $(".button-collapse").sideNav({
         menuWidth: 300,
     });

 });
 //likar botão em js
 var btn = document.querySelector('button[type="submit"]');
 btnSair.addEventListener('click', function() {
    window.location.href = urlBaseSite + 'index.html';
 });