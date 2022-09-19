import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Image } from 'react-native'
import HomeScreen from "../screens/HomeScreen";
import MarketsScreen from "../screens/MarketsScreen";
import WatchListScreen from "../screens/WatchListScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#181818",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={ require("../../assets/icons/home.png")} 
              style={{ width: focused ? 30 : 25, height: focused ? 30 : 25, backgroundColor: "#181818", tintColor: focused ? "white" : "grey"}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Markets"
        component={MarketsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image 
              source={ require("../../assets/icons/markets.png")} 
              style={{ width: focused ? 30 : 25, height: focused ? 30 : 25, backgroundColor: "#181818", tintColor: focused ? "white" : "grey"}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ focused}) => (
            <Image 
              source={ require("../../assets/icons/portfolio.png")} 
              style={{ width: focused ? 30 : 25, height: focused ? 30 : 25, backgroundColor: "#181818", tintColor: focused ? "white" : "grey"}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Watchlist"
        component={WatchListScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome name="star" size={focused ? 30 : 25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image 
              source={ require("../../assets/icons/profile.png") } 
              style={{ width: focused ? 30 : 25, height: focused ? 30 : 25, backgroundColor: "#181818", tintColor: focused ? "white" : "grey"}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
