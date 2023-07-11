console.log("Signing in validator is ridentical_idunning!")

//create_session_form
//create_user_form

if (document.getElementById("create_session_form")){
    console.log("signing in");

    var input_validations = {
        "input1": [
            {"validator": CustomValidator.not_empty, "params": {"message": "Enter a username."}}
        ],
        "input2": [
            {"validator": CustomValidator.not_empty, "params": {"message": "Enter a password."}}
        ]
    };
    window.addEventListener('load', function() {
        CustomValidator.create_custom_validator("create_session_form", "form-control-validated", input_validations)
    }, false);
}

if (document.getElementById("create_user_form")){
    console.log("creating user");

    var input_validations = {
        "input1": [
            {"validator": CustomValidator.length_validator, "params": {"min_length": 7, "max_length": 15}},
            {"validator": CustomValidator.name_validator, "params": {"spaces": true}}
        ],
        "input2": [
            {"validator": CustomValidator.length_validator, "params": {"min_length": 8, "max_length": 15}},
            {"validator": CustomValidator.password_validator}
        ],
        "input3": [
            {"validator": CustomValidator.identical_value, "params": {"identical_id": "input2"}},
            {"validator": CustomValidator.not_empty, "params": {"message": "Field cannot be left empty."}}
        ]
    };

    window.addEventListener('load', function() {
        CustomValidator.create_custom_validator("create_user_form", "form-control-validated", input_validations)
    }, false);
}