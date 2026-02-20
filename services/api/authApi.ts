import { Api_Url } from "@/API_URL";

export const loginWithFirebaseToken = async (idToken: String) => {
    const reponse = await fetch(`${Api_Url}/auth/login` , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            Authorization: `Bearer ${idToken}`,
        }
    }); 

    if(!Response){
        throw new Error('Backend authentication failed');
    }

    return reponse.json();
}