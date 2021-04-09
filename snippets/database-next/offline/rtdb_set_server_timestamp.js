// This snippet file was generated by processing the source file:
// ./database-next/offline.js
//
// To make edits to the snippets in this file, please edit the source

// [START rtdb_set_server_timestamp_modular]
import { getDatabase, ref, onDisconnect, serverTimestamp } from "firebase/database";

const db = getDatabase(firebaseApp);
const userLastOnlineRef = ref(db, "users/joe/lastOnline");
onDisconnect(userLastOnlineRef).set(serverTimestamp());
// [END rtdb_set_server_timestamp_modular]