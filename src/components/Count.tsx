import React, { useState } from 'react';

import './Count.scss';

export default function Count() {
    const [count, setCount] = useState(0);

    const click = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div className="main">
            <h1> {count}</h1>
            <button onClick={click}>inc</button>
        </div>
    );
}
