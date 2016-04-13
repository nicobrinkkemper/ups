var kvpairs = [];
var form = document.querySelector('form');
for ( var i = 0; i < form.elements.length; i++ ) {
   var e = form.elements[i];
   kvpairs.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
}
console.log("I have copied:", kvpairs);