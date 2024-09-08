import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Platform, StatusBar, useColorScheme, useWindowDimensions, ScrollView } from 'react-native';

export default function App() {
  const { width, height } = useWindowDimensions(); // Sử dụng hook useWindowDimensions để lấy kích thước màn hình
  const colorScheme = useColorScheme(); // Phát hiện chế độ tối hoặc sáng của hệ điều hành

  const [isLandscape, setIsLandscape] = useState(width > height);

  useEffect(() => {
    setIsLandscape(width > height);
  }, [width, height]); // Cập nhật trạng thái khi kích thước màn hình thay đổi

  const imageWidth = width * 0.8; // Chiều rộng hình ảnh là 80% chiều rộng màn hình
  const imageHeight = isLandscape ? height * 0.4 : width * 0.6; // Điều chỉnh chiều cao hình ảnh theo chế độ màn hình

  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor={Platform.select({
          ios: 'lightblue', // Màu nền cho thanh trạng thái trên iOS
          android: 'darkgrey', // Màu nền cho thanh trạng thái trên Android
        })}
      />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Điều chỉnh độ lệch của bàn phím cho iOS
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
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
              placeholderTextColor={colorScheme === 'dark' ? 'lightgrey' : 'red'} // Màu chữ placeholder
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
              style={[styles.button, { width: isLandscape ? width * 0.4 : width * 0.8 - 20, height: 50 }]} // Đặt độ rộng và chiều cao của mỗi nút
              onPress={() => alert('Button 1 pressed')}
            >
              <Text style={styles.buttonText}>Button 1</Text>
            </TouchableOpacity>

            {/* Nút 2 */}
            <TouchableOpacity
              style={[styles.button, { width: isLandscape ? width * 0.4 : width * 0.8 - 20, height: 50 }]} // Đặt độ rộng và chiều cao của mỗi nút
              onPress={() => alert('Button 2 pressed')}
            >
              <Text style={styles.buttonText}>Button 2</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.select({
      ios: 'lightblue', // Màu nền cho iOS
      android: 'lightgreen', // Màu nền cho Android
    }),
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between', // Đẩy các phần tử lên trên và dưới cùng
    alignItems: 'center',
    padding: Platform.select({
      ios: 20, // Padding cho iOS
      android: 10, // Padding cho Android
    }),
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
    paddingHorizontal: Platform.select({
      ios: 15, // Padding ngang cho iOS
      android: 10, // Padding ngang cho Android
    }),
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
