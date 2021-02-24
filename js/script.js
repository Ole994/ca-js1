// //https://wger.de/api/v2/muscle/?format=json


// const form = document.querySelector("#contactForm");
// const fullName = document.querySelector("#ffullName");
// const fullNameError = document.querySelector("#fullNameError");
// const subjectError = document.querySelector("#subject");
// const addressError = document.querySelector("#subjectError");
// const email = document.querySelector ("email");
// const emailError = document.querySelector ("emailError");

// function validateForm () {
//     event.preventDefault();



//     if (checklength(fullName.value, 5) ===true){
//         fullNameError.style.display = "none";
//     }
//     else{ 
//         fullNameError.style.display = "block";
//     }
// //--------------------------------------------------

//     if (checklength(subject.value,10) ===true){
//         subjectError.style.display = "none";
//     }
//     else{ 
//         subjectError.style.display = "block";
//     }
// //-----------------------------------------------------------------
//     //-----------------------------------------------

//     if (checklength(email.value,0) ===true){
//         emailError.style.display = "none";
//     }
//     else{ 
//         emailError.style.display = "block";
//     }

//     if (checklength(address.value,15) ===true){
//         addressError.style.display = "none";
//     }
//     else{ 
//     addressError.style.display = "block";
// }

// form.addEventListener ("submit", validateForm);
// }





//-----------------------------------------------------------------

// function checklength (value, len){
//     if (value.trim().length > len) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }



// function validateEmail(email){
//     const regEx = /\S+@\S+\.\S+/;
//     const patternMatches = regEx.test(email);
//     return patternMatches;
// }



// form.onsubmit = function (){
//     event.preventDefault();
//     console.log (event)
//     console.log (name.value);
// }
        
  
    // Bringing information from this site
    // fetch('https://wger.de/api/v2/muscle/?format=json')
    // .then(response => response.json())
    // .then(data => console.log(data));


    const url = 'https://wger.de/api/v2/muscle/?format=json';


    const out = document.querySelector("div#container");

 function listData(list){
  out.innerHTML = "";
  for (let item of list) {
    //console.log(item);
    let newDiv = `<div>
      <img src="${item.image}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>From: ${item.id}</p>
    </div>`;
    out.innerHTML += newDiv;
  }
}

function myFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    //xhr.onload = function() { return resolve(xhr.responseText); };
    xhr.onload = () => resolve(xhr.responseText);
    //xhr.onerror = function() { return reject(xhr.statusText); };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

myFetch (url)
  .then(data => JSON.parse(data).id)
  .then(list => listData(list))


    