import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import CoinDetailScreen from "../screens/CoinDetailScreen";
import AddNewAssetScreen from "../screens/AddNewAssetScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "screen",
      }}
      initialRouteName="Onboarding"
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
        
      />
      <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
      <Stack.Screen
        name="AddNewAsset"
        component={AddNewAssetScreen}
        options={{
          title: "Add New Asset",
          headerTintColor: "white",
          headerBackTitle: "Back",
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
          headerStatusBarHeight: 0,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
