import { View , StyleSheet, TouchableOpacity, TextInput} from "react-native";
import { Ionicons } from "@expo/vector-icons";


type Props = {
    
    onPress: () => void;
};

export default function Search({onPress} : Props){
    

    return(
        <View style = {styles.iconContainer}>
            <TouchableOpacity style = {styles.iconSearch} onPress={onPress}>
                
                    <Ionicons name="search" size={24} color="#ffffff" />
                
            </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    iconContainer : {
        position : "absolute",
        top : 50,
        right : 20,
        zIndex : 100,
    },
    iconSearch : {
        width : 44, 
        height : 44,
        borderRadius : 22,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#1e1e1e",
    },
    searchBar: {
        flexDirection : "row",
        alignItems : "center",
        gap : 10,
        paddingHorizontal : 15,
        height : 40,
        borderRadius : 100,
        width : "70%",
        marginLeft : "auto",
        marginRight : "auto",
        backgroundColor : "#1e1e1e",
        
        

    },
    input : {
        color : "#ffffff",
        fontSize : 16,
        flex : 1,
    },iconWrapper : {
        position: "absolute",
        top: 10, 
        left: 0,
    },iconBlur : {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    }
});