import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

export default function App() {
  // Lấy chiều rộng màn hình
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      {/* Nút 1 */}
      <TouchableOpacity
        style={[styles.button, { width: windowWidth * 0.5 - 20 }]} // Đặt độ rộng của mỗi nút bằng 50% màn hình, trừ đi margin
        onPress={() => alert('Button 1 pressed')}
      >
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>

      {/* Nút 2 */}
      <TouchableOpacity
        style={[styles.button, { width: windowWidth * 0.5 - 20 }]} // Đặt độ rộng của mỗi nút bằng 50% màn hình, trừ đi margin
        onPress={() => alert('Button 2 pressed')}
      >
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Sắp xếp các button theo hàng ngang
    justifyContent: 'center', // Căn giữa theo chiều ngang
    alignItems: 'center', // Căn giữa theo chiều dọc
    backgroundColor: 'light',
    padding: 10,
  },
  button: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 15,
    margin: 10, // Tạo khoảng cách giữa các nút
    borderRadius: 10, // Bo tròn góc nút
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
