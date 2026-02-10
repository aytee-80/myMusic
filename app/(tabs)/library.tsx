import { View ,StyleSheet , ScrollView} from "react-native"; 
import AppText from "../../components/AppText";
export default function Library() {
    return(
        <View style = {styles.container}>
            <ScrollView style= {styles.container2}>
                <AppText>View</AppText>
            </ScrollView>
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