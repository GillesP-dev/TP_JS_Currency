var myHeaders = new Headers();
let valuSelectionne;
let elem;
let selecMoney; 
let elem2;
let selecMoney2;
let amount;
let valeurSaisie;
let tabSymboles;

myHeaders.append("apikey", "swHcQL54UGDL5sR1Oc47m56MCEj6n0wg");
let input = document.querySelector(".containerNomb #devis1");
const premListe = document.querySelector(".container .containerMoney #pays1");
const premListe2 = document.querySelector(".container .containerMoney #pays2");
let affichage = document.querySelector(".containerNomb #affichage")
console.log(affichage);

function getvalue() { amount = input.value; };

function myFunction() {
  elem.forEach(element=>{
      element.addEventListener("click", e =>{
          selecMoney = e.target.getAttribute("value");
      });
  })
  elem2.forEach(element=>{
    element.addEventListener("click", e =>{
        selecMoney2 = e.target.getAttribute("value");
    });
})

}

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/fixer/symbols?", requestOptions)
  .then(Response => Response.json())
  .then(result => {
   tabSymboles = result.symbols;
    for (prop in tabSymboles) {
      let newOption = document.createElement("option");
      newOption.setAttribute("value",prop);
      newOption.setAttribute("class","dropDown");
      newOption.textContent = prop+":"+tabSymboles[prop];
      premListe.append(newOption);
       let newOption2 = document.createElement("option");
      newOption2.setAttribute("value",prop);
      newOption2.setAttribute("class","dropDown2");
      newOption2.textContent = prop+":"+tabSymboles[prop];
      premListe2.append(newOption2);
     
 }
 elem = document.querySelectorAll(".dropDown");
 elem2 = document.querySelectorAll(".dropDown2");
  myFunction();
  
  // valuSelectionne = premListe.options[premListe.selectedIndex].value; 
  // console.log(valuSelectionne);
  })
  .catch(error => console.log('error', error));

  input.addEventListener("keyup",(e) =>{
    if (e.keyCode == 13){
      getvalue();
      affichage.value = "en calcule";
      fetch(`https://api.apilayer.com/fixer/convert?to=${selecMoney2}&from=${selecMoney}&amount=${amount}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result.result);
          affichage.value = result.result;
          
        })
        .catch(error => console.log('error', error));
      
    }



  })

  

  

 
  
    
 

  
  
  