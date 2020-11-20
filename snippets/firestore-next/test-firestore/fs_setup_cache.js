// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START fs_setup_cache_modular]
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore";

const firestoreDb = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
});
// [END fs_setup_cache_modular]