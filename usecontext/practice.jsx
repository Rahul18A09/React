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