import { Song } from "@/types/music";
import { View , Touchable , StyleSheet} from "react-native";
import AppText from "./AppText";
import { useMusicPlayer } from "@/context/PlayerComp";
import { track } from "@/types/data";

export default function MusicPlay({ id } : Song){
    const {play , pause , currentTrack , resume , isPlaying} = useMusicPlayer;
    const trackData = track.find(track => track.id == id); 

    if(trackData) {
        return(
        <View style = {style.constainer}>
            <AppText style = {style.head}>{trackData?.type}</AppText>

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
    
        constainer : {
            flex: 1,
            backgroundColor: "black" 
            
        },head : {
            justifyContent: "center",
            alignItems: "center"
        }
    
});