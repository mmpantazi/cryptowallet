import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
    const navigation = useNavigation();
  
    return (
    <View style={styles.container}>
      <View  style={{ flex: 1, alignItems:'left', justifyContent:'center', paddingTop:50}}>
        <Image
          source={ require("../../../assets/images/wallet.png") }
          style={{ width:'100%', height:'100%' }}
          resizeMode="contain"
        />
      </View>
      <View style={{ marginVertical: 30 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 28,
            lineHeight: 40,
            marginLeft: 25,
            width: "90%"
          }}
        >
          Create your own crypto portfolio and manage your assets .
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            lineHeight: 25,
            marginVertical: 20,
            marginLeft: 25,
            width: "90%"
         //   fontFamily: FONTS.regular,
          }}
        >
          Track information for your favorite cryptocurriencies.
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Root")}>
        <View style={styles.startButton}>
          <Text
            style={{
                color: 'white',
                fontSize: 18,
            }}
          >
            Get started
          </Text>

          <View style={styles.startIcon}>
            <Feather name="arrow-right" size={18} color="white" />
          </View>
        </View>
      </TouchableOpacity>
        </View>
    )
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    startButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      backgroundColor: '#4169e1',
      borderRadius: 30,
      marginLeft: 25,
      marginRight: 25,
      marginBottom: 50,
      padding: 10,
      paddingHorizontal: 25,
    },
    startIcon: {
      height: 35,
      width: 35,
      borderRadius: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: 'dimgray',
    },
  });