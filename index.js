// about
 // getting the skills set
 const titleDescs = document.getElementsByClassName('title_desc');
 const titleSetContents = document.getElementsByClassName('title_set_content');

 // using a function and for of loop to loop through the content when clicked
 function setTitle(contents){
     // removes the active page when new page is clicked
     for(titleDesc of titleDescs){
         titleDesc.classList.remove('active');
     }
     
     for(titleSetContent of titleSetContents){
         titleSetContent.classList.remove('first_content');
     }
     // adding event to add content to active page
     event.currentTarget.classList.add('active');
     document.getElementById(contents).classList.add('first_content');
 }

//  side-menu navigation
const sideMenu = document.getElementById('side-menu');
// opens the side menu when clicked
function openMenu(){
    sideMenu.style.right = '0';
}
// closes side menu when clicked
function closeMenu(){
    sideMenu.style.right = '-13rem';
}

// form validation

function validateForm() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const successMessage = document.getElementById('success-message');

    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    let isValid = true;

    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    }

    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!validateEmail(email.value)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    }

    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required';
        isValid = false;
    }

    if (isValid) {
        successMessage.innerHTML = 'Form submitted successfully!'
        setInterval(function(){
            successMessage.innerHTML = '';
        }, 7000)
        successMessage.style.display = 'block';
        return false; // Prevent actual form submission for this example
    } else {
        successMessage.style.display = 'none';
        return false;
    }
}

// using regex
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
         
// using emailjs to configure email when visitors check the site
function sendMail(){
    let serviceID = "service_nshb4v5";
    let templateID = "template_3mp2ie4";

    let data = {
        senderName: document.querySelector("#name").value,
        senderEmail: document.querySelector("#email").value,
        senderMessage : document.querySelector("#message").value
    };
    emailjs.send(serviceID,templateID,data).then(
    (response) => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
    )
   }