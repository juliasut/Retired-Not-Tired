//! Going to delete this file soon as I done think I need it!

import { database } from '../config/firebase';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchEvents = async () => {
  const querySnapshot = await getDocs(collection(database, 'activities'));
  return querySnapshot;
  // const querySnapshot = onSnapshot(
  //   collection(database, 'activities'),
  //   (snapshot) => {
  //     console.log(snapshot);
  //     let events = [];
  //     snapshot.docs.forEach((doc) => {
  //       console.log(doc);
  //       events.push({ ...doc.data(), id: doc.id });
  //       console.log(events);
  //     });
  //     // return events;
  //   }
  // );
  // return querySnapshot;
};

export const useEvents = () => {
  const [events, setEvents] = useState(null);

  const { data, isLoading, isError, status } = useQuery(
    ['actiyvites'],
    fetchEvents,
    {
      refetchOnWindowFocus: true,
      subcribe: true,
      refetchInterval: 50000,
      onSuccess: () => {
        let results = [];
        data &&
          data.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
            setEvents(results);
          });
      },
    }
  );

  return { events, isError, isLoading, status };
};

export default useEvents;
