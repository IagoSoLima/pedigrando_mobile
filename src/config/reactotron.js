import Reactotron, {overlay} from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({host: '192.168.1.6'})
    .useReactNative()
    .use(overlay())
    .connect();
  console.tron = tron;
  tron.clear();
}
