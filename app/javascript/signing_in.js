console.log("Signing in validator is running!")

//create_session_form
//create_user_form

if (document.getElementById("create_session_form")){
    console.log("signing in");
}

if (document.getElementById("create_user_form")){
    console.log("creating user");

    var input_validations = {
        "input1": [[CustomValidator.length_validator, [7,15]]],
        "input2": [[CustomValidator.length_validator, [8,15]],[CustomValidator.password_validator]],
        "input3": [[CustomValidator.identical_value, ["input2"]]]
    }

    window.addEventListener('load', function() {
        CustomValidator.create_custom_validator("create_user_form", "form-control-validated", input_validations)
    }, false);
}