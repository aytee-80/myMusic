import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
  return(
    <Tabs>
      <Tabs.Screen name="Dashboard" options={{headerShown:false, tabBarStyle: { backgroundColor: '#050505' , paddingTop: "10" , marginTop: "" , borderTopWidth: 0 } , tabBarLabel: "explore" , tabBarIcon: ({color}) => <MaterialIcons name="explore" size={30} color={color} /> ,tabBarActiveTintColor: '#ffffff'}} />
        <Tabs.Screen name="library" options={{headerShown:false, tabBarStyle: { backgroundColor: '#050505' , paddingTop: "10" , marginTop: "" , borderTopWidth: 0 } , tabBarLabel: "Saved" , tabBarIcon: ({color}) => <MaterialIcons name="library-music" size={30} color={color} /> ,tabBarActiveTintColor: '#ffffff'}} />
        <Tabs.Screen name="settings" options={{headerShown:false, tabBarStyle: { backgroundColor: '#050505' , paddingTop: "10" , marginTop: "" , borderTopWidth: 0 } , tabBarLabel: "settings" , tabBarIcon: ({color}) => <MaterialIcons name="settings" size={30} color={color} /> ,tabBarActiveTintColor: '#ffffff'}} />
                <Tabs.Screen name="musicPlayer" options={{href : null , headerShown:false , tabBarStyle: { backgroundColor: '#050505' , paddingTop: "10" , marginTop: "" , borderTopWidth: 0 } } } />
                

    </Tabs>
  );
}