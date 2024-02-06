// function nameValidation(){
//     const fname= document.querySelector(".name").value;
//     const nameError=document.getElementById("nameError");
//     const nameReg=/^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
//     const verifyNameValidation=nameReg.test(fname);
//     if(verifyNameValidation){
//         nameError.innerHTML="Looks Good";
//     }else{
//         nameError.innerHTML="Invalid Name";
//     }
//     return verifyNameValidation
// }

// // function emailValidation(){
// //     const email= document.querySelector(".email").value;
// //     const emailError=document.getElementById("emailError");
// //     const emailReg=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// //     const verifyEmailValidation=emailReg.test(email);
// //     if(verifyEmailValidation){
// //         emailError.innerHTML="Looks Good";
// //     }else{
// //         emailError.innerHTML="Invalid Email";
// //     }
// //     return verifyEmailValidation
// // }


// // function phoneValidation(){
// //     const phone= document.querySelector(".phone").value;
// //     const phoneError=document.getElementById("phoneError");
// //     const phoneReg=/^[6-9]{1}[0-9]{9}$/;
// //     const verifyPhoneValidation=phoneReg.test(phone);
// //     if(verifyPhoneValidation){
// //         phoneError.innerHTML="Looks Good";
// //     }else{
// //         phoneError.innerHTML="Invalid Phone Number";
// //     }
// //     return verifyPhoneValidation
// // }

// // function dateValidation(){
// //     const date= document.querySelector(".date").value;
// //     const dateError=document.getElementById("dateError");
// //     const dateReg=/^(19[5-9]\d|200\d|2010)[\/\-](0[1-9]|1[012])[\/\-](0[1-9]|[12][0-9]|3[01])$/;
// //     const verifyDateValidation=dateReg.test(date);
// //     if(verifyDateValidation){
// //         dateError.innerHTML="Looks Good";
// //     }else{
// //         dateError.innerHTML="Invalid Date [1950 -2010 only]";
// //     }
// //     return verifyDateValidation
// // }


// // function usernameValidation(){
// //     let data= null;
// //     const username= document.querySelector(".username").value;
// //     if(localStorage.getItem("base_storage")){
// //         data = JSON.parse(localStorage.getItem("base_storage"))
// //         data.map(user =>{
// //             if(user.username === username){
// // //                 // usernameError(document.querySelector(".username"),'username already present');
// // //                 // return false;
// // //                 usernameError.innerHTML="username already present";
// // //             }else if(user.username <3){
// // //                 usernameError.innerHTML="Too short username";
// // //             }else if(user.username >15){
// // //                 usernameError.innerHTML="Too long username";
// // //             }
// // //         })
// // //     }}


// // // Function to initialize localStorage with dummy data
// // function initializeLocalStorage() {
// //     const dummyData = [
// //         { username: "user1" },
// //         { username: "user2" },
// //         // Add more dummy data as needed
// //     ];

// //     localStorage.setItem("base_storage", JSON.stringify(dummyData));
// // }

// // // Call the function to initialize localStorage
// // initializeLocalStorage();

// // function usernameValidation() {
// //     const username = document.querySelector(".username").value;
// //     const usernameError = document.querySelector(".usernameError");

// //     if (localStorage.getItem("base_storage")) {
// //         const data = JSON.parse(localStorage.getItem("base_storage"));

// //         const existingUser = data.find(user => user.username === username);

// //         if (existingUser) {
// //             usernameError.innerHTML = "Username already present";
// //         } else if (username.length < 3) {
// //             usernameError.innerHTML = "Too short username";
// //         } else if (username.length > 15) {
// //             usernameError.innerHTML = "Too long username";
// //         } else {
// //             // Reset error message if username is valid
// //             usernameError.innerHTML = "";
// //         }
// //     }
// // }
// // Function to initialize localStorage with dummy data

// // Function to handle form submission
// // 
// function handleSubmit(e) {
//     e.preventDefault();
//     if (passwordValidation()) {
//         updateLocalStorage();
//         // Proceed with form submission or any other logic here
//         console.log("Form submitted successfully");
//     } else {
//         console.log("Form not submitted due to validation errors");
//     }
// }
// function updateLocalStorage() {
//     const username = document.querySelector(".username").value;
//     const data = JSON.parse(localStorage.getItem("base_storage")) || [];

//     // Check if the username is already present
//     const existingUser = data.find(user => user.username === username);

//     if (!existingUser) {
//         // Add the new user to the data array
//         data.push({ username: username });

//         // Update the local storage
//         localStorage.setItem("base_storage", JSON.stringify(data));
//     }
// }

// function initializeLocalStorage() {
//     const existingData = localStorage.getItem("base_storage");

//     if (!existingData) {
//         const dummyData = [
//             { username: "user1" },
//             // { username: "user2" },
//             // Add more dummy data as needed
//         ];

//         localStorage.setItem("base_storage", JSON.stringify(dummyData));
//     }
// }

// initializeLocalStorage();

// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit);

// function usernameValidation() {
//     const username = document.querySelector(".username").value;
//     const usernameError = document.querySelector(".usernameError");

//     if (localStorage.getItem("base_storage")) {
//         const data = JSON.parse(localStorage.getItem("base_storage"));

//         const existingUser = data.find(user => user.username === username);

//         if (existingUser) {
//             usernameError.innerHTML = "Username already present";
//             return false;
//         } else if (username.length < 3) {
//             usernameError.innerHTML = "Too short username";
//             return false;
//         } else if (username.length > 15) {
//             usernameError.innerHTML = "Too long username";
//             return false;
//         } else {
//             // Reset error message if username is valid
//             usernameError.innerHTML = "";

//             // Add the new user to the data array
//             data.push({ username: username });

//             // Update the local storage
//             localStorage.setItem("base_storage", JSON.stringify(data));

//             return true; // Username is valid
//         }
//     }

//     return false; // In case local storage is not available
// }

function passwordValidation(){
    const password= document.querySelector(".password").value;
    const passwordError=document.getElementById("passwordError");
    const passwordReg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const verifyPasswordValidation=passwordReg.test(password);
    if(verifyPasswordValidation){
        passwordError.innerHTML="Looks Good";
    }else{
        passwordError.innerHTML="Invalid Password";
    }
    return verifyPasswordValidation
}

function  PANValidation(){
    const PAN= document.querySelector(".PAN").value;
    const PANError=document.getElementById("PANError");
    const PANReg=/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const verifyPANValidation=PANReg.test(PAN);
    if(verifyPANValidation){
        PANError.innerHTML="Looks Good";
    }else{
        PANError.innerHTML="Invalid PAN";
    }
    return verifyPANValidation
}

function genderValidation() {
    const genderSelect = document.querySelector(".gender");
    const genderError = document.getElementById("genderError");
    
    const selectedGender = genderSelect.value;
    
    const isValid = selectedGender !== "";

    if (isValid) {
        genderError.innerHTML = "Looks Good";
    } else {
        genderError.innerHTML = "Please select a gender";
    }

    return isValid;
}

function educationValidation() {
    const educationSelect = document.querySelector(".education");
    const educationError = document.getElementById("educationError");
    
    const selectedEducation = educationSelect.value;
    
    const isValid = selectedEducation!== "";

    if (isValid) {
        educationError.innerHTML = "Looks Good";
    } else {
        educationError.innerHTML = "<p class='error'>Please select an education</p>";
    }

    return isValid;
}

function photoValidation() {
    const photoInput = document.getElementById("photo");
    const photoError = document.getElementById("photoError");

    if (photoInput.files.length > 0) {
        const selectedPhoto = photoInput.files[0];
        const allowedTypes = ["image/jpeg", "image/png"];
        const maxSizeMB = 2;

        if (allowedTypes.includes(selectedPhoto.type)) {
            if (selectedPhoto.size / (1024 * 1024) <= maxSizeMB) {
                // Convert the selected photo to base64
                const reader = new FileReader();
                reader.onload = function (e) {
                    const base64Photo = e.target.result;
                    // Store the base64-encoded photo in local storage
                    localStorage.setItem("base64_photo", base64Photo);
                    // Display a success message or perform other actions
                    photoError.innerHTML = "<p class='error'>Photo is valid and stored in local storage</p>";
                };
                reader.readAsDataURL(selectedPhoto);
            } else {
                // Photo size exceeds 2 MB
                photoError.innerHTML = "<p class='error'>Photo size should be less than 2 MB</p>";
                // Reset the input value to clear the invalid selection
                photoInput.value = "";
            }
        } else {
            // Invalid file type
            photoError.innerHTML = "<p class='error'>Please select a valid JPEG or PNG image</p>";
            // Reset the input value to clear the invalid selection
            photoInput.value = "";
        }
    } else {
        // No file selected
        photoError.innerHTML = "<p class='error'>Please select a photo</p>";
    }
}
