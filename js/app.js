function render(evt){
  console.log('DOM Content Loaded');
  console.log(evt);

  let customEvent = new CustomEvent('customEvent', { detail: 30 });
  let event = new Event('build');
  let buttonDOMElement = document.querySelector('#buttonOne');

  var example_click_handler = function (ev){

    console.log(ev);

    // Dispatch Event
    ev.target.dispatchEvent(event);
    ev.target.dispatchEvent(customEvent);

    var objKind = (ev instanceof Event) ? "EventPrototype" : "ObjectPrototype";
    alert("We got a click event at " + ev.timeStamp + " with an argument object derived from: " + objKind );
  };
   
  buttonDOMElement.addEventListener('click', example_click_handler);

  // Listen for the event
  buttonDOMElement.addEventListener('build', function(evt){
    console.log(evt);
  });

  // Listen for an event with Data
  buttonDOMElement.addEventListener('customEvent', function(evt){
    console.log(evt);
  });
}

document.addEventListener('DOMContentLoaded', render);
