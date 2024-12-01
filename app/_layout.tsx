import { Slot } from "expo-router";

// Import your global CSS file
import "../global.css";
import { View,Text } from "react-native";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";


const RootLayout = () => {
  nowPlayingAction();
return (
  <View className="flex-1 justify-center ">
    <Text className="">Header</Text>
  </View>
);

}

export default RootLayout;