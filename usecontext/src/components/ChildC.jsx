import React, { useContext } from 'react';
import {UserContext} from '../App';

function ChildC(props) {

    const user = useContext(UserContext);
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
}

export default ChildC;