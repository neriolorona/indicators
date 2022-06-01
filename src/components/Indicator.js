import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List, IconButton, Colors} from 'react-native-paper';

const Indicator = ({indicator, goResourceScreen, goDetailScreen}) => {
  return (
    <List.Item
      style={styles.container}
      onPress={() => goResourceScreen(indicator)}
      title={indicator.title}
      titleStyle={styles.title}
      description={indicator.unit}
      descriptionStyle={styles.description}
      right={() => (
        <View style={styles.row}>
          <IconButton
            icon="information-outline"
            color={Colors.blue500}
            size={20}
            onPress={() => goDetailScreen(indicator)}
          />
          <IconButton icon="chevron-right" color={Colors.grey500} size={20} />
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
