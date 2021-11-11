import * as Font from 'expo-font';

export default async function useFonts() {
  await Font.loadAsync({
    limelight: require('../assets/fonts/Inter-VariableFont_slnt,wght.ttf'),
    indie: require('../assets/fonts/Inter-VariableFont_slnt,wght.ttf'),
  });
}
