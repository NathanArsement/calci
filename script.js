var sum=parseFloat(0);
function openCity(evt, cityName) {
    // Declare all variables
    var a, i, tabcontent, tablinks, event, eventcontent;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    eventcontent = document.getElementsByClassName("eventcontent");
    for (a = 0; a < eventcontent.length; a++) {
        eventcontent[a].style.display = "none";
    }
    event = document.getElementsByClassName("event");
    for (a = 0; a < event.length; a++) {
        event[a].className = event[a].className.replace(" activ", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
   
}



var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
    
}



// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
        
    }
    console.log(document.getElementById("myInput").value);
    sum=sum+parseFloat(document.getElementById("myInput").value);
    document.getElementById("SSUUMM").innerHTML=sum;
    
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            
            div.style.display = "none";
            console.log(div.innerHTML.replace("<span class=\"close\">×</span>",""));
            sum=sum-div.innerHTML.replace("<span class=\"close\">×</span>","");
            document.getElementById("SSUUMM").innerHTML=sum;
        }
    }
}
function SSum(){
    
    document.getElementById("SSUUMM").innerHTML=sum;
}
function openCalculator(){
    window.open("cal.html", "_self");
}