import React, { useEffect, useState } from 'react';

// component dlia testov errorboundary

export default function BugButton() {
    const [hasError, setHasError] = useState(false);

    const setError = () => {
        setHasError(true);
    };

    useEffect(() => {
        if (hasError) {
            throw new Error();
        }
    }, [hasError]);

    // eslint-disable-next-line i18next/no-literal-string
    return <button type="button" onClick={setError}> testBug</button>;
}
