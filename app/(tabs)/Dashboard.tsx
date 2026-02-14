import { View ,StyleSheet ,FlatList} from "react-native"; 
import AppText from "../../components/AppText";
import SongExplore from "../../components/SongExplore";
import Search from "@/components/Search";
import { useRef, useState } from "react";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { posts } from "@/types/data";


 
export default function Dashboard() {
    const [activePostId, setActivePostId] = useState<string | null>(null);
    const router = useRouter();
    
    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 60
    });

    const onViewableItemsChanged = useRef(({ viewableItems } : any) => {
        if(viewableItems.length > 0) {
            setActivePostId(viewableItems[0].item.id);
        }
    });

    function handlePlay(trackId : string){
        router.push({
            pathname: "/(tabs)/musicPlayer", 
            params : {trackId},
            }
        );
    }

    function handleLike(trackId: string){
        console.log("liked" , trackId);
    }

    function handleDownload(trackId: string ){
        console.log("downloading" , trackId)
    };

    return(
       <View style = {styles.container}>
            
            <FlatList style= {styles.scrollContent} 
                 data={posts}
                 keyExtractor={(item) => item.id}
                 showsVerticalScrollIndicator = {false}
                 viewabilityConfig={viewabilityConfig.current}
                 onViewableItemsChanged={onViewableItemsChanged.current}
                 ListHeaderComponent={() => (
                    <View style= {styles.header}>
                    <MaterialIcons name="explore" size={30} color="#ffffff" />
                    <AppText style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#ffffff" }}>
                    Explore
                    </AppText>
                    </View>
                 )}
                        
                 renderItem={({item}) => (
                    <SongExplore 
                        post = {item}
                        isActive = {item.id === activePostId}
                        onPlay={() => handlePlay(item.track.id)}
                        onLike={() => handleLike(item.track.id)}
                        onDownload={() => handleDownload(item.id)}
                    />
                )}
                 
            />
                
                   
                

            
            <Search       
            onPress={() => router.push("/(tabs)/library")}
        />
        </View>
        
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row", 
        marginLeft: 20
    },
    container : {
        flex : 1, 
        backgroundColor: '#050505',
        
        

    },scrollContent : {
        paddingTop: 60
    }
});