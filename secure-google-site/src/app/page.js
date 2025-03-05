import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB0ciYGBpDRy4CZzpNfPYVQz7GgRajdJ1E",
    authDomain: "https://secure-google-site.vercel.app/",
    projectId: "stafify-cmd"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, []);

    const login = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    return (
        <div>
            {user ? (
                <iframe src="/proxy" width="100%" height="1000px"></iframe>
            ) : (
                <div>
                    <h2>Please Sign In</h2>
                    <button onClick={login}>Sign in with Google</button>
                </div>
            )}
        </div>
    );
}
