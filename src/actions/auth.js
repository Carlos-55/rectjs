import {types} from '../types/type';

import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(
            startLoading()
        );
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async ({user}) => {
                dispatch(
                   login(user.uid, user.displayName)
                );
                dispatch(
                   finishLoading()
               );
            }).catch(e => {
                console.log(e);
                dispatch(
                   finishLoading()
               );
            });
    }
} 


export const startGoogleLogin = ()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            );
        })
    }
}


export const startRegister = (name, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async ({user}) => {
            await user.updateProfile({
                displayName : name
            });
            dispatch(
                login(user.uid, user.displayName)
            );
        }).catch(e => {
            console.log(e);
        })
    }
}


export const login = (uid, displayName) =>  ({
    type: types.login,
    payload: {
        uid, 
        displayName
    }
});


