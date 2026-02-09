import {View , Image , StyleSheet} from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();
  const image = require("../assets/images/Welcome Page.png");

  useEffect(()=> {
    const timer = setTimeout(() => {
      router.replace("/Dashboard");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);  
  
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: '#050505'
    
  },image: {
    width: "100%",
    height: "100%",
  }
})
