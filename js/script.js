// //https://wger.de/api/v2/muscle/?format=json


const form = document.querySelector("#contactForm");
const name = document.querySelector("#fullName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const errorElment = document.querySelector ("error");


("click", function(event){
    event.preventDefault()
  });
        /* ... */
    


form.addEventListener("submit", (e) => {


      
    let messages = [];
        if (fullName.value === "" || fullName.value == null) {
            messages.push("Name is required");
        }

     //Tell the browser what need to be typed in
        if (fullName.value.length <0) {
            messages.push("your email must be longer than 6 characters");
        }

        if (subject.value.length <=10) {
            messages.push("your text must be longer than 20 characters");
           
        }

        if (email.value.length <= 6) {
            messages.push("your address must be longer than 25 characters");
        }
        if (address.value.length < 25) {
            messages.push("your address must be longer than 25 characters");
        }


        //if message = sent, display. else, error message
        message.innerHTML = 
        '<div id="message" class="message">Your message has been sent</div>';

//A code that prevents the page to load if the submit button is being pushed
 
        
    } 
    });

    //Bringing information from this site
    // fetch('https://wger.de/api/v2/muscle/?format=json')
    // .then(response => response.json())
    // .then(data => console.log(data));


    