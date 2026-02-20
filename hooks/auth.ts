import { loginWithFirebaseToken } from "@/services/api/authApi";
import { useGoogleAuth } from "@/services/firebase/googleAuth";

export const useAuth = () => {

    const { signinGoogle} = useGoogleAuth();
    const loginWithGoogle = async() => {
        const idToken = await signinGoogle();
        const backendVerify = await loginWithFirebaseToken(idToken); 

        return backendVerify;
    }

    return{
        loginWithGoogle,
    };
}