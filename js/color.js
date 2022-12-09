function color(value){
    switch(value){
        case "rojo": 
            document.body.style.background = "#facfdd";
            document.getElementById("container").style.background = "#fc9292";
        break;
        case "amarillo":
            document.body.style.background = "#fcfcd2";
            document.getElementById("container").style.background = "#fafaa2";
        break;
        case "verde":
            document.body.style.background = "#d4fae5";
            document.getElementById("container").style.background = "#94f2bd";
        break;
        case "azul":
            document.body.style.background = "#c7d8fc";
            document.getElementById("container").style.background = "#a0bdfa";
        break;
        case "morado":
            document.body.style.background = "#dfc7fc";
            document.getElementById("container").style.background = "#c59cf7";
        break;
    }
}