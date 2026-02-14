import { Song } from "@/types/music";
import { View , Touchable , StyleSheet , Image, TouchableOpacity} from "react-native";
import AppText from "./AppText";
import { useMusicPlayer } from "@/context/PlayerComp";
import { track } from "@/types/data";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
    id : string
}

export default function MusicPlay({ id } : Props){
    const {play , pause , currentSong , resume , isPlaying} = useMusicPlayer();
    const trackData = track.find(track => track.id === id); 

    if(trackData) {
        return(
        <View style = {style.constainer}>
            <AppText style = {style.head}>{trackData?.type}</AppText>
            <View style = {style.imageContainer}>
                <Image source={trackData.cover} style = {style.image} />
            </View>

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
             on
            >
                <MaterialIcons name="repeat" size={43} color="#ffffff" />
            </TouchableOpacity>
            
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