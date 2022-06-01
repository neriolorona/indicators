import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native-paper';
import DetailResource from '../components/Detail';
import LineChart from '../components/LineChart';
import Loading from '../components/Loading';
import Empty from '../components/Empty';
import useResources from '../hooks/useResources';

const Detail = ({navigation, route}) => {
  const indicator = route.params.indicator;
  navigation.setOptions({
    title:
      indicator.name.substring(0, 1).toUpperCase() +
      indicator.name.substring(1),
  });
  const {isLoading, data} = useResources({indicator, limit: 10});
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (data.length === 0) {
      return <Empty />;
    }

    return (
      <>
        <DetailResource
          resources={data}
          selectedIndex={selectedIndex}
          indicator={indicator}
        />
        <LineChart
          resources={data}
          setSelectedIndex={setSelectedIndex}
          indicator={indicator}
        />
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
