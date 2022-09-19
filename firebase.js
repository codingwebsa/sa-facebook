import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAVdD_4NerL_yDN-MibKaLC2b7P5J_dZs",
  authDomain: "facebook-2-9ff35.firebaseapp.com",
  projectId: "facebook-2-9ff35",
  storageBucket: "facebook-2-9ff35.appspot.com",
  messagingSenderId: "902507442953",
  appId: "1:902507442953:web:829b23b7f9dfb6c15319d8",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const colRef = collection(db, "posts");

export { db, storage, colRef };
