
const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  
const validatePass = (password) => {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return re.test(password);
}

const validateName = (name) => {
    return name.length > 3; 
}

const validateQuantity = (i) => {
    return Number.isInteger(i);
}

const validatePrice = (number) => {
    var re = /^\d{0,10}(?:\.\d{0,2}){0,1}$/;
    return re.test(number);
}

export {
    validateEmail,
    validatePass,
    validateName,
    validateQuantity,
    validatePrice
}

