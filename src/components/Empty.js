import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Empty = () => {
  return (
    <View style={styles.container}>
      <Text>No se encontraron sugerencias</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 16,
  },
});
