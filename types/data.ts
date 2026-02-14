import { ExplorePost, Song } from "@/types/music";

export const posts :  ExplorePost [] = [
    {
        id: "post1", 

        postType : "image",
        user: {
            name: "Aytee Tenacious", 
            avatar: require("../assets/images/ad225e048006855de8986d61d10c636e.jpg"),
        }, 
        description: "New song snippet",
        visual: {
            image: require("../assets/images/monkey-d-luffy-roronoa-zoro-one-piece-desktop-wallpaper.jpg")   
        }, 
        track: {
            id: "track1", 
            title: "Cooking Shiiii",
            artist: "Aytee Tenacious", 
            Date: "2026-01-24",
            audioUrl: "song.mp3", 
            type: "explore",
            cover: require("../assets/images/ad225e048006855de8986d61d10c636e.jpg"),
        },
        
    },{
        id: "post2", 

        postType : "image",
        user: {
            name: "Aytee Tenacious", 
            avatar: require("../assets/images/monkey-d-luffy-roronoa-zoro-one-piece-desktop-wallpaper.jpg"),
        }, 
        description: "New song snippet",
        visual: {
            image: require("../assets/images/monkey-d-luffy-roronoa-zoro-one-piece-desktop-wallpaper.jpg")   
        }, 
        track: {
            id: "track2", 
            title: "Cooking Shiiii",
            artist: "Aytee Tenacious", 
            Date: "2026-01-24",
            audioUrl: "song.mp3",
            type: "explore", 
            cover: require("../assets/images/ad225e048006855de8986d61d10c636e.jpg"),
        }
    },{
        id: "post3", 

        postType : "image",
        user: {
            name: "Aytee Tenacious", 
            avatar: require("../assets/images/monkey-d-luffy-roronoa-zoro-one-piece-desktop-wallpaper.jpg"),
        }, 
        description: "New song snippet",
        visual: {
            image: require("../assets/images/monkey-d-luffy-roronoa-zoro-one-piece-desktop-wallpaper.jpg")   
        }, 
        track: {
            id: "track3", 
            title: "Cooking Shiiii",
            artist: "Aytee Tenacious", 
            Date: "2026-01-24",
            type: "explore",
            audioUrl: "song.mp3", 
            cover: require("../assets/images/ad225e048006855de8986d61d10c636e.jpg"),
        }
    },{
        id: "post4", 

        postType : "video",
        user: {
            name: "Aytee Tenacious", 
            avatar: require("../assets/images/monkey-d-luffy-roronoa-zoro-one-piece-desktop-wallpaper.jpg"),
        }, 
        description: "New song snippet",
        visual: {
            video: require("../assets/images/Recognise the bridge😅 #fyp #relatable #reelsinstagram #music #explore.mp4")

        }, 
        track: {
            id: "track4", 
            title: "Cooking Shiiii",
            artist: "Aytee Tenacious", 
            Date: "2026-01-24",
            audioUrl: "song.mp3",
            type: "explore", 
            cover: require("../assets/images/ad225e048006855de8986d61d10c636e.jpg"),
        }
    },{
        id: "post5", 

        postType : "video",
        user: {
            name: "Aytee Tenacious", 
            avatar: require("../assets/images/monkey-d-luffy-roronoa-zoro-one-piece-desktop-wallpaper.jpg"),
        }, 
        description: "New song snippet",
        visual: {
            video: require("../assets/images/EP.24.v1.1639332363.360p_Trim.mp4")

        }, 
        track: {
            id: "track5", 
            title: "Cooking Shiiii",
            artist: "Aytee Tenacious", 
            Date: "2026-01-24",
            audioUrl: "song.mp3",
            type: "explore", 
            cover: require("../assets/images/ad225e048006855de8986d61d10c636e.jpg"),
        }
    },
];

export const track : Song [] = [
    {
        id: "track1", 
        title: "your girl",
        artist: "Aytee Tenacious", 
        Date: "2026-02-14",
        audioUrl: require("../assets/audio/your girl.mp3"), 
        cover: require("../assets/images/ad225e048006855de8986d61d10c636e.jpg"),
        type: "explore"
    },{
        id: "track3", 
        title: "Jumpie",
        artist: "Aytee Tenacious, Ona", 
        Date: "2026-02-14",
        audioUrl: require("../assets/audio/jumpie.mp3"), 
        cover: require("../assets/images/ad225e048006855de8986d61d10c636e.jpg"),
        type: "explore"
    },{
        id: "track3", 
        title: "Chasing",
        artist: "Aytee Tenacious, Iman", 
        Date: "2026-02-14",
        audioUrl: require("../assets/audio/chasing.wav"), 
        cover: require("../assets/images/ad225e048006855de8986d61d10c636e.jpg"),
        type: "explore"
    },{
        id: "track4", 
        title: "2 Late",
        artist: "Aytee Tenacious", 
        Date: "2026-02-14",
        audioUrl: require("../assets/audio/2 Late.mp3"), 
        cover: require("../assets/images/ad225e048006855de8986d61d10c636e.jpg"),
        type: "explore"
    },{
        id: "track5", 
        title: "Cooking Shiiii",
        artist: "Aytee Tenacious", 
        Date: "2026-02-14",
        audioUrl: require("../assets/audio/COOKING SHIII.mp3"), 
        cover: require("../assets/images/ad225e048006855de8986d61d10c636e.jpg"),
        type: "explore"
    }
]