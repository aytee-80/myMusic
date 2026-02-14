import { useAudioPlayer , AudioPlayer} from "expo-audio";
import { Song } from "@/types/music";
import React, {  ReactNode , createContext , useContext , useState} from "react"; 

type PlayerContextType = {
    currentTrack: Song | null; 
    isPlaying : boolean; 
    play: (track: Song) => void ; 
    pause: () => void; 
    resume: () => void; 
} 

type Props = {
    children: ReactNode;
}

const MusicPlayerContext = createContext<PlayerContextType | null>(null);
 

export default function PlayerComp({children} : Props){
    const [currentSong, setCurrentSong] = useState<Song | null>(null); 

    const player = useAudioPlayer(currentSong?.audioUrl); 

    const play = (track: Song) => {
        if(currentSong?.id !== track.id){
            setCurrentSong(track);
            return;
        }
        player.play();
    };

    const pause = () => {
        player.pause();
    }

    const resume = () => {
        player.play();
    }

    return (
        <MusicPlayerContext.Provider
            value={{
                currentTrack,
                isPlaying: player.playing,
                play,
                pause,
                resume 
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