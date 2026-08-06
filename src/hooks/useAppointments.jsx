import { useEffect, useState } from 'react';
import { getCollection } from '../services/firestoreService';

export function useAppointments(clientId) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!clientId) {
      setLoading(false);
      return;
    }

    async function loadAppointments() {
      setLoading(true);
      const data = await getCollection('appointments', { field: 'clientId', operator: '==', value: clientId });
      setAppointments(data);
      setLoading(false);
    }

    loadAppointments();
  }, [clientId]);

  return { appointments, loading };
}
