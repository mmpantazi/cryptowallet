import { useStripe } from "@stripe/stripe-react-native";
import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";

const Payment = () => {
  const stripe = useStripe();

  const pay = async () => {
    try {
      // sending request
      const response = await fetch("http://192.168.100.3:8080/pay", {
        method: "POST",
      });
      const data = await response.json();
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
      });
      if (initSheet.error) return Alert.alert(initSheet.error.message);
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);
      Alert.alert("Thank you for your payment!");
    } catch (err) {
      console.error(err);
      Alert.alert("Something went wrong, try again later!");
    }
  };

  return (
    <View style={{alignItems:'center',justifyContent:'center',paddingTop:30}}>
        <TouchableOpacity style={{ backgroundColor:"#4169e1", borderRadius:8, paddingVertical:17, paddingHorizontal:100 }} onPress={pay}>
            <Text style={{fontSize:16,color:"white",fontWeight:"700",alignSelf:'center'}}>Fund Account</Text>
        </TouchableOpacity>
    </View>
);
};

export default Payment;