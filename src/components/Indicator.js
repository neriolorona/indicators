import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List, IconButton, Colors} from 'react-native-paper';

const Indicator = ({name, title, unit}) => {
  return (
    <List.Item
      style={styles.container}
      onPress={() => console.log('elegiste algo')}
      title={title}
      titleStyle={styles.title}
      description={unit}
      descriptionStyle={styles.description}
      right={() => (
        <View style={styles.row}>
          <IconButton
            icon="information-outline"
            color={Colors.blue500}
            size={20}
            onPress={() => console.log('Pressed')}
          />
          <IconButton
            icon="chevron-right"
            color={Colors.grey500}
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </View>
      )}
    />
  );
};

export default Indicator;

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {},
  description: {
    marginTop: 2,
    color: Colors.blue500,
  },
});
