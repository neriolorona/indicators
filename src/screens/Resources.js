import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Loading from '../components/Loading';
import Empty from '../components/Empty';
import Resource from '../components/Resource';
import useResources from '../hooks/useResources';

const Resources = ({navigation, route}) => {
  const indicator = route.params.indicator;
  navigation.setOptions({
    title:
      indicator.name.substring(0, 1).toUpperCase() +
      indicator.name.substring(1),
  });
  const {isLoading, data, getMore} = useResources({
    indicator,
    limit: 30,
  });

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
