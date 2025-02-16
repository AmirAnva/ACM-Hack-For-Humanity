import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { startGame } from './script.js';
document.getElementById("googleSignIn").onclick = loginWithGoogle;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA031wvjqtGeqscBEgYAP4lGEcQB7nL50Q",
    authDomain: "sign-with-for-story.firebaseapp.com",
    projectId: "sign-with-for-story",
    storageBucket: "sign-with-for-story.firebasestorage.app",
    messagingSenderId: "270018919703",
    appId: "1:270018919703:web:e3d05270dbe24274904b52",
    measurementId: "G-4NH0NKE8QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Set up Google provider
const provider = new GoogleAuthProvider();

// Function to handle Google login
async function loginWithGoogle() {
    try {
        const result = await signInWithPopup(auth, provider);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('User Info:', user);

        // Retrieve additional user data
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log('User Data:', userData);
            window.levelIndex = userData.levelIndex;
            window.sceneIndex = userData.sceneIndex;
            window.dialogIndex = userData.dialogIndex;
            console.log('User Data:', { levelIndex, sceneIndex });
        } else {
            console.log('No such document!');
        }
        document.getElementById("sign-in-popup").style.display = "none";
        // Redirect to another page after successful login
        //window.location.href = "index.html";
        startGame()
    } catch (error) {
        console.log(error)
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error('Error during sign-in:', errorCode, errorMessage, email, credential);
    }
}

export async function saveProgress(){
    const user = auth.currentUser;
    if (user) {
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
            levelIndex: window.levelIndex,
            sceneIndex: window.sceneIndex,
            dialogIndex: window.dialogIndex
        });
        console.log('User data saved!');
    } else {
        console.log('No user signed in!');
    }
}