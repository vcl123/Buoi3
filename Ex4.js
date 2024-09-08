import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

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
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.imageContainer}>
          {/* Hình ảnh */}
          <Image
            source={require('./assets/image1.jpg')} // Đường dẫn đến hình ảnh cục bộ
            style={[styles.image, { width: imageWidth, height: imageHeight }]} // Điều chỉnh chiều rộng và chiều cao của hình ảnh
          />
        </View>

        {/* Container chứa trường nhập liệu và nút Submit */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            placeholderTextColor="red" // Màu chữ placeholder
            keyboardType="default"
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => alert('Submit pressed')}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>

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
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between', // Đẩy các phần tử lên trên và dưới cùng
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
  },
  innerContainer: {
    flex: 1,
    width: '100%',
  },
  imageContainer: {
    justifyContent: 'center', // Căn giữa hình ảnh theo chiều dọc
    alignItems: 'center', // Căn giữa hình ảnh theo chiều ngang
    marginBottom: 20, // Khoảng cách giữa hình ảnh và phần tử phía dưới
  },
  image: {
    resizeMode: 'cover', // Đảm bảo hình ảnh được điều chỉnh phù hợp mà không bị biến dạng
    borderRadius: 10, // Bo tròn góc cho hình ảnh
  },
  inputContainer: {
    flexDirection: 'row', // Xếp hàng ngang cho ô nhập liệu và nút Submit
    alignItems: 'center', // Căn giữa theo chiều dọc
    width: '100%', // Đảm bảo container chiếm toàn bộ chiều rộng
    paddingHorizontal: 10, // Padding bên trái và phải
  },
  input: {
    height: 40,
    width: '80%', // Chiếm 80% chiều rộng của container
    backgroundColor: 'lightyellow', // Màu nền của ô nhập liệu
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10, // Khoảng cách giữa ô nhập liệu và nút Submit
    color: 'red', // Màu chữ trong ô nhập liệu
  },
  submitButton: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
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
