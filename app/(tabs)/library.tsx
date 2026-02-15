import { View ,StyleSheet , ScrollView} from "react-native"; 
import AppText from "../../components/AppText";
import Search from "@/components/Search";
import Play from "@/components/play";
import { useMusicPlayer } from "@/context/PlayerComp";
import { useRouter } from "expo-router";
export default function Library() {
    const {isPlaying , pause , resume , currentSong} = useMusicPlayer();
    const router = useRouter();
    return(
        <View style = {styles.container}>
            <ScrollView style= {styles.container2}>
                <AppText>View</AppText>
            </ScrollView>

            <Search       
                onPress={() => router.push("/(tabs)/settings")}
            />
            <Play 
                onPress={() => isPlaying === true ? pause() : resume()} 
                type = "saved"
                isPlaying = {isPlaying}
                artist= {currentSong?.artist}
                tittle= {currentSong?.title}
                image = {currentSong?.cover}
                trackId= {currentSong?.id}
            />
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