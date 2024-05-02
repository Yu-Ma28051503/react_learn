import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const jsonValue = window.localStorage.getItem(key);

        if(jsonValue !== null) return JSON.parse(jsonValue);  // keyが存在したらJSON.parseして返す

        return defaultValue;  // keyが存在しなかったらdefaultValueを返す
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, setValue]);

  return [value, setValue];
}

export default useLocalStorage