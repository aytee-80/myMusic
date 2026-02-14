import { useAudioPlayer , AudioPlayer, useAudioPlayerStatus} from "expo-audio";
import { Song } from "@/types/music";
import React, {  ReactNode , createContext , useContext , useEffect, useState} from "react"; 


type PlayerContextType = {
    currentSong: Song | null; 
    isPlaying : boolean; 
    play: (track: Song) => void ; 
    pause: () => void; 
    resume: () => void;
    seekTo: (millis: number) => void; 
    duration: number; 
    position: number; 
    
} 

type Props = {
    children: ReactNode;
}

const MusicPlayerContext = createContext<PlayerContextType | null>(null);
 

export default function PlayerComp({children} : Props){
    const [duration, setDuration] = useState(0); 

    const [currentSong, setCurrentSong] = useState<Song | null>(null); 

    const player = useAudioPlayer(); 
    const status = useAudioPlayerStatus(player);
    const play = async (track: Song) => {
        if(currentSong?.id !== track.id){
            setCurrentSong(track);
            await player.replace(track.audioUrl); 
            await player.play();
            return;
        }
        player.seekTo(0);
        player.play();
    };
    
    const pause = () => {
        player.pause();
    }

    const resume = () => {
        player.play();
    }

    const seekTo = async(millis: number) => {
        await player.seekTo(millis);
    }

    return (
        <MusicPlayerContext.Provider
            value={{
                currentSong,
                isPlaying: player.playing,
                play,
                pause,
                resume, 
                seekTo, 
                duration: status.duration ?? 0, 
                position : status.currentTime ?? 0, 
                
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