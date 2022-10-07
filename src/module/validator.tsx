import jsonSchema from "../assets/json/schema.json"
import store from "../store";

export function validationName(name: string) {
    return (name.length > 1 && name.length < 31) ? true : false
}

export function validationPassword(pass: string) {
    return (pass.length < 8 && pass.length > 20) ? false : true;
}

export function validationAge(data: string) {
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
    return pass !== repeatPass ? false : true;
}

export function validationPhone(phone: string) {
    const mask = JSON.parse(JSON.stringify(jsonSchema)).mobilePhone.regExp;
    return phone.match(mask) ? true : false;
}

export function validationEmail(mail: string) {
    const mask = JSON.parse(JSON.stringify(jsonSchema)).email.regExp;
    return mail.match(mask) ? true : false;
}

export function validationHobby() {
     return store.getState().hobby.length ? true : false;
}

export function validationSex() {
    return store.getState().sex.length ? true : false
}

export function validationOcean() {
    return store.getState().ocean.length ? true : false
}