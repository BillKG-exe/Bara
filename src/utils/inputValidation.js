//const validation = require('input-validator-node');

class Validator {
    constructor(str) {
        this.str = str;
        console.log(this.str)
    }

    set(str) { this.str = str; }

    get() { return this.str; }

    size() { return this.str.length; }

    isEmpty() { return (this.str.length === 0) }//or ==

/*     isValidEmail() {
        const validator = new validation({email: this.str}, {
            email: 'required|email',
        });
    
        return validator.check();
    } */

    isValidPassword() {
        if(this.str.length > 8)
            return true;
        else
            return false;
            //Check if password conatains uppercase, characters like @ # % $ _ ), numbers
    }

    isValidName() { return this.str.length > 5; }

    match(str) { return this.str === str }

    empty_field_msg() {
        return "Please fill out all the form";
    }

    emailError() {
        return "The email is not valid";
    }

    existing_email() {
        return "The email already exits";
    }

    password_mismatch_error() {
        return "The passwords does not match";
    }
}

module.exports = class ValidatorHelper {
    constructor(inputField) {
        this.name = new Validator(inputField.name);
        this.email = new Validator(inputField.email);
        this.pw1= new Validator(inputField.password1);
        this.pw2 = new Validator(inputField.password2);  
        console.log(inputField);
    }

    isValid() {
        if((this.name).isEmpty() || (this.email).isEmpty() || (this.pw1).isEmpty() || (this.pw2).isEmpty()) {
            return {
              error_msg: this.name.empty_field_msg(),
              type: "Empty Fields",
              valid: false
            };
        } else if(this.name.size() < 5){
          return {
            error_msg: "Name must be at least 5 characters",
            type: "name",
            valid: false
          }
        } else if(!this.email.isValidEmail()) {
            return {
              error_msg: this.name.emailError(),
              type: "Invalid Email",
              valid: false
            };
        } else if(this.pw1.size() < 8){
          return {
            error_msg: 'The password length must be at least 8 characters',
            type: "Invalid password",
            valid: false
          };
        } else if(this.pw2.size() < 8){
          return {
            error_msg: 'The password length must be at least 8 characters',
            type: "Invalid password",
            valid: false
          };
        } else if(!this.pw1.match(this.pw2.get())) {
            return {
              error_msg: this.name.password_mismatch_error(),
              type: "Unmatching Password",
              valid: false
            };
        } 
        return {
            error_msg: 'null',
            type: "success",
            valid: true
          };
    }
}

