
function clearTable(){
    console.log("clear clicked")
    var x = document.getElementsByTagName('td');
    for (var i=0;i<x.length;i++) {
        x[i].innerHTML = ''; 
    }
}

function submitTable(){
    console.log("Submit button clicked")
}

function validChar(){
    
}