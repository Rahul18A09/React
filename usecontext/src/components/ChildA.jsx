import React from 'react';
import ChildB from './ChildB';

function ChildA(props) {
    return (
        <div>
           <ChildB/> 
        </div>
    );
}

export default ChildA;