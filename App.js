import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import Routes from "./src/routes";
import AppProvider from './src/contexts';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppProvider>
      <Routes/>
    </AppProvider>    
  );
}

