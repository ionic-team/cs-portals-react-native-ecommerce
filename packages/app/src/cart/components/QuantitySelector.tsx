import React from 'react';
import { Image, StyleSheet, Text, Pressable, View } from 'react-native';
import { Colors, setForegroundColor } from '../../shared';

type Props = {
  onAdd: () => void;
  onSubtract: () => void;
  quantity: number;
};

export const QuantitySelector: React.FC<Props> = ({
  onAdd,
  onSubtract,
  quantity,
}) => (
  <View style={styles.container}>
    <Text
      style={[
        setForegroundColor(Colors.medium),
        styles.fontSize,
        styles.label,
      ]}>
      Qty:
    </Text>
    <Pressable onPress={() => onSubtract()}>
      <Image
        style={styles.icon}
        source={require('../../assets/images/remove-circle-outline.png')}
      />
    </Pressable>
    <Text style={[setForegroundColor(Colors.medium), styles.fontSize]}>
      {quantity}
    </Text>
    <Pressable onPress={() => onAdd()}>
      <Image
        style={styles.icon}
        source={require('../../assets/images/add-circle-outline.png')}
      />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 18,
    height: 18,
    tintColor: Colors.medium,
    marginHorizontal: 4,
  },
  fontSize: { fontSize: 16 },
  label: {
    marginRight: 10,
  },
});
