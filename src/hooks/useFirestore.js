import { useReducer, useEffect, useState } from 'react';
import { database, timestamp } from '../config/firebase';

let initState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DOCUMENT_PENDING':
      return {
        document: null,
        isPending: true,
        error: null,
        success: false,
      };
    case 'ADD_DOCUMENT_SUCCESS':
      return {
        // ...state,
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };
    case 'ADD_DOCUMENT_ERROR':
      return {
        document: null,
        isPending: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initState);
  const [cancelled, setCancelled] = useState(false);

  //* Gets a reference to the document in firebase firestore
  const reference = database.collection(collection);

  //* Checks if component is unmounted
  const dispatchIfMounted = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  //* Add document
  const addDocument = async (document) => {
    dispatch({ type: 'ADD_DOCUMENT_PENDING' });
    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await reference.add(...document, createdAt);

      dispatchIfMounted({
        type: 'ADD_DOCUMENT_SUCCESS',
        payload: addedDocument,
      });
    } catch (error) {
      dispatchIfMounted({
        type: 'ADD_DOCUMENT_ERROR',
        payload: error.message,
      });
    }
  };

  //* Delete document
  const deleteDocument = async (id) => {};

  //* Update document
  const updateDocument = async (document) => {};

  //* Clean up function
  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { addDocument, deleteDocument, updateDocument, response };
};
