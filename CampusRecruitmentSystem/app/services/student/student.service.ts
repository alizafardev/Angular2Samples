import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AngularFireAuth } from 'angularfire2';

@Injectable()
export class StudentService {
    constructor(private af: AngularFire, private afAuth: AngularFireAuth) {}
    
    createAccount(value){
       console.log(' Student RD created');
       var students =  firebase.database().ref().child('students').push(value);
    }

    sSignup(email, password){
       firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(data => console.log('Student Signup successful'))
        .catch(function(error) {
    console.log(error);
    });
    }

    sSignin(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(data => console.log('Student Signin successful'))
        .catch(function(error) {
            console.log(error);
        })
    }
}
