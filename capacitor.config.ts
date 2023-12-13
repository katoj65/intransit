import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.intransit',
  appName: 'intransit',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
