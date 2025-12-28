import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const logButtonClick = async (buttonName: string) => {
  try {
    await addDoc(collection(db, "clicks"), {
      buttonName: buttonName,
      timestamp: serverTimestamp(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    });
    console.debug(`Click tracked: ${buttonName}`);
  } catch (error) {
    console.error("Error tracking click: ", error);
  }
};
