import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
  getStorage,
} from "firebase/storage";
import emailjs from "emailjs-com";

const searchUser = async (email) => {
  let data = null;
  const usersCollection = collection(db, "users");

  // Create a query to search for documents where the "email" field matches the specified email
  const q = query(usersCollection, where("email", "==", email));

  // Execute the query and get the matching documents
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log("Document ID: ", doc.id);
    // console.log("Data: ", doc.data());
    data = { ...doc.data(), id: doc.id };
  });
  return data;
};

export const login = async (email, password) => {
  let data = await searchUser(email);
  if (data) {
    if (data.password != password) {
      data = null;
    }
  }
  return data;
};
export const signUp = async (name, email, password, type) => {
  let data = await searchUser(email);
  if (data) {
    return {};
  }
  const docRef = await addDoc(collection(db, "users"), {
    name: name,
    email: email,
    password: password,
    type: type,
  });
  const docSnap = await getDoc(docRef);
  return { ...docSnap.data(), id: docRef.id };
};

export const handleUploadImage = (image) => {
  console.log(window.localStorage.getItem("voithy-token"));
  if (image) {
    const storage = getStorage();
    const randomName = `${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 10)}`;
    const imageRef = storageRef(storage, `records/${randomName}`);

    uploadBytes(imageRef, image)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            console.log(url);
            try {
              const userToken = window.localStorage.getItem("voithy-token");
              const docRef = doc(db, "users", userToken);
              console.log(docRef);

              // Update Firestore document using updateDoc
              updateDoc(docRef, {
                records: arrayUnion(url),
              });
              console.log("Item added to the array successfully");
            } catch (error) {
              console.error("Error adding item to the array:", error);
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};

export const getRecords = async (documentId) => {
  try {
    const docRef = doc(db, "users", documentId);
    const docSnap = await getDoc(docRef);
    return docSnap.data().records;
  } catch (error) {
    console.log(error);
  }
};
export const sendEmail = (to_name, to_email, message) => {
  emailjs
    .send(
      "service_kz1710z",
      "template_qkjohpn",
      {
        subject: "VoithyTest",
        to_name: to_name,
        from_name: "voithy-test",
        message: message,
        to_email: to_email,
      },
      "JeI-KTBOpeeRXh6pH"
    )
    .then((response) => {
      return true;
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Error sending email. Please check the console for details.");
    });
};
export const allDoctor = async () => {
  let data = [];
  const usersCollection = collection(db, "users");

  const q = query(usersCollection, where("type", "==", "doctor"));

  // Execute the query and get the matching documents
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log("Document ID: ", doc.id);
    // console.log("Data: ", doc.data());
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
};
export const addAppointment = (data) => {
  try {
    const userToken = window.localStorage.getItem("voithy-token");
    const docRef = doc(db, "users", userToken);
    console.log(docRef);

    // Update Firestore document using updateDoc
    updateDoc(docRef, {
      appointments: arrayUnion(data),
    });
    console.log("Item added to the array successfully");
  } catch (error) {
    console.error("Error adding item to the array:", error);
  }
};
export const getAppointments = async (documentId) => {
  try {
    const docRef = doc(db, "users", documentId);
    const docSnap = await getDoc(docRef);
    return docSnap.data().appointments;
  } catch (error) {
    console.log(error);
  }
};
