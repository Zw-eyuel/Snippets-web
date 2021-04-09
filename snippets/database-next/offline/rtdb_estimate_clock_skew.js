// This snippet file was generated by processing the source file:
// ./database-next/offline.js
//
// To make edits to the snippets in this file, please edit the source

// [START rtdb_estimate_clock_skew_modular]
import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase(firebaseApp);
const offsetRef = ref(db, ".info/serverTimeOffset");
onValue(offsetRef, (snap) => {
  const offset = snap.val();
  const estimatedServerTimeMs = new Date().getTime() + offset;
});
// [END rtdb_estimate_clock_skew_modular]