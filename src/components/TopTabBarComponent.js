import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { styles } from '../screens/Home/styles';
import { TOP_TAB } from '../utils/Constants';

export const TopTabBarComponent = () => {
  const [tabSelected, setTabSelected] = useState(TOP_TAB.GAME);

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        onPress={() => setTabSelected(TOP_TAB.GAME)}
        style={[
          styles.tabContainerStyle,
          tabSelected == TOP_TAB.GAME ? styles.selectedBorder : {},
        ]}>
        <Text
          style={[
            styles.fontMedium,
            styles.height20,
            tabSelected == TOP_TAB.GAME ? styles.colorPrimary : {},
          ]}>
          {TOP_TAB.GAME}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setTabSelected(TOP_TAB.BADGES)}
        style={[
          styles.tabContainerStyle,
          tabSelected == TOP_TAB.BADGES ? styles.selectedBorder : {},
        ]}>
        <Text
          style={[
            styles.fontMedium,
            styles.height20,
            tabSelected == TOP_TAB.BADGES ? styles.colorPrimary : {},
          ]}>
          {TOP_TAB.BADGES}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
