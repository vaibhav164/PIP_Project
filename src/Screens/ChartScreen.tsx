import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
export const ChartScreen = ({route, navigation}) => {
  const {value} = route.params;
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.1,
          paddingBottom: '4%',
          justifyContent: 'flex-end',
          paddingLeft: '4%',
          alignItems: 'flex-start',
          height: '100%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            console.log('sdfsdd', value);
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#D61C4E'}}>
            {'<-'}GoBack
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.9,
          alignItems: 'center',
        }}>
        <View
          style={{
            borderColor: '#0096FF',
            borderWidth: 2,
            justifyContent: 'center',
            paddingTop: '10%',
            alignItems: 'center',
            height: '30%',
            borderRadius: 30,
            width: '80%',
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              position: 'absolute',
              paddingBottom: '30%',
            }}>
            ${value}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#0096FF',
              width: 150,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 40,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: '700',
                  fontStyle: 'italic',
                  color: 'white',
                }}>
                Pay
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
