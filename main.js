
document.querySelectorAll('[data-demo]').forEach(el=>{
 el.addEventListener('click',e=>{
  e.preventDefault();
  alert('Esta función está preparada para conectarla más adelante.');
 });
});
