//LottieFiles for animations
import React, { useEffect } from 'react';
import Routes from './src/routes';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';
import { PlantProps } from './src/libs/storage';

export default function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });
  useEffect(() => {
    // GET NOTIFICATIONS WHEN NOTIFICATE
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      }
    );
    return () => subscription.remove();
    // async function notifications() {
    //   // REMOVE ALL NOTIFICATIONS
    //   await Notifications.cancelAllScheduledNotificationsAsync();
    //   // GET ALL NOTIFICATIONS
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log("--------- Notificações Agendadas ---------")
    //   console.log(data);
    // }
    // notifications();
  }, []);


  if (!fontsLoaded) return <AppLoading />
  return (
    <Routes />
  );
}