import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native-paper';

const Resource = ({resource, indicator}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{resource.Fecha}</Text>
      <Text>
        {indicator.unit === 'Pesos' ? '$' : ''}
        {resource.Valor}
        {indicator.unit === 'Porcentaje' ? '%' : ''}
      </Text>
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
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.grey200,
  },
  date: {
    color: Colors.blue500,
  },
});
