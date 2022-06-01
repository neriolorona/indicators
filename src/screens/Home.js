import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, FlatList, Platform} from 'react-native';
import Empty from '../components/Empty';
import Loading from '../components/Loading';
import Indicator from '../components/Indicator';
import {Colors} from 'react-native-paper';
import {request, PERMISSIONS} from 'react-native-permissions';

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

  const getLocationPermission = useCallback(async () => {
    if (Platform.OS === 'ios') {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log('Permission in ios ' + response);

      if (response === 'granted') {
        console.log('permiso otorgado en iOS');
      } else {
        console.log('permiso no concedido en iOS');
      }
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('Permissions in android ' + response);

      if (response === 'granted') {
        console.log('permiso otorgado en Android');
      } else {
        console.log('permiso otorgado en Android');
      }
    }
  }, []);

  useEffect(() => {
    getIndicators();
  }, []);

  useEffect(() => {
    getLocationPermission();
  }, []);

  const goResourceScreen = indicator =>
    navigation.navigate('ResourceScreen', {indicator: indicator});
  const goDetailScreen = indicator =>
    navigation.navigate('DetailScreen', {indicator: indicator});
  const renderItem = ({item}) => (
    <Indicator
      indicator={item}
      goResourceScreen={goResourceScreen}
      goDetailScreen={goDetailScreen}
    />
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
    backgroundColor: Colors.white,
  },
});
