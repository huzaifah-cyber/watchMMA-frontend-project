//mapping the output and form IDs to JS variables
const output = document.getElementById("output");
const form = document.getElementById("webForm");
const validation = document.getElementById("validation-status");

// Handles form submission and prevents the default page reload

form.addEventListener("submit", (e) =>
{
    e.preventDefault();

    // Getting all elements that are not radio or checkboxes 
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const organization = document.getElementById("fav-organization");
    const reason = document.getElementById("contact-reason");
    const message = document.getElementById("message");

    // Assigning radio and checkboxes to variables

    const radios = document.getElementsByName("membership");

    let membership = "";

    for (let i=0; i<radios.length; i++){
        if(radios[i].checked){
            membership = radios[i].value;
            break;
        }

    }
    console.log("Membership: ", membership);

    const interests = document.getElementsByName("interests");

    const interest = [];

    for (let i=0; i<interests.length; i++){
        if(interests[i].checked){
            interest.push(interests[i].value);
        }
    }
    // isValid is true which means all entries are assumed to be valid
    let isValid = true;

    // Clears all the previous error messages inside <span> or <p>
    validation.textContent = "";
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("organization-error").textContent = "";
    document.getElementById("membership-error").textContent = "";
    document.getElementById("reason-error").textContent = "";
    document.getElementById("message-error").textContent = "";
    document.getElementById("validation-status").textContent = "";

    // Clears previous custom validation errors
    fullName.setCustomValidity("");

    // Rejects names containing only whitespace
    if (fullName.value.trim() === "" && fullName.value !== "") {
        fullName.setCustomValidity(
        "Your name cannot be spaces only, you must enter some text."
        );
    }


    // Function to check the almost all submission validity through JS functions
    if (!fullName.checkValidity()) {
        document.getElementById("name-error").textContent = fullName.validationMessage;

        isValid = false;
    }

    if (!email.checkValidity()) {
        document.getElementById("email-error").textContent =
            "Please enter a valid email containing @";

        isValid = false;
    }

    if (!organization.checkValidity()) {
        document.getElementById("organization-error").textContent =
            "Please enter a valid organization name with English Letters only.";

        isValid = false;
    }

    if (!radios[0].checkValidity()) {
        document.getElementById("membership-error").textContent =
            "Please select one membership choice.";

        isValid = false;
    }

    if (!reason.checkValidity()) {
        document.getElementById("reason-error").textContent =
            "Please select a contact reason from the dropdown menu.";

        isValid = false;
    }

    if (!message.checkValidity()) {
        document.getElementById("message-error").textContent =
            "Please enter a message between 10 and 300 characters.";

        isValid = false;
    }

    if(isValid===false){
        validation.textContent = "Form submission failed! Please correct the errors above.";
        validation.className = "error";
        return;
    }
    else{
        validation.textContent = "Form submission successful! We will get back to you shortly.";
        validation.className = "pass";
    }



    document.getElementById("h3-output").style.display = "block";
    output.textContent =
            "Full Name: " + fullName.value + "\n" +
            "Email: " + email.value + "\n" +
            "Favourite Organization: " + (organization.value || "Not specified") + "\n" +
            "Membership Type: " + membership + "\n" +
            "Interests: " + (interest.join(", ") || "None") + "\n" +
            "Reason for contacting: " + reason.value + "\n" +
            "Message: " + message.value;  

    console.log("Form data displayed successfully.");
});

// Clears previous results when the form is reset
form.addEventListener("reset", function () {
    output.textContent = "";
    document.getElementById("h3-output").style.display = "none";
});



