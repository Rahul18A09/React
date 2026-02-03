🧠 What’s Happening Internally?
createAsyncThunk() handles:
pending
fulfilled
rejected
It automatically dispatches lifecycle actions.
Firebase async calls happen inside thunk.
Redux updates state when promise resolves.

How To Explain In Interview
You can say:
"I used Redux Toolkit with createAsyncThunk to handle asynchronous Firebase operations like fetching and adding data. Thunk allowed me to separate async logic from components and manage loading states cleanly inside extraReducers."

1. What is Firebase?
Firebase is a Backend-as-a-Service (BaaS).
It gives you:
✅ Authentication (Login/Register)
✅ Firestore Database (NoSQL)
✅ Realtime Database
✅ Storage (images/files)
✅ Hosting
✅ Analytics
So you don’t need to build backend with Node/Express for basic apps.
