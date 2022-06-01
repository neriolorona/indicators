import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native-paper';

const Resource = ({resource}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{resource.Fecha}</Text>
      <Text>{resource.Valor}</Text>
    </View>
  );
};

export default Resource;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  date: {
    color: Colors.blue500,
  },
});
