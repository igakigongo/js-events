function render(evt){
  console.log('DOM Content Loaded');
  console.log(evt);
}

document.addEventListener('DOMContentLoaded', render);
