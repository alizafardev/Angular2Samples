import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AngularFireAuth } from 'angularfire2';

@Injectable()
export class CompanyService {
    students: FirebaseListObservable<any[]>;
    constructor(private af: AngularFire, private afAuth: AngularFireAuth) {}

    cReg(value){
       var companies =  firebase.database().ref().child('companies').push(value);
       console.log('Company Registration successful');
    }

    cSignup(email, password){
       firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(data => console.log('Company Signup successful'))
        .catch(function(error) {
        console.log(error);
            });
    }

    cSignin(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(data => console.log(' Company Signin successful'))
        .catch(function(error) {
            console.log(error);
        })
    }

    cLogout(){
        firebase.auth().signOut();
    }

    getStudents(){
        this.students = this.af.database.list('/students');
    }

    postVacancy(value){
       const vacancy = this.af.database.list('/vacancy');
       vacancy.push(value);
    }

}
