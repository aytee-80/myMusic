import { useAudioPlayer , AudioPlayer, useAudioPlayerStatus} from "expo-audio";
import { Song } from "@/types/music";
import React, {  ReactNode , createContext , useContext , useEffect, useState} from "react"; 
import { track } from "@/types/data";
import { posts } from "@/types/data";

type PlayerContextType = {
    currentSong: Song | null; 
    isPlaying : boolean; 
    play: (track: Song) => void ; 
    pause: () => void; 
    resume: () => void;
    seekTo: (millis: number) => void; 
    duration: number; 
    position: number; 
    playNext: () => void; 
    playPrevious: () => void; 
    repeat: "repeat" | "repeat-on" | "repeat-one"; 
    setRepeat : React.Dispatch<React.SetStateAction<"repeat" | "repeat-one" | "repeat-on">>;
} 

type Props = {
    children: ReactNode;
}

const MusicPlayerContext = createContext<PlayerContextType | null>(null);
 

export default function PlayerComp({children} : Props){
    
    const [currentSong, setCurrentSong] = useState<Song | null>(null); 
    const [repeat, setRepeat] = useState<"repeat" | "repeat-on" | "repeat-one">("repeat");
    const [postList, setPostList] = useState(posts);

    function handleLike(trackId: string){
        setPostList(prev => 
            prev.map(post =>
                post.track.id === trackId 
                ? {
                    ...post,
                    track: {
                        ...post.track,
                        liked: !post.track.liked
                    }
                }
                : post
            )
        );
    }

    const player = useAudioPlayer(); 
    const status = useAudioPlayerStatus(player);
    const play = async (track: Song) => {
        if(currentSong?.id !== track.id){
            setCurrentSong(track);
            await player.replace(track.audioUrl); 
            await player.play();
            return;
        }
        if(status.didJustFinish){
            player.seekTo(0);
        }
        
        player.play();
    };
    
    const pause = () => {
        player.pause();
    }

    const resume = () => {
        player.play();
    }

    const playNext = async () => {
        if(!currentSong) return; 

        const currentIndex = track.findIndex(t => t.id === currentSong.id); 

        if(track.length === 1 ){
            player.seekTo(0); 
            player.play();
        }
        if(currentSong.type !== "explore" && currentSong.type !== "Single" ){
            const nextIndex = (currentIndex + 1 ) % track.length; 
            const nextTrack = track[nextIndex]; 

            setCurrentSong(nextTrack);

            await player.replace(nextTrack.audioUrl); 
            await player.play
        }
        
    }

    const playPrevious = async () => {
        if(!currentSong) return; 

        const currentIndex = track.findIndex(t => t.id === currentSong.id); 

        if(track.length === 1 ){
            player.seekTo(0); 
            player.play();
        }

        if(currentSong.type !== "explore" && currentSong.type !== "Single"){
            const prevIndex = (currentIndex - 1 ) % track.length; 
            const prevTrack = track[prevIndex]; 
            setCurrentSong(prevTrack);
            await player.replace(prevTrack.audioUrl); 
            await player.play();
        }
        
    }

    useEffect(()=> {
        if(!status.isLoaded || !status.didJustFinish) return; 
        
        handleSongEnd();
    }, [status.didJustFinish]);

    const handleSongEnd = () => {
        if(!currentSong) return; 

        if(repeat === "repeat-one"){
            player.seekTo(0); 
            player.play();
            return;
        }

        playNext();
    }
    const seekTo = async(millis: number) => {
        await player.seekTo(millis);
    }

    return (
        <MusicPlayerContext.Provider
            value={{
                currentSong,
                isPlaying: status.playing ?? false,
                play,
                pause,
                resume, 
                seekTo, 
                duration: status.duration ?? 0, 
                position : status.currentTime ?? 0, 
                playNext, 
                playPrevious , 
                repeat , 
                setRepeat
            }}
        >
            {children}
        </MusicPlayerContext.Provider>
    );
}

export const useMusicPlayer = () =>{
    const context = useContext(MusicPlayerContext);
    if(!context){
            throw new Error("useMusicPlayer must be used inside musicPlayerProvider");
        
    };
    return context;
}