import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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

        // Save additional user data
        levelIndex = 0; // Example value
        sceneIndex = 0; // Example value
        await setDoc(doc(db, "users", user.uid), {
            levelIndex: levelIndex,
            sceneIndex: sceneIndex
        });

        // Redirect to another page after successful login
        //window.location.href = "index.html";
    } catch (error) {
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