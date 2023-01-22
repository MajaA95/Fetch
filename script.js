const url = "https://swapi.dev/api/people/1"

addEventListener("click", function(){
    fetch(url)              //Request do link
    .then(data =>{          //Se kreira VAR sto konvertira vo JSON
        data.json()         //Od site podatoci da isfiltrira samo JSON od server
        .then(parsedData=>{             //od koga ke se obraboti json VAR za gotov object so koj rabotime
            console.log(parsedData); //
            document.getElementById("firstName").innerHTML=parsedData.name; 
            document.getElementById("height").innerHTML=parsedData.height;
            document.getElementById("mass").innerHTML=parsedData.mass;
            document.getElementById("eyecolor").innerHTML=parsedData.eye_color;
            document.getElementById("haircolor").innerHTML=parsedData.hair_color;
          })
           })
    .catch(e =>{
        console.log(e);
    })
})




