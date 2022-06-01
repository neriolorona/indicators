import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Colors} from 'react-native-paper';
import DetailResource from '../components/Detail';
import LineChart from '../components/LineChart';
import Loading from '../components/Loading';
import Empty from '../components/Empty';
import {getDetail} from '../redux/slices/resource';
import {useDispatch, useSelector} from 'react-redux';

const Detail = ({navigation, route}) => {
  const indicator = route.params.indicator;
  navigation.setOptions({title: indicator.name.toUpperCase()});
  const dispatch = useDispatch();
  const {isLoading, detail} = useSelector(state => state.resource);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    dispatch(getDetail(indicator));
  }, [dispatch, indicator]);

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (detail.length === 0) {
      return <Empty />;
    }

    return (
      <>
        <DetailResource resources={detail} selectedIndex={selectedIndex} />
        <LineChart resources={detail} setSelectedIndex={setSelectedIndex} />
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
