const Validator = require("./validator");

module.exports = class ValidatorHelper {
    constructor(inputField) {
        this.name = new Validator(inputField.name);
        this.email = new Validator(inputField.email);
        this.pw1= new Validator(inputField.password1);
        this.pw2 = new Validator(inputField.password2);  
    }

    isValid() {
        /* if((this.name).isEmpty() || (this.email).isEmpty() || (this.pw1).isEmpty() || (this.pw2).isEmpty()) {
            return {
              error_msg: this.name.empty_field_msg(),
              type: "Empty Fields",
              valid: false
            };
        } else  */if(this.name != null && this.name.size() < 4){
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
        } else if(this.pw1.size() < 7){
          return {
            error_msg: 'The password length must be at least 8 characters',
            type: "Invalid password",
            valid: false
          };
        } else if(this.pw2.size() < 7){
          return {
            error_msg: 'The password length must be at least 8 characters',
            type: "Invalid Password2",
            valid: false
          };
        } else if(this.pw1 !== null && this.pw2 !== null && this.pw1.get() !== this.pw2.get()) {
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

//module.exports = ValidatorHelper;