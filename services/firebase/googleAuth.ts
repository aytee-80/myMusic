import * as WebBrowser from 'expo-web-browser'; 
import * as Google from 'expo-auth-session/providers/google';
import { signInWithCredential , GoogleAuthProvider } from 'firebase/auth';
import { fire } from './firebase';

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth(){
    const [request, reponse, promptAsync] = Google.useAuthRequest({
            clientId : "",
            webClientId : "",
            iosClientId : "", 
            androidClientId : ""
    });

    const signinGoogle = async () => {
        try{
            const result = await promptAsync();

                if(result.type !== 'success'){
                    throw new Error('Goole sign in cancelled');
                }

            const { idToken } = result.params;

            if(!idToken){
                throw new Error('Google ID token not found');
            }
            
            const googleCredential = GoogleAuthProvider.credential(idToken); 

            const userCredential = await signInWithCredential(fire , googleCredential);

            return idToken;
        }catch(error){
            console.error('Google sign-in error: ' , error);
            throw error;
        }
    }

    return { signinGoogle };
}

