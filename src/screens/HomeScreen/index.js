import { View, Text, SafeAreaView, ScrollView, Image, TextInput } from 'react-native'
import { StripeProvider } from "@stripe/stripe-react-native";
import Payment from '../../components/Payment/Payment'
import HomeTrending from './HomeTrending';

const HomeScreen = () => {
    return (
        <SafeAreaView style={{flex:1}}>
                    <ScrollView style={{flex:1}}>
                        <View>
                            <View style={{alignItems:'center',justifyContent:'center',paddingTop:50}}>
                                <Image 
                                source={require('../../../assets/images/wallet.png')}
                                style={{width:220,height:220}}/>
                                <Text style={{fontSize:20,fontWeight:"600",color:"white"}}>Welcome to CryptoWallet</Text>
                                <Text style={{fontSize:16,fontWeight:"400",color:"white",paddingTop:10}}>Make your first investment today</Text>
                            </View>
                            <StripeProvider publishableKey="pk_test_51L9UxHKfw8HReCDqw1aYLu93mAnx2WLvNZbzVHC4QfWAThGnTJoYFbHNC9ncJhsciQLTGntDqILvQ5nmiImKiypj00d457bOj0">
                                <Payment />
                            </StripeProvider>
                            <View style={{alignItems:'center',justifyContent:'center', paddingTop:10}}>
                                <Text style={{fontSize:14,fontWeight:"200",color:"white"}}>*Minimum deposit is 10EUR/50RON</Text>
                            </View>
                            <View style={{paddingTop:30,paddingHorizontal:20}}>
                                <HomeTrending/>
                            </View>
                        </View>
                    </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;