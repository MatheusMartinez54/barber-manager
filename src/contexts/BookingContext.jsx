import { createContext, useContext, useState, useCallback } from 'react';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('barbershop_bookings');
    return saved ? JSON.parse(saved) : [];
  });

  const addBooking = useCallback(
    booking => {
      const newBooking = {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        status: 'Confirmado',
        ...booking
      };
      const updated = [...bookings, newBooking];
      setBookings(updated);
      localStorage.setItem('barbershop_bookings', JSON.stringify(updated));
      return newBooking;
    },
    [bookings]
  );

  const updateBooking = useCallback(
    (id, updates) => {
      const updated = bookings.map(b => (b.id === id ? { ...b, ...updates } : b));
      setBookings(updated);
      localStorage.setItem('barbershop_bookings', JSON.stringify(updated));
    },
    [bookings]
  );

  const deleteBooking = useCallback(
    id => {
      const updated = bookings.filter(b => b.id !== id);
      setBookings(updated);
      localStorage.setItem('barbershop_bookings', JSON.stringify(updated));
    },
    [bookings]
  );

  const getBookingsByBarber = useCallback(
    barberId => {
      return bookings.filter(b => b.selectedBarber.id === barberId);
    },
    [bookings]
  );

  return (
    <BookingContext.Provider value={{ bookings, addBooking, updateBooking, deleteBooking, getBookingsByBarber }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookings() {
  return useContext(BookingContext);
}
