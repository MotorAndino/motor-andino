
document.querySelectorAll('[data-demo]').forEach(el=>{
  el.addEventListener('click',e=>{
    e.preventDefault();
    alert('Función de demostración. Puedes reemplazarla por una función real más adelante.');
  });
});
