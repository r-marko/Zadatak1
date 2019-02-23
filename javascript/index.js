
function showh3() {
    if (document.getElementsByClassName("Podnaslov")[0].style.display == "none") {
        document.getElementsByClassName("Podnaslov")[0].style.display = "block";
    } 
}

 
function hideh3() {
    if (document.getElementsByClassName("Podnaslov")[0].style.display != "none") { 
        document.getElementsByClassName("Podnaslov")[0].style.display = "none";
        }
}


function clickImage() {
    if (document.getElementsByTagName("ul")[0].style.display == "none") {
        document.getElementsByTagName("ul")[0].style.display = "inherit";
    } else if (document.getElementsByTagName("ul")[0].style.display != "none") {
        document.getElementsByTagName("ul")[0].style.display = "none";
    } else {
        document.getElementsByTagName("ul")[0].style.display = "inherit";
    }
    
}




function showh3Img2() {
    if (document.getElementsByClassName("Podnaslov")[1].style.display == "none") {
        document.getElementsByClassName("Podnaslov")[1].style.display = "block";
    } 
}

 
function hideh3Img2() {
    if (document.getElementsByClassName("Podnaslov")[1].style.display != "none") { 
        document.getElementsByClassName("Podnaslov")[1].style.display = "none";
        }
}


function clickImage2() {
    if (document.getElementsByTagName("ul")[1].style.display == "none") {
        document.getElementsByTagName("ul")[1].style.display = "inherit";
    } else if (document.getElementsByTagName("ul")[1].style.display != "none") {
        document.getElementsByTagName("ul")[1].style.display = "none";
    } else {
        document.getElementsByTagName("ul")[1].style.display = "inherit";
    }  
}

function showh3Img3() {
    if (document.getElementsByClassName("Podnaslov")[2].style.display == "none") {
        document.getElementsByClassName("Podnaslov")[2].style.display = "block";
    } 
}

 
function hideh3Img3() {
    if (document.getElementsByClassName("Podnaslov")[2].style.display != "none") { 
        document.getElementsByClassName("Podnaslov")[2].style.display = "none";
        }
}


function clickVideo() {
    if (document.getElementsByTagName("ul")[2].style.display == "none") {
        document.getElementsByTagName("ul")[2].style.display = "inherit";
    } else if (document.getElementsByTagName("ul")[2].style.display != "none") {
        document.getElementsByTagName("ul")[2].style.display = "none";
    } else {
        document.getElementsByTagName("ul")[2].style.display = "inherit";
    }  
}

function message() {
    alert("Izvinjavamo se, sajt je u postupku izrade.");
}