 $(document).ready(function() {
     $(".button-collapse").sideNav({
         menuWidth: 300,
     });

 });
 //likar botão em js
 var btn = document.querySelector('button[type="submit"]');
 btnSair.addEventListener('click', function() {
     window.location = 'http://127.0.0.1:5500/www/index.html';
 });