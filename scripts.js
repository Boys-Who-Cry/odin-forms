const asideFormPassword = document.querySelector("#aside-form-password");
const asideFormConfirmPassword = document.querySelector("#aside-form-confirmPassword");
const asideFormButton = document.querySelector("#aside-form-submitBtn");
const submitForm = (event) => {
    event.preventDefault();
    if(asideFormPassword.value === asideFormConfirmPassword.value){
        asideFormPassword.classList.remove("error");
        asideFormConfirmPassword.classList.remove("error");
    }
}
asideFormButton.addEventListener("click", submitForm);