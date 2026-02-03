🧠 What’s Happening Internally?
createAsyncThunk() handles:
pending
fulfilled
rejected
It automatically dispatches lifecycle actions.
Firebase async calls happen inside thunk.
Redux updates state when promise resolves.