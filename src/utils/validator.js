/* import {validation} from 'input-validator-node';
 */
class Validator {
    /* constructor() {} */

    size(str) { 
        if(str === null) {
            return 0;
        } else {
            return str.length; 
        } 
    }

    isEmpty(str) { 
        return (str.length === 0) 
    }//or ==

    isValidEmail(email) {
        if(email !== null && email.includes("@") && email.includes(".")) {
            return true;
        } else {
            return false;
        }
    }

    //Check if password conatains uppercase, characters like @ # % $ _ ), numbers

/*     isValidPassword(password) { 
        let count = 0
        let containsUpperCase = false
        let containsNumber = false

        while(count < password.length) {
            if (!isNaN(password[count] * 1)) {
                containsNumber = true
            } else if(password[count] === password[count].toUpperCase()) {
                containsUpperCase = true
            }
        }
        
        if(password.length <= 7) {
            return false
        } else if (containsUpperCase && containsNumber) {
            return true
        } 
    } */

    isValidPassword(password) { 
        if(password !== null && password.length > 7) {
            return true;
        } else {
            return false; 
        }
    }

    isValidName(name) { return name !== null && name.length > 5; }

    match(str1, str2) { 
        if(str1 !== null && str2 !== null && str1 === str2) {
            return true;
        } else {
            return false;
        }
        
    }

    empty_field_msg() {
        return "Please fill out all the form";
    }

    emailError() {
        return "The email is not valid";
    }

    passwordError() {
        return "Password must contain at least an uppercase letter and a number"
    }

    existing_email() {
        return "The email entered already exits";
    }

    password_mismatch_error() {
        return "The passwords do not match";
    }
}

export default Validator;