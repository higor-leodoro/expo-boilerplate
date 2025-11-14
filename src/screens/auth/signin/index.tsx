import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuthStore } from "@/stores";

export const SignIn = () => {
 const { signIn } = useAuthStore();
 return (
  <SafeAreaView className="bg-black justify-center items-center flex-1">
   <TouchableOpacity onPress={() => signIn(true)}>
    <Text className="text-white">Sigin</Text>
   </TouchableOpacity>
  </SafeAreaView>
 );
};
