import { View ,StyleSheet , ScrollView} from "react-native"; 
import AppText from "../../components/AppText";
import MusicPlay from "@/components/musicPlay";
import { track } from "@/types/data";
import { useSearchParams } from "expo-router/build/hooks";
import { useState } from "react";

export default function MusicPlayer() {
    const paramss = useSearchParams(); 

    const idparam = paramss.get("trackId");
    
    const play = track.find(song => song.id === idparam);

    if(play){
        return(
        <View style = {styles.container}>
            <MusicPlay
                id = {play.id}
            />
        </View>
    );
    }else {
        return(
        <View style = {styles.container}>
            <AppText>NO Song</AppText>    
        </View>);
    }
    
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        backgroundColor: '#050505', 
        paddingTop : 50
        ,paddingHorizontal : 20,
        

    },container2 : {
        paddingTop : 50
        ,paddingHorizontal : 20,
        flex : 1,
    }
});