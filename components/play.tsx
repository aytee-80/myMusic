import { LayoutAnimation , Platform , UIManager ,Animated ,View , StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppText from "./AppText";
import { ReactNode , useState , useRef, useEffect } from "react";
import { useRouter } from "expo-router";

type Props = {
    type: "explore" | "saved" | "settings"; 
    isPlaying: boolean;
    onPress: () => void;
    artist?: string; 
    tittle?: string ; 
    image?: ReactNode;
    trackId?: string
};

export default function Play({trackId , onPress , image , type , isPlaying , artist , tittle} : Props){
    const [expanded, setExpanded] = useState(false);    
    const router = useRouter();
    
    if(Platform.OS === "android"){
        UIManager.setLayoutAnimationEnabledExperimental?.(true);
    }

    const handlePress = () =>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        if(!expanded) {
            setExpanded(true); 
            
            return;
        }

        router.push({
            pathname : "/(tabs)/musicPlayer",
            params : {trackId}
        });
    }

    useEffect(() => {
        if(!expanded) return;
        const timer = setTimeout (() =>{
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setExpanded(false);
        },6000);

        return () => clearTimeout(timer);
    },[expanded]);


    return(
        <View style = {styles.iconContainer}>
            {type === "explore"  &&(
                <TouchableOpacity style = {styles.iconSearch} onPress={onPress}>

                <Ionicons 
                    name = {
                    isPlaying === true 
                    ? "pause"
                    : "play"
                }
                size={20}
                color="#ffffff"
            />
                
            </TouchableOpacity>
            )}


            {type === "saved" &&(
                
                <TouchableOpacity  style = {[styles.iconsaved, expanded ? styles.expanded : styles.collapsed]}  onPress={handlePress}>
                    
                
                <View style = {styles.main}>
                 {expanded && (
                    <View>
                        <AppText style = {{fontSize: 18 , marginBottom: 2 , zIndex: 100}}>{tittle}</AppText>
                        <AppText style = {{fontSize: 9 , zIndex: 100}}>{artist}</AppText>
                    </View>
                 )}
                <TouchableOpacity onPress={expanded ? onPress : handlePress}>    
                    <Ionicons 
                        name = {
                        isPlaying === true 
                        ? "pause"
                        : "play"
                        }
                     style = {{zIndex: 100}}
                    size={20}
                    color="#ffffff"
                    />
                </TouchableOpacity>      
                
              </View>
                
            </TouchableOpacity>
            
            )}
            </View>
    );
}

const styles = StyleSheet.create({
    main : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 70 
        
    },image : {
        width: 40 ,
        height: 40, 
        borderBottomStartRadius: 20,
        borderTopStartRadius: 20
    },
    iconContainer : {
        position : "absolute",
        bottom : 50,
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
    iconsaved : {
        height : 44,
        borderRadius : 22,
        justifyContent : "center",
        alignItems : "center",
        overflow: "hidden",
        backgroundColor : "#1e1e1e",
    },collapsed : {
        width: 44, 
        alignItems: "center"
    },expanded : {
        width: 350 , 
        paddingHorizontal: 12
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