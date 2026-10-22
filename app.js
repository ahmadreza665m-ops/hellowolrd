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


const weather= "regn"
switch (weather){
    case "regn":
        console.log("ta med paraply")
        break

        case "sol":
            console.log("glöm inte solglasögon")
            break
            
            case"snö":
            console.log("ta på dig varm jacka")
            break
            default: console.log("kolla vädret")
}

 for (let i = 1; i<6; i++) {
    console.log(i)

 }

 energi=3;
 while (energi>0) {
    console.log ("sprang ett varv" + energi)
    energi--
 }
 console.log("slut på energi")


 let elever= [
    {name:"anna", poang:85},
    { namne:"reza", poang:50},
    {nmae: "björn", poang:10},
 ]
 for(let i = 0; i < elever.length; i++){
    console.log(elever[i])
 }

 for (const elev of elever) {
    console.log(elev.name)
 }

 for (let i = 5; i>1; i--){
    if (i===3) {
      console.log(i+ "halvvägskvar")
    } else {
        console.log("sekunder kvar" +i)
    }
 }
 console.log
 