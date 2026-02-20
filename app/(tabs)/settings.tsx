import { View ,StyleSheet , ScrollView} from "react-native"; 
import AppText from "../../components/AppText";
import AuthModel from "@/components/authModel";

export default function Settings() {
    return(
        <View style = {styles.container}>
           <AuthModel/>]
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        backgroundColor: '#050505',

    },container2 : {
        paddingTop : 50
        ,paddingHorizontal : 20,
        flex : 1,
    }
});