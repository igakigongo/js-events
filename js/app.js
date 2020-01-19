function render(evt){
  console.log('DOM Content Loaded');
  console.log(evt);
  
  let buttonDOMElement = document.querySelector('#buttonOne');

  var example_click_handler = function (ev){

    console.log(ev);

    var objKind = (ev instanceof Event) ? "EventPrototype" : "ObjectPrototype";
    alert("We got a click event at " + ev.timeStamp + " with an argument object derived from: " + objKind );
  };
   
  buttonDOMElement.addEventListener('click', example_click_handler);
}

document.addEventListener('DOMContentLoaded', render);
