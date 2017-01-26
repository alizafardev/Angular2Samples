import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    constructor() { }

    adminLogin(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(data => console.log('Student Signin successful'))
        .catch(function(error) {
            console.log(error);
        })
    }
}