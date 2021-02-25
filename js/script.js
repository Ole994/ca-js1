// //https://wger.de/api/v2/muscle/?format=json


const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#ffullName");
const fullNameError = document.querySelector("#fullNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector ("email");
const emailError = document.querySelector ("emailError");
const address = document.querySelector ("address");
const addressError = document.querySelector ("addressError");

function validateForm () {
  event.preventDefault();
  //-----------------------------------
if (checklength(fullName.value, 0)=== true){
  fullNameError.style.display = "none";
}
else{
  fullNameError.style.display = "block"
}
//---------------------------------------------
if (checklength(subject.value, 3)=== true){
  subjectError.style.display = "none";
}
else{
  subjectError.style.display = "block"
}
//----------------------------------------------
if (checklength(email.value,)=== true){
  subjectError.style.display = "none";
}
else{
  subjectError.style.display = "block"
}

//----------------------------------------------
if (checklength(address.value)=== true){
  subjectError.style.display = "none";
}
else{
  subjectError.style.display = "block"
}

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

console.log("hello");    
}

form.addEventListener("submit", validateForm);

function checkLength(value){
  if (value.trim().length > 0){
    return true;
  }
  else {
    return false;
  }
 }









//   if (fullName.value.trim().length > 0){
//     fullNameError.style.display = "none";
//   } else{
//     fullNameError.style.display = "block";
//   }
// //----------------------------------------------------------
//   if (subject.value.trim().length > 10){
//     subjectError.style.display = "none";
//   } else{
//     subjectError.style.display = "block";
//   }
// //--------------------------------------------------------------
//   if (email.value.trim().length > 10){
//     emailError.style.display = "none";
//   } else{
//     emailError.style.display = "block";
//   }
// //----------------------------------------------------------------
//   if (address.value.trim().length > 20){
//     subjectError.style.display = "none";
//   } else{
//     addressError.style.display = "block";
//   }







   



















  
    // Bringing information from this site
    // fetch('https://wger.de/api/v2/muscle/?format=json')
    // .then(response => response.json())
    // .then(data => console.log(data));


//     const url = 'https://wger.de/api/v2/muscle/?format=json';


//     const out = document.querySelector("div#container");

//  function listData(list){
//   out.innerHTML = "";
//   for (let item of list) {
//     console.log(item);
//     let newDiv = `<div>
//       <img src="${'https://wger.de' + item.image_url_main}" alt="${item.name}">
//       <h2>${item.name}</h2>
//       <p>From: ${item.id}</p>
//     </div>`;
//     out.innerHTML += newDiv;
//   }

// }

// function myFetch(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     //xhr.onload = function() { return resolve(xhr.responseText); };
//     xhr.onload = () => resolve(xhr.responseText);
//     //xhr.onerror = function() { return reject(xhr.statusText); };
//     xhr.onerror = () => reject(xhr.statusText);
//     xhr.send();
//   });
// }

// myFetch (url)
//   .then(data => JSON.parse(data).results)
//   .then(list => listData(list))
//   .catch(error => out.innerHTML = "Something's wrong!");
  




    