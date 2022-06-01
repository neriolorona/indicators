import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import axios from 'axios';
import {Colors} from 'react-native-paper';
import DetailResource from '../components/Detail';
import LineChart from '../components/LineChart';
import Loading from '../components/Loading';
import Empty from '../components/Empty';

const API_URL = 'https://api.cmfchile.cl/api-sbifv3/recursos_api';
const API_KEY = '8999a45f5d2b4a40b06d9c955c2bb786971601af';

const Detail = ({navigation, route}) => {
  const indicator = route.params.indicator;
  const [isLoading, setIsLoading] = useState(false);
  const [resources, setResources] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  console.log('selectedIndex', selectedIndex);

  const getResources = () => {
    axios
      .get(
        `${API_URL}/${indicator.name}/posteriores/2020?apikey=${API_KEY}&formato=json`,
      )
      .then(response => {
        const [data] = Object.values(response.data);
        const sliced = data.reverse().slice(0, 10);
        const updated = sliced.map(item => {
          return {
            ...item,
            name: indicator.name,
            title: indicator.title,
            unit: indicator.unit,
            indicatorId: indicator.id,
          };
        });
        setResources(updated);
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

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (resources.length === 0) {
      return <Empty />;
    }

    return (
      <>
        <DetailResource resources={resources} selectedIndex={selectedIndex} />
        <LineChart resources={resources} setSelectedIndex={setSelectedIndex} />
      </>
    );
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
