import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  browserLocalPersistence,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  sendPasswordResetEmail,
} from "firebase/auth";
import toast from "react-hot-toast";

export const handleLogin = async (email, password, router) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    await setPersistence(auth, browserLocalPersistence);
    router.push("/dashboard");
    console.log(user);
  } catch (error) {
    toast.error(error.message);
  }
};

export const handleSignup = async (name, email, password, router) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await setPersistence(auth, browserLocalPersistence);
    await updateProfile(user, {
      displayName: name,
    });
    router.push("/dashboard");
  } catch (error) {
    toast.error(error.message);
  }
};

export const handleGoogleLogin = async (router) => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    await setPersistence(auth, browserLocalPersistence);
    router.push("/dashboard");
  } catch (error) {
    toast.error(error.message);
  }
};

export const handleLogout = async (router) => {
  try {
    await signOut(auth);
    router.push("/");
  } catch (error) {
    toast.error(error.message);
  }
};

export const handleResetPassword = async (email, setLoading, setSuccess) => {
  try {
    setLoading(true);
    await sendPasswordResetEmail(auth, email);
    toast.success("Password reset link sent to your email");
    setSuccess(true);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    toast.error(error.message);
  }
};
