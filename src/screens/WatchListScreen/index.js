import { useState, useEffect } from "react";
import { FlatList, RefreshControl, Text } from "react-native";
import { coinsListByIdRequest } from "../../services";
import CoinItem from "../../components/CoinItem";
import { useWatchList } from "../../contexts/WatchListContext";

const WatchListScreen = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { coinsWatchList } = useWatchList();

  const fetchCoinsList = async (page) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const coinsData = await coinsListByIdRequest(
      coinsWatchList.toString(),
      page,
    );
    setCoins(coinsData);
    setIsLoading(false);
  };

  useEffect(() => {
    if (coinsWatchList && coinsWatchList.length) {
      fetchCoinsList();
    }
  }, []);

  if (coinsWatchList.length)
  return (
    <FlatList
      data={coins}
      keyExtractor={(item) => `w-${item.id}`}
      renderItem={({ item }) => <CoinItem coinData={item} />}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={fetchCoinsList}
          tintColor="white"
        />
      }
    />
  );
  else return(
    <Text style={{
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 35,
      marginLeft: 20,
      }}>
        Your Watchlist is currently empty.
    </Text>
  );
};

export default WatchListScreen;
