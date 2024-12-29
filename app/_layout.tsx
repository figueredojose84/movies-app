import { Slot, Stack } from "expo-router";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// Import your global CSS file
import "../global.css";
import { View,Text } from "react-native";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";


const queryClient = new QueryClient()



const RootLayout = () => {
  nowPlayingAction();
return (
    <QueryClientProvider client={queryClient}>
     <Stack 
     screenOptions={
      {
        headerShown: false
      }
     }
     />
  </QueryClientProvider>
);

}

export default RootLayout;