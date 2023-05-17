import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Home";
import About from "./src/About";
import Note from "./src/Note";
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Note" component={Note} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
