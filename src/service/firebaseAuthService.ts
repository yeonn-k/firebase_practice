import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export const firebaseAuthService = {
  async googleLogin() {
    try {
      const googleAuthProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, googleAuthProvider);
      return result.user;
    } catch (error) {
      console.error("❌firebaseAuthService: google login error");
      console.error(error);
    }

    return null;
  },

  async googleLogout() {
    await signOut(auth);
  },
};
