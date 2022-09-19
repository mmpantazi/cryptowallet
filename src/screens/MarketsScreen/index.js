import { useState, useEffect } from "react";
import { FlatList, RefreshControl, View, Text, TextInput, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { coinsListRequest } from "../../services";
import CoinItem from "../../components/CoinItem";

const HeaderText = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 25px;
  letter-spacing: 1px;
  color: white;
  margin-left: 10px;
  margin-bottom: 5px;
`;

const MarketsScreen = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchCoinsList = async (page) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const coinsData = await coinsListRequest(page);
    coinsData.length && setCoins((prevState) => [...prevState, ...coinsData]);
    setIsLoading(false);
  };

  const refetchCoinsList = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const coinsData = await coinsListRequest();
    setCoins(coinsData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCoinsList();
  }, []);

  return (
    <View>
      <View style={styles.header}>
          <Text style={styles.title}>
                Markets
          </Text>
          <TextInput
            value={search}
            style={styles.searchInput}
            placeholder="Search a coin"
            placeholderTextColor="#fff"
            onChangeText={(text) => setSearch(text)}
          />   
      </View>
      <FlatList
        data={coins.filter((coin) =>
            coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
            coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `c-${item.id}`}
        extraData={coins}
        renderItem={({ item }) => <CoinItem coinData={item} />}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refetchCoinsList}
            tintColor="white"
          />
        }
        onEndReached={() => {
          fetchCoinsList(coins.length / 50 + 1);
        }}
      />
    </View>
  );
};

export default MarketsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
  },
  title: {
    fontFamily: "Roboto_400Regular",
    fontSize: 25,
    color: 'white',
  },
  searchInput: {
    color: 'white',
    fontSize: 15,
    width: "40%",
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
});
