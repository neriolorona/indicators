import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import axios from 'axios';
import DetailResource from '../components/Detail';
import {Colors} from 'react-native-paper';

const API_URL = 'https://api.cmfchile.cl/api-sbifv3/recursos_api';
const API_KEY = '8999a45f5d2b4a40b06d9c955c2bb786971601af';

const Detail = ({navigation, route}) => {
  const indicator = route.params.indicator;
  const [isLoading, setIsLoading] = useState(false);
  const [resources, setResources] = useState([]);

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

  return (
    <View style={styles.container}>
      <DetailResource resource={resources[0]} />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
