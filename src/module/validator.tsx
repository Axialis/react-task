import jsonSchema from "../assets/json/schema.json"
import store from "../store";

export function validationName(name: string) {
    if (!JSON.parse(JSON.stringify(jsonSchema)).firstName.required) {
        return true;
    }
    return (name.length > 1 && name.length < 31) ? true : false
}

export function validationPassword(pass: string) {
    if (!JSON.parse(JSON.stringify(jsonSchema)).password.required) {
        return true;
    }
    return (pass.length < 8 && pass.length > 20) ? false : true;
}

export function validationAge(data: string) {
    if (!JSON.parse(JSON.stringify(jsonSchema)).birthday.required) {
        return true;
    }
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dob = new Date(data);
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    let age;
    age = today.getFullYear() - dob.getFullYear();
    if (today < dobnow) {
        age = age - 1;
    }
    return (age > 17 && age < 91) ? true : false;
}

export function validationPasswordMatching(pass: string, repeatPass: string) {
    if (!JSON.parse(JSON.stringify(jsonSchema)).password.required) {
        return true;
    }
    return pass !== repeatPass ? false : true;
}

export function validationPhone(phone: string) {
    if (!JSON.parse(JSON.stringify(jsonSchema)).mobilePhone.required) {
        return true;
    }
    const mask = JSON.parse(JSON.stringify(jsonSchema)).mobilePhone.regExp;
    return phone.match(mask) ? true : false;
}

export function validationEmail(mail: string) {
    if (!JSON.parse(JSON.stringify(jsonSchema)).email.required) {
        return true;
    }
    const mask = JSON.parse(JSON.stringify(jsonSchema)).email.regExp;
    return mail.match(mask) ? true : false;
}

export function validationHobby() {
    if (!JSON.parse(JSON.stringify(jsonSchema)).hobby.required) {
        return true;
    }
    return store.getState().hobby.length ? true : false;
}

export function validationSex() {
    if (!JSON.parse(JSON.stringify(jsonSchema)).sex.required) {
        return true;
    }
    return store.getState().sex.length ? true : false
}

export function validationOcean() {
    if (!JSON.parse(JSON.stringify(jsonSchema)).ocean.required) {
        return true;
    }
    return store.getState().ocean.length ? true : false
}