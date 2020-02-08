import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCC7UVK49gv5ftyiQIUWmu9WjxbGzKdeGw",
    authDomain: "crwn-db-3c197.firebaseapp.com",
    databaseURL: "https://crwn-db-3c197.firebaseio.com",
    projectId: "crwn-db-3c197",
    storageBucket: "crwn-db-3c197.appspot.com",
    messagingSenderId: "462527110569",
    appId: "1:462527110569:web:6f08832b07a4663b5a38b8",
    measurementId: "G-F560SP34BZ"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase