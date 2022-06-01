import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Colors} from 'react-native-paper';

const WIDTH_SCREEN = Dimensions.get('window').width;

const LineChartComponent = ({resources}) => {
  const dates = resources.map(item => item.Fecha);
  const values = resources.map(item => parseFloat(item.Valor));
  console.log('values', values);

  return (
    <View>
      <LineChart
        data={{
          labels: dates,
          datasets: [
            {
              data: values,
            },
          ],
        }}
        width={WIDTH_SCREEN}
        height={280}
        yAxisLabel="$"
        yAxisInterval={1} // optional, defaults to 1
        onDataPointClick={index => console.log('Hiciste click en este', index)}
        formatXLabel={valueX => valueX.substring(8, 10)}
        chartConfig={{
          backgroundColor: Colors.blue500,
          backgroundGradientFrom: Colors.blue500,
          backgroundGradientTo: Colors.blue700,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: Colors.grey500,
          },
        }}
        bezier
        style={styles.linechart}
      />
    </View>
  );
};

export default LineChartComponent;

const styles = StyleSheet.create({
  linechart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
