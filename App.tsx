import { StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// SCREENS //
import TabNavigator from "./src/navigators/TabNavigator"
import ProductScreen from "./src/screens/ProductScreen"
import ReviewScreen from "./src/screens/ReviewScreen"
import DataProvider from "./APICall"
import ReciveScreen from "./src/screens/ReciveScreen"
import CreateAccountScreen from "./src/screens/CreateAccountScreen"
import LoginScreen from "./src/screens/LoginScreen"
import PasswordScreen from "./src/screens/PasswordScreen"
import PasswordRecoveryScreen from "./src/screens/PasswordRecoveryScreen"
import PasswordRecoveryCode from "./src/screens/PasswordRecoveryCode"
import SetupPasswordScreen from "./src/screens/SetupPasswordScreen"
import HelloCardScreen from "./src/screens/HelloCardScreen"
import Deliveredscreen from "./src/screens/DeliveredScreen"
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
          <Stack.Screen name="CreateAccount" component={CreateAccountScreen}></Stack.Screen>
          <Stack.Screen name="Password" component={PasswordScreen}></Stack.Screen>
          <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen}></Stack.Screen>
          <Stack.Screen name="PasswordRecoveryCode" component={PasswordRecoveryCode}></Stack.Screen>
          <Stack.Screen name="SetupPasswordScreen" component={SetupPasswordScreen}></Stack.Screen>
          <Stack.Screen name="HelloCardScreen" component={HelloCardScreen}></Stack.Screen>
          
          <Stack.Screen name="Tab" component={TabNavigator}></Stack.Screen>
          <Stack.Screen name="productscreen" component={ProductScreen}></Stack.Screen>
          <Stack.Screen name="recivescreen" component={ReciveScreen}></Stack.Screen>
          <Stack.Screen name="reviewscreen" component={ReviewScreen}></Stack.Screen>
          <Stack.Screen name="Deliveredscreen" component={Deliveredscreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  )
}
export default App
const styles = StyleSheet.create({})



