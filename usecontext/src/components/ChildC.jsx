import React, { useContext } from 'react';
import {ThemeContext, UserContext} from '../App';


function ChildC(props) {

    const user = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);
    function toggleTheme(){
        if(theme === 'light')
            setTheme('dark')
        else 
            setTheme('light')
        
    }

    return (
        <div>
            {/* <h1>{theme}</h1> */}
            <button onClick={toggleTheme}>Change Theme</button>
            <h2>Data: {user.name}</h2>
        </div>
    );
}

export default ChildC;