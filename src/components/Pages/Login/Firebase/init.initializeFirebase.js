import { initializeApp } from "firebase/app";
import firebaseConfig from "./init.config";

const initializeFirebase = () => {
  return initializeApp(firebaseConfig);
};

export default initializeFirebase;
