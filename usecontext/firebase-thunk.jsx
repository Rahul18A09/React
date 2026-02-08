what🧠 What’s Happening Internally?
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

1. What is React?
React is a JavaScript library for building user interfaces, especially single-page applications. It uses a component-based architecture.
2. What are components in React?
Components are reusable pieces of UI.
Two types:
Functional Components
Class Components

3. What is JSX?
JSX (JavaScript XML) allows writing HTML-like syntax inside JavaScript.
Example:
Copy code
Jsx
const element = <h1>Hello World</h1>;

4. What is Virtual DOM?
Virtual DOM is a lightweight copy of the real DOM. React updates only changed parts instead of re-rendering the whole DOM.

5. What is the difference between props and state?
Props
State
Passed from parent
Managed inside component
Read-only
Can be changed
Immutable
Mutable

6. What are Hooks?
Hooks allow functional components to use state and lifecycle features.

7. What is useState?
Used to manage state in functional components.
Copy code
Jsx
const [count, setCount] = useState(0);

8. What is useEffect?
Used for side effects like:
API calls
Event listeners
Timers
Copy code
Jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);