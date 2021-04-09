import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
  
import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
    
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setisLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            if (user?.uid) {
                dispatch(
                    login(user.uid, user.displayName)
                );
                setisLoggedIn(true);
        }else{
            setisLoggedIn(false);
        }
        setChecking(false);
    });
    }, [dispatch, setChecking])

    if (checking) {
        return (
            <h1>Cargando, espere</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute 
                        exact
                        path="/"
                        isAuthenticated={isLoggedIn}
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
