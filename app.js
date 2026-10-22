let age =16
let hasticket=false;
let withadult=true;

if (age>= 15 || hasticket===true || withadult===true ) {
    console.log("välkommen")
} else {
    console.log("köp biljett")
}


const isloggedin = true
const userrole = "admin"
if (isloggedin===true){
    if( userrole==="admin"){
        console.log("välkommen till admin");
    } else {
        console.log("välkommen vanlig användare")
    }
} else{
    console.log("du måste logga in först")
}

const traficlight= "röd"
switch (traficlight) {
    case"grön": 
    console.log("kör")
    break

    case "gul": 
    console.log("gör dig redo")
    break

    case "röd":  
     console.log("stanna")
         break

  default: console.log("okänd signal")  
}
