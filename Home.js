import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';

export default function Home({ navigation }) {
  const { width } = useWindowDimensions(); // Lấy chiều rộng của màn hình hiện tại

  // Đặt chiều rộng nút động theo 80% chiều rộng màn hình
  const buttonWidth = width * 0.8;

  return (
    <ScrollView
      contentContainerStyle={styles.container} // Đảm bảo container có thể cuộn
      keyboardShouldPersistTaps="handled" // Đảm bảo các nút có thể được nhấn khi bàn phím mở
    >
      {/* Nút 1 */}
      <TouchableOpacity
        style={[styles.button, { width: buttonWidth }]} // Đặt chiều rộng động
        onPress={() => navigation.navigate('Ex1')}  // Điều hướng sang Ex1.js
      >
        <Text style={styles.buttonText}>exercise 1</Text>
      </TouchableOpacity>

      {/* Nút 2 */}
      <TouchableOpacity
        style={[styles.button, { width: buttonWidth }]} // Đặt chiều rộng động
        onPress={() => navigation.navigate('Ex2')} 
      >
        <Text style={styles.buttonText}>exercise 2</Text>
      </TouchableOpacity>

      {/* Nút 3 */}
      <TouchableOpacity
        style={[styles.button, { width: buttonWidth }]} // Đặt chiều rộng động
        onPress={() => navigation.navigate('Ex3')}
      >
        <Text style={styles.buttonText}>exercise 3</Text>
      </TouchableOpacity>

      {/* Nút 4 */}
      <TouchableOpacity
        style={[styles.button, { width: buttonWidth }]} // Đặt chiều rộng động
        onPress={() => navigation.navigate('Ex4')}
      >
        <Text style={styles.buttonText}>exercise 4</Text>
      </TouchableOpacity>

       {/* Nút 5 */}
       <TouchableOpacity
        style={[styles.button, { width: buttonWidth }]} // Đặt chiều rộng động
        onPress={() => navigation.navigate('Ex5')}
      >
        <Text style={styles.buttonText}>exercise 5</Text>
      </TouchableOpacity>

       {/* Nút 6 */}
       <TouchableOpacity
        style={[styles.button, { width: buttonWidth }]} // Đặt chiều rộng động
        onPress={() => navigation.navigate('Ex6')}
      >
        <Text style={styles.buttonText}>exercise 6</Text>
      </TouchableOpacity>

       {/* Nút 7 */}
       <TouchableOpacity
        style={[styles.button, { width: buttonWidth }]} // Đặt chiều rộng động
        onPress={() => navigation.navigate('Ex7')}
      >
        <Text style={styles.buttonText}>exercise 7</Text>
      </TouchableOpacity>

       {/* Nút 8 */}
       <TouchableOpacity
        style={[styles.button, { width: buttonWidth }]} // Đặt chiều rộng động
        onPress={() => navigation.navigate('Ex8')}
      >
        <Text style={styles.buttonText}>exercise 8</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 20,
  },
  button: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 15,
    marginVertical: 10, // Tạo khoảng cách giữa các nút theo chiều dọc
    borderRadius: 20, // Bo tròn góc nút
    justifyContent: 'center',
    alignItems: 'center', // Căn giữa text trong nút
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
