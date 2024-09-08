import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native';

export default function App() {
  // Lấy chiều rộng màn hình
  const windowWidth = Dimensions.get('window').width;
  const imageWidth = windowWidth * 0.8; // Chiều rộng hình ảnh là 80% chiều rộng màn hình
  const imageHeight = imageWidth * 1; // Chiều cao điều chỉnh theo tỷ lệ 4:3

  return (
    <View style={styles.container}>
      {/* Hình ảnh */}
      <Image
        source={require('./assets/image1.jpg')} // Đường dẫn đến hình ảnh cục bộ
        style={[styles.image, { width: imageWidth, height: imageHeight }]} // Điều chỉnh chiều rộng và chiều cao của hình ảnh
      />

      {/* Container chứa các nút */}
      <View style={styles.buttonContainer}>
        {/* Nút 1 */}
        <TouchableOpacity
          style={[styles.button, { width: windowWidth * 0.5 - 15 }]} // Đặt độ rộng của mỗi nút bằng một nửa chiều rộng màn hình, trừ đi margin
          onPress={() => alert('Button 1 pressed')}
        >
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>

        {/* Nút 2 */}
        <TouchableOpacity
          style={[styles.button, { width: windowWidth * 0.5 - 15 }]} // Đặt độ rộng của mỗi nút bằng một nửa chiều rộng màn hình, trừ đi margin
          onPress={() => alert('Button 2 pressed')}
        >
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Sắp xếp các phần tử theo cột
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
    backgroundColor: 'lightblue',
    padding: 10,
  },
  image: {
    marginBottom: 20, // Khoảng cách giữa hình ảnh và các nút
    resizeMode: 'cover', // Đảm bảo hình ảnh được điều chỉnh phù hợp mà không bị biến dạng
    borderRadius: 10, // Tùy chọn: Bo tròn góc cho hình ảnh
  },
  buttonContainer: {
    flexDirection: 'row', // Sắp xếp các nút theo hàng ngang
    width: '100%', // Đảm bảo các nút chiếm toàn bộ chiều rộng của container
  },
  button: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 15,
    marginHorizontal: 5, // Khoảng cách giữa các nút
    borderRadius: 10, // Bo tròn góc nút
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
