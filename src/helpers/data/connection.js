import { initializeApp } from 'firebase/app';
import apiKeys from '../apiKeys';

const firebaseApp = () => {
  initializeApp(apiKeys.firebaseConfig);
};

export default firebaseApp;
