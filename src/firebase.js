import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, GoogleAuthProvider);
      setUser(result.user);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
      {user ? (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome, {user.displayName}!
          </h2>
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto"
            referrerPolicy="no-referrer"
          />
          <p className="text-gray-600">Email: {user.email}</p>
          <button
            onClick={handleSignOut}
            className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
            Sign Out
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome to Our App
            </h1>
            <p className="text-gray-600">Please sign in to continue</p>
          </div>

          {error && (
            <p className="p-3 bg-red-100 text-red-600 rounded-md">{error}</p>
          )}

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <FcGoogle className="text-xl" />
            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
