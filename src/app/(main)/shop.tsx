import React from 'react';
import { Text, View } from 'react-native';
import { colors } from 'src/constants/colors';
import { rf } from 'src/utils/size';

export default function shop() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: rf(3), fontWeight: '700', color: colors.coolGray900 }}>Love</Text>
    </View>
  );
}
