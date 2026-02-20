import AppText from "./AppText";
import { View , TouchableOpacity, ScrollView, TextInput , StyleSheet } from "react-native";
import { useAuth } from "@/hooks/auth";


export default function AuthModel(){
    const { loginWithGoogle } = useAuth();  
    
    const handleGoogleLogin = async () => {
        try{
            await loginWithGoogle();
        }catch(err){
            console.error(err);
        }
    }
    return(
        <View style = {style.container}>
            <ScrollView
                style = {{flex: 1  ,padding: 15}}
                showsHorizontalScrollIndicator = {false}
            >
            <AppText style = {{ 
                textAlign: "center" , marginTop: 10 ,
                fontSize: 20, fontWeight: 800
            }}>
                Sign up/Login
            </AppText>

            <AppText style= {{
                marginTop: 50,
                marginBottom: 5, 
                textAlign:"center",
                fontSize:16,
                fontWeight: 700
            }}>Username</AppText>
            <TextInput 
                placeholder="Grax 77"
                style = {{
                    backgroundColor: "#726f6f",
                    width: "100%",
                    height: 40, 
                    borderRadius: 10
                    ,paddingHorizontal: 20,
                    fontSize: 18,
                    color: "#fffffff"
                }}
            />
            <AppText style= {{
                marginTop: 20,
                marginBottom: 5, 
                textAlign:"center",
                fontSize:16,
                fontWeight: 700
            }}>Password</AppText>
            <TextInput 
                placeholder="Password"
                style = {{
                    backgroundColor: "#726f6f",
                    width: "100%",
                    height: 40, 
                    borderRadius: 10
                    ,paddingHorizontal: 20,
                    fontSize: 18,
                    color: "#fffffff"
                }}
            />
            <TextInput 
                placeholder="Retype password"
                style = {{
                    backgroundColor: "#726f6f",
                    width: "100%",
                    height: 40, 
                    borderRadius: 10
                    ,paddingHorizontal: 20,
                    fontSize: 18,
                    marginTop: 15,
                    color: "#fffffff"
                }}
            />

            <TouchableOpacity style = {{
                backgroundColor: "#868686",
                marginTop: 30,
                height: 40, 
                borderRadius: 10
            }}>
                <AppText style ={{
                    fontSize: 18,
                    margin: "auto", 
                    fontWeight:600
                }}>Submit</AppText>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={handleGoogleLogin}
            style = {{
                backgroundColor: "#868686",
                marginTop: 30,
                height: 40, 
                borderRadius: 10
            }}>
                <AppText style ={{
                    fontSize: 18,
                    margin: "auto", 
                    fontWeight:600
                }}>Google</AppText>
            </TouchableOpacity>
            </ScrollView>
        </View>
        
    );
}

const style = StyleSheet.create({
    container:{
        backgroundColor: "#1e1e1e",
        width: "90%",
        height: "60%",
        zIndex: 100,
        margin: "auto",
        borderRadius: 15
        
    },
});