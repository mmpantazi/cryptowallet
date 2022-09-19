import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { trendingCoinsRequest } from "../../services";

const HomeTrending = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [coins, setCoins] = useState([]);

  const fetchCoinsList = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const coinsData = await trendingCoinsRequest();
    setCoins(coinsData);
    setIsLoading(false);
  };

  useEffect( () => {
    fetchCoinsList();
  }, []
  )

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
          paddingTop: 10,
        }}
      >
        Trending
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 20 }}
      >
        {coins.map((coin) => (
          <View key={coin.id}>
            <View
              style={{
                color: 'white',
                width: 150,
                height: 150,
                borderWidth: 0.5,
                borderColor: "#ddd",
                borderRadius: 10,
                marginRight: 15,
                paddingHorizontal: 15,
              }}
            > 
            <View>
                <Image
                source={{uri:coin.image}}
                style={{width:35,height:35,marginTop:15}}/>
            </View>

            <View style={{marginTop:15,flexDirection:'row',alignItems:'center'}}>
                  <Text style={{
                              color:"white",
                              fontSize: 16,
                              fontWeight: "500",
                            }}>{coin.symbol.toUpperCase()}</Text>
                  <Text style={{
                              fontSize: 12,
                              fontWeight: "400",
                              paddingLeft:5,
                              color: "white",
                            }}>${coin.current_price}</Text>
              </View>
              
              <View style={{paddingTop:15}}>
              <Text style={{
                              fontSize: 15,
                              fontWeight: "400",
                              color: coin.price_change_percentage_24h < 0 ? "#ea3943" : "#16c784"
                            }}>{coin.price_change_percentage_24h.toFixed(2)}%</Text>
              </View>

              
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeTrending;
