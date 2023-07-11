function CustomValidator(){
    
}

CustomValidator.create_custom_validator = function(form_id, input_class, input_validations){
    var inputs = document.getElementsByClassName(input_class)
    var validation = Array.prototype.filter.call(inputs, function(input) {
        input.addEventListener('blur', function(event) {
            // reset
            input.classList.remove('is-invalid')
            input.classList.remove('is-valid')
            input.classList.remove('form-control-status-active')
            input.classList.remove('form-control-status-inactive')

            var text_value = input.value;
            var validators = input_validations[input.id]

            var error_message = '';
            for  (var validator of validators){
                var result =  validator[0](text_value, validator[1])
                console.log(result);
                if (!result[0]){
                    error_message += result[1] + "\n";
                }
            }
            if (error_message != '') {
                input.classList.add('is-invalid');
                input.classList.add('form-control-status-inactive');
                document.getElementById(input.id + "-error").innerHTML = error_message;
            }
            else {
                input.classList.add('is-valid');
                input.classList.add('form-control-status-active'); 
                document.getElementById(input.id + "-error").innerHTML = '';
            }
        }, false);
    });

    // var form = document.getElementById(form_id);
    // form.addEventListener('submit', function(event) {
    //     console.log("submit")
    //     if (form.checkValidity() === false) {
    //         console.log("nothing happens?")
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }else{
    //         console.log("something happens")
    //     }
    //     form.classList.add('was-validated');
    // }, false);
}

CustomValidator.length_validator = function(text, params){
    var min_length = params[0];
    var max_length = params[1];
    if (text.length > max_length){
        return [false, "The length must be between " +  String(min_length) +" and " + String(max_length) + " characters."]
    }else if (text.length < min_length){
        return [false, "The length must be between " +  String(min_length) +" and " + String(max_length) + " characters."]
    }else{
        return [true];
    }
}

CustomValidator.password_validator = function(text){
    var has_upper_letters = false;
    var has_lower_letters = false;
    var has_numbers = false;
    for (var character of text){
        if (/^\d$/.test(character)){
            has_numbers = true;
        }
        if (/^[a-z]$/.test(character)){
            has_lower_letters = true;
        }
        if (/^[A-Z]$/.test(character)){
            has_upper_letters = true;
        }
    }
    if (has_lower_letters && has_upper_letters && has_numbers){
        return [true];
    }else{
        return [false, "Your password has to contain at least one lowercase character, one uppercase character and a number."];
    }
}

CustomValidator.identical_value = function(text, identical_id){
    var identical = document.getElementById(identical_id).value;
    if (text == identical){
        return [true];
    }else{
        return [false, "The two values are not identical."];
    }
}