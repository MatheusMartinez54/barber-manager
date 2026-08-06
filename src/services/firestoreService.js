import { collection, addDoc, doc, getDoc, getDocs, query, where, updateDoc, serverTimestamp } from 'firebase/firestore';
import { firestore } from '../firebase/firebaseConfig';

const collectionNames = {
  users: 'users',
  clients: 'clients',
  barbers: 'barbers',
  services: 'services',
  appointments: 'appointments',
  schedules: 'schedules',
  settings: 'settings',
  payments: 'payments',
  reviews: 'reviews',
  notifications: 'notifications'
};

export const firebaseCollections = {
  users: collection(firestore, collectionNames.users),
  clients: collection(firestore, collectionNames.clients),
  barbers: collection(firestore, collectionNames.barbers),
  services: collection(firestore, collectionNames.services),
  appointments: collection(firestore, collectionNames.appointments),
  schedules: collection(firestore, collectionNames.schedules),
  settings: collection(firestore, collectionNames.settings),
  payments: collection(firestore, collectionNames.payments),
  reviews: collection(firestore, collectionNames.reviews),
  notifications: collection(firestore, collectionNames.notifications)
};

export async function createDocument(collectionName, data) {
  const collectionRef = firebaseCollections[collectionName];
  const document = {
    ...data,
    active: true,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };
  return await addDoc(collectionRef, document);
}

export async function updateDocument(collectionName, id, data) {
  const docRef = doc(firestore, collectionName, id);
  await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp()
  });
}

export async function getDocument(collectionName, id) {
  const docRef = doc(firestore, collectionName, id);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
}

export async function getCollection(collectionName, filter = null) {
  const collectionRef = firebaseCollections[collectionName];
  if (!filter) {
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  const q = query(collectionRef, where(filter.field, filter.operator, filter.value));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
