import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Alert} from 'react-native';
import Loading from '../components/Loading';
import Empty from '../components/Empty';
import Resource from '../components/Resource';

const API_URL = 'https://api.cmfchile.cl/api-sbifv3/recursos_api';
const API_KEY = '8999a45f5d2b4a40b06d9c955c2bb786971601af';

const Resources = ({route}) => {
  const indicator = route.params.indicator;
  const [isLoading, setIsLoading] = useState(false);
  const [resources, setResources] = useState([]);

  const getResources = () => {
    setIsLoading(true);
    axios
      .get(
        `${API_URL}/${indicator.name}/posteriores/2020?apikey=${API_KEY}&formato=json`,
      )
      .then(response => {
        const [data] = Object.values(response.data);
        setResources(data.reverse());
        setIsLoading(false);
      })
      .catch(err => {
        Alert.alert('Sucedió un error al traer los recursos del indicador');
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getResources();
  }, []);

  const renderItem = ({item}) => (
    <Resource resource={item} indicator={indicator} />
  );
  const renderEmpty = () => <Empty />;
  const renderSeparator = () => <View style={styles.separator} />;

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    return (
      <FlatList
        style={styles.container}
        data={resources}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={renderSeparator}
      />
    );
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

export default Resources;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  separator: {
    height: 4,
  },
});
