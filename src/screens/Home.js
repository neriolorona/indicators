import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Empty from '../components/Empty';
import Loading from '../components/Loading';
import Indicator from '../components/Indicator';

import api from '../api/indicator';

const Home = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [indicators, setIndicators] = useState([]);

  const getIndicators = async () => {
    setIsLoading(true);
    const data = await api.list();
    if (data) {
      setIndicators(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getIndicators();
  }, []);

  const goResourceScreen = indicator =>
    navigation.navigate('ResourceScreen', {indicator: indicator});
  const renderItem = ({item}) => (
    <Indicator indicator={item} goResourceScreen={goResourceScreen} />
  );
  const renderEmpty = () => <Empty />;

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }
    return (
      <FlatList
        data={indicators}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
      />
    );
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
