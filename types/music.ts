
export type Song = {
    id: string;

    title: string;
    artist: string;
    Date: string;

    audioUrl: string; 
    cover: any;

    duration?: number;

    albumId?: string;
    
};

export type ExplorePost = {
    id: string;

    postType: "image" | "video"

    user: {
        name : string; 
        avatar: any;
    }

    description: string;

    visual: {
        image?: any; 
        video?: any;
    };

    track: Song;
};

