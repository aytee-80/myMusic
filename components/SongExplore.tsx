import { View, Image, StyleSheet , TouchableOpacity} from "react-native";
import AppText from "./AppText";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { ExplorePost } from "@/types/music";
import { useVideoPlayer , VideoView } from "expo-video";
import { useEvent } from "expo";
import {useMusicPlayer} from "@/context/PlayerComp";

type Props = {
    post: ExplorePost;
    isActive: boolean; 
    onPlay: () => void; 
    onLike: () => void;
    onDownload : () => void;
};

export default function SongExplore({post , onPlay , onLike, onDownload , isActive} : Props) {
    const [manualpause, setManualpause] = useState(false);
    const { user , description , visual , track , postType} = post;
    const {pause , resume} = useMusicPlayer();

    const wasPlayingRef = useRef(false);

    const player = useVideoPlayer (visual.video , player =>{
        player.loop = true; 
            
    });

    

    const {isPlaying} = useEvent (player, 'playingChange' , { isPlaying: player.playing});


    useEffect(() =>{
        if(postType === "video" && player){
                
            if(isActive) {
                pause(); 
                
                const timer = setTimeout(() => {
                    player.play();
                },1000)

                return () => clearTimeout(timer);
            }
            
            if(!isActive){
                player.pause();
                setManualpause(false);
                
            }
        }
    }, [isActive]);

    
    return(
        <View style = {Styles.card}>
            <View style={Styles.profileContainer}>
                
                    <Image source={user.avatar} style={Styles.profileImage} />
                
                <AppText style = {Styles.artist}>{user.name}</AppText>
            </View>
            
            <View style = {Styles.Description}>
                <AppText style = {Styles.DescriptionText}>{description}</AppText>
            </View>

            <View style = {Styles.coverContainer}>
                {postType === "image" && visual.image && (
                    <Image source = {visual.image} style = {Styles.cover}/>
                )}


                {postType === "video" && visual.video && (
                    
                    <VideoView 
                        
                        player={player}
                        style = {Styles.cover}
                        allowsFullscreen
                        
                        
                        
                    />
                )

                }
                
            </View> 

            <View style = {Styles.info}>
                <View style = {Styles.songTitle}>
                    <Ionicons name="musical-notes-outline" size={19} color="#ffffff" />
                    <AppText style = {Styles.title}>{track.title}</AppText>
                </View>
                
                
                <AppText style = {Styles.Date}>{track.Date}</AppText>

                <View style = {Styles.action}>
                    <TouchableOpacity onPress={onPlay}>
                        <Ionicons name="play" size={24} color="#ffffff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onLike}>
                        <Ionicons name="heart" size={24} color="#ffffff" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onDownload}>
                        <Ionicons name="download-outline" size={24} color="#ffffff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    songTitle: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    Description: {
      marginBottom: 10,
    },
    DescriptionText: {        
        fontSize: 14,
    },
    profileContainer : {
        flexDirection : "row",
        alignItems : "center",
        marginBottom : 10,
        gap : 5,
    },
    profileImage : {
        width : 40,
        height : 40,
        borderRadius : 500,
    },
    coverContainer : {
        width : "100%",
        height : 400,
        borderRadius : 5,
        
        alignItems : "center",
        marginBottom : 10,
    },
    card : {    
        borderRadius : 10,
        padding : 10,
        marginBottom : 10,
    },cover : {
        width : "100%",
        height : "100%",
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