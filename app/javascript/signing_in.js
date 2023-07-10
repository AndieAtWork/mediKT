console.log("Signing in validator is running!")

//create_session_form
//create_user_form

$( document ).ready(function() {
	$('#create_session_form').bootstrapValidator({
		fields: {
			username: {
				message: 'El nombre de usuario no es valido',
				validators: {
					notEmpty: {
						message: 'El nombre de usuario es  necesario'
					}
				}
			},
			password: {
				validators: {
					notEmpty: {
						message: 'La contraseña es necesaria'
					}
				}
			},
		}
	});
});