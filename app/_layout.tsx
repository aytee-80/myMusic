import { Stack } from "expo-router";
import PlayerComp from "@/context/PlayerComp";

export default function RootLayout() {
  return <PlayerComp> 
    <Stack>
      <Stack.Screen name= "index" options={{headerShown:false}} />
      <Stack.Screen name= "(tabs)" options={{headerShown:false}} />
    </Stack>;
  </PlayerComp>
}
