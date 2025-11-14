import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "@/screens/auth";
import { RoutesParamsList } from "@/types";

export default function AuthRoutes() {
 const Stack = createNativeStackNavigator<RoutesParamsList>();
 return (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
   <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
 );
}
