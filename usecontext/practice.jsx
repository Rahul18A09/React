what is useContext?

//useContext is a React Hook that helps you share data globally between components without passing props manually at every level.

useContext allows components to directly access shared data from a central place

Use it when data is needed in many components, such as:
User login info
Theme (dark/light mode)
Language
Global settings

✅ Key Points to Remember
useContext avoids prop drilling
It makes code cleaner and readable
Best for global data
Do NOT overuse it for frequently changing data

1️⃣ What is Fetch?
fetch() is a built-in JavaScript function
No need to install anything
Works in modern browsers

fetch("https://api.example.com/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

2️⃣ What is Axios?
Axios is a third-party library
You must install it:

npm install axios

import axios from "axios";

axios.get("https://api.example.com/users")
  .then(response => console.log(response.data))
  .catch(error => console.log(error))

Done for Today.