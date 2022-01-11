import { CapacitorConfig } from '@capacitor/cli';
import { SplashScreen } from '@capacitor/splash-screen';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'nutritionApp',
  webDir: 'www',
  bundledWebRuntime: false,

  plugins: {
    SplashScreen: {
      launchShowDuration: 5000,
      launchAutoHide: true,
      androidScaleType: "CENTER_CROP",
      androidSplashResourceName: "splash",
      splashFullScreen: false,
      splashImmersive: false
    },
    android: {
      allowMixedContent: true
    }
  },
};

export default config;
