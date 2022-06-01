import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Loading from '../components/Loading';
import Empty from '../components/Empty';
import Resource from '../components/Resource';
import {getResources} from '../redux/slices/resource';
import {useDispatch, useSelector} from 'react-redux';

const Resources = ({navigation, route}) => {
  const indicator = route.params.indicator;
  navigation.setOptions({title: indicator.name.toUpperCase()});
  const dispatch = useDispatch();
  const {isLoading, resources} = useSelector(state => state.resource);
  const [data, setData] = useState([]);

  const getMore = useCallback(() => {
    const newData = resources.slice(data.length, data.length + 30);
    if (newData.length > 0) {
      const updatedData = [...data, ...newData];
      setData(updatedData);
    }
  }, [resources, data]);

  useEffect(() => {
    dispatch(getResources(indicator));
  }, [dispatch, indicator]);

  useEffect(() => {
    if (resources.length > 0) {
      setData(resources.slice(0, 30));
    }
  }, [resources]);

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
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={renderSeparator}
        onEndReached={getMore}
        onEndReachedThreshold={1}
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
