import { addDoc, collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
import { RSVPData } from '../types/rsvp';
import { db } from '../firebase/firebase';

export const submitRSVP = async (data: RSVPData): Promise<void> => {
  await addDoc(collection(db, "asistentes"), {
    firstName: data.firstName,
    lastName: data.lastName,
    createdAt: Timestamp.now(),
  });
};

export const getRSVPs = async (): Promise<RSVPData[]> => {
  const q = query(
    collection(db, "asistentes"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    firstName: doc.data().firstName,
    lastName: doc.data().lastName,
    createdAt: doc.data().createdAt.toDate(),
  }));
};
