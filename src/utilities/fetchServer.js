import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
const searchUser = async (email, password) => {
  let data = null;
  const usersCollection = collection(db, "users");

  // Create a query to search for documents where the "email" field matches the specified email
  const q = query(usersCollection, where("email", "==", email));

  // Execute the query and get the matching documents
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log("Document ID: ", doc.id);
    // console.log("Data: ", doc.data());
    if (doc.data().password == password) {
      data = { ...doc.data(), id: doc.id };
    }
  });
  return data;
};
export const login = (email, password) => {
  return searchUser(email, password);
};
