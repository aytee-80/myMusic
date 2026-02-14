import { ReactNode } from "react";
export type Song = {
    id: string;

    title: string;
    artist: string;
    Date: string;

    audioUrl: string; 
    cover: ReactNode;

    duration?: number;
    type : string;
    albumId?: string;
    
};

export type ExplorePost = {
    id: string;

    postType: "image" | "video"

    user: {
        name : string; 
        avatar: ReactNode;
    }

    description: string;

    visual: {
        image?: ReactNode; 
        video?: ReactNode;
    };

    track: Song;
};

