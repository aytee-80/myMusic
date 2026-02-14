import { Song } from "@/types/music";
import { View , Touchable , StyleSheet , Image, TouchableOpacity} from "react-native";
import AppText from "./AppText";
import { useMusicPlayer } from "@/context/PlayerComp";
import { track } from "@/types/data";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from "react";

type Props = {
    id : string
}

export default function MusicPlay({ id } : Props){
    const [repeat, setRepeat] = useState("repeat");
    const {play , pause , currentSong , resume , isPlaying ,position, duration , seekTo} = useMusicPlayer();
    
    const progress = duration > 0 ? position / duration : 0 ;
    const formatTime = (seconds: number) => {
        const totalSecond = Math.floor(seconds); 
        const secs = totalSecond % 60;
        const minutes = Math.floor(totalSecond / 60);

        return `${minutes} : ${secs < 10 ? "0" : ""}${secs}`
    }

    const trackData = track.find(track => track.id === id); 
    


    if(trackData) {
        return(
        <View style = {style.constainer}>
            <AppText style = {style.head}>{trackData?.type}</AppText>
            <View style = {style.imageContainer}>
                <Image source={trackData.cover} style = {style.image} />
            </View>

            <AppText style = {{fontSize: 20 , fontWeight: 800 , marginTop : 20}}>{trackData.title}</AppText>

            <AppText style = {{fontSize: 20 , fontWeight: 300 , marginTop : 8}}>{trackData.artist}</AppText>
            
            <View style={style.progressBarBackground}>
                 <View
                    style={[
                        style.progressBarfill,
                        {width: `${progress * 100}%`}
                    ]}
                 >

                 </View>
            </View>
            <View style = {style.time}>
                    <AppText style = {{fontSize : 10}}>{formatTime(position)}</AppText>
                    <AppText style = {{fontSize : 10}}>{formatTime(duration)}</AppText>
            </View>

            <View style = {style.playContainer}>

            <TouchableOpacity
                onPress={() => {
                    if(currentSong?.id === trackData.id && isPlaying){
                        pause();
                    }else if (currentSong?.id === trackData.id){
                        resume();
                    }else{
                         
                        play({
                            id: trackData.id,
                            title: trackData.title, 
                            artist: trackData.artist, 
                            audioUrl : trackData.audioUrl, 
                            Date: trackData.Date,
                            cover:trackData.cover, 
                            type : trackData.type 
                        }); 
                    }
                }}
            >
            <Ionicons 
                name = {
                    isPlaying && currentSong?.id === trackData.id 
                    ? "pause"
                    : "play"
                }
                size={40}
                color="#ffffff"
            />

            </TouchableOpacity>

            <TouchableOpacity>
                <MaterialIcons name="skip-next" size={43} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name="skip-previous" size={43} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => { setRepeat("repeat-one") 
                if(repeat === "repeat-one"){
                    setRepeat("repeat")
                }
                }}
            >
                <MaterialIcons 
                name={
                    repeat === "repeat-one" ? "repeat-one" : "repeat" 
                 } 
                 size={43} color="#ffffff" />
            </TouchableOpacity>
            </View>

            
            
        </View>

    );
    } else {
        return(
            <View style = {style.constainer}>
                <AppText style = {style.head}> track not found</AppText>
            </View>
        )
    }
    
}

const style = StyleSheet.create({
    time : {
        flexDirection: "row" , justifyContent: "space-between", marginTop : 5 ,
        fontSize: 2
    },
    progressBarfill : {
        height: 4, 
        backgroundColor: "#fff", 
        borderRadius: 2
    },
    progressBarBackground: {
        height: 4, 
        backgroundColor: "#444", 
        width: "100%", 
        borderRadius: 2 , 
        marginTop: 20
    },
    playContainer : {
        flexDirection: "row", 
        marginTop: 20
    },
        imageContainer: {
            
            marginTop: 50,
            height: "60%"
        },
        constainer : {
            flex: 1,
             
            
        },head : {
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: 10,
            fontSize:15

        },image :{
            width: "100%",
            height: "100%",
            borderRadius: 20,


        }
    
});