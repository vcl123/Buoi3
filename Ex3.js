import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

export default function App() {
  const [isLandscape, setIsLandscape] = useState(Dimensions.get('window').width > Dimensions.get('window').height);

  useEffect(() => {
    const onChange = ({ window }) => {
      setIsLandscape(window.width > window.height);
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
  }, []);

  const windowWidth = Dimensions.get('window').width;
  const imageWidth = windowWidth * 0.8; // Chiều rộng hình ảnh là 80% chiều rộng màn hình
  const imageHeight = imageWidth * 1; // Chiều cao điều chỉnh theo tỷ lệ 4:3

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hình ảnh */}
      <Image
        source={require('./assets/image1.jpg')} // Đường dẫn đến hình ảnh cục bộ
        style={[styles.image, { width: imageWidth, height: imageHeight }]} // Điều chỉnh chiều rộng và chiều cao của hình ảnh
      />

      {/* Container chứa các nút */}
      <View style={[styles.buttonContainer, { flexDirection: isLandscape ? 'row' : 'column' }]}>
        {/* Nút 1 */}
        <TouchableOpacity
          style={[styles.button, { width: isLandscape ? windowWidth * 0.5 - 10 : windowWidth * 0.8 - 20 }]} // Đặt độ rộng của mỗi nút
          onPress={() => alert('Button 1 pressed')}
        >
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>

        {/* Nút 2 */}
        <TouchableOpacity
          style={[styles.button, { width: isLandscape ? windowWidth * 0.5 - 10 : windowWidth * 0.8 - 20 }]} // Đặt độ rộng của mỗi nút
          onPress={() => alert('Button 2 pressed')}
        >
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    width: '100%', // Đảm bảo các nút chiếm toàn bộ chiều rộng của container
    alignItems: 'center', // Căn giữa các nút theo chiều ngang
  },
  button: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 15,
    margin: 10, // Khoảng cách giữa các nút
    borderRadius: 10, // Bo tròn góc nút
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
