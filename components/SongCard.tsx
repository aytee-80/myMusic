import { View, Image, StyleSheet , TouchableOpacity} from "react-native";
import AppText from "./AppText";
import { Ionicons } from "@expo/vector-icons";

type Song = {
    title: string;
    artist: string;
    Date: string;
    cover: any;
};

export default function SongCard({ title, artist , cover , Date} : Song) {
    return(
        <View style = {Styles.card}> 
            <Image source = {cover} style = {Styles.cover}/>

            <View style = {Styles.info}>
                <AppText style = {Styles.title}>{title}</AppText>
                <AppText style = {Styles.artist}>{artist}</AppText>
                <AppText style = {Styles.Date}>{Date}</AppText>

                <View style = {StyleSheet.action}>
                    <TouchableOpacity>
                        <Ionicons name="play" size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="heart" size={24} color="#ffffff" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name="download-outline" size={24} color="#ffffff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    card : {
        flexDirection : "row",
        alignItems : "center",
        backgroundColor : "#1e1e1e",
        borderRadius : 10,
        padding : 10,
        marginBottom : 10,
    },cover : {
        width : 60,
        height : 60,
        borderRadius : 5,       
    }, info : {
        flex : 1,
        marginLeft : 10,
    }, title : {
        fontSize : 16,
        fontWeight : "bold",
    }, artist : {
        fontSize : 14,
        color : "#888",
    }, Date : {
        fontSize : 12,
        color : "#888",
    }, action : {
        flexDirection : "row",
        marginTop : 10,
        justifyContent : "space-between",
        width : 120,
    }
});