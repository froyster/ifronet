/* 
 * Pagina creada por Javier Sánchez Sánchez.
 * para ponerse en contacto por email: javiersanchez.mlg@gmail.com
 * twitter: @froysterland.
 */

window.onload=function(){
    displayTime();
    
};
function displayTime() {
    var elt = document.getElementById("clock");  // Find element with id="clock"
    var now = new Date();                        // Get current time
    elt.innerHTML = now.toLocaleTimeString() + " <<>> " + now.toLocaleDateString();    // Make elt display it
    setTimeout(displayTime, 1000);               // Run again in 1 second
    
    }
    