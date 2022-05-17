// import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  ref
  // deleteDoc,
  // doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXG-HPaGm_Nei3ZaGWDnA9m2ebXbdTmCg",
  authDomain: "adminpolyaksnkrs1.firebaseapp.com",
  projectId: "adminpolyaksnkrs1",
  storageBucket: "adminpolyaksnkrs1.appspot.com",
  messagingSenderId: "148215946467",
  appId: "1:148215946467:web:e9b3aaf07716b7c0ffb9d6",
  measurementId: "G-V0MP8C7PQ3",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const sneakersCol = collection(db, "Sneakers");

export const getProducts = () => {
  return getDocs(sneakersCol).then((response) =>
    response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  );
};

export const addProduct = (product) => {
  addDoc(sneakersCol, product);
};