import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native-paper';

const Detail = ({resources, selectedIndex}) => {
  const resource = resources[selectedIndex];
  return (
    <View style={styles.container}>
      <Text style={styles.valor}>
        {resource.unit === 'Pesos' ? '$' : ''}
        {resource.Valor}
        {resource.unit === 'Porcentaje' ? '%' : ''}
      </Text>
      <View style={styles.row}>
        <Text>Nombre</Text>
        <Text>{resource.title}</Text>
      </View>
      <View style={styles.row}>
        <Text>Fecha</Text>
        <Text>{resource.Fecha}</Text>
      </View>
      <View style={styles.row}>
        <Text>Unidad de medida</Text>
        <Text>{resource.unit}</Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
    marginHorizontal: 20,
  },
  valor: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.blue700,
    marginBottom: 8,
  },
});
