import { default as React, useContext, createContext } from 'react';

import { apiConfig } from '../config';

const ApiContext = createContext();
const useApi = () => useContext(ApiContext);

const ApiProvider = ({children}) => {
    const BASE_URL = 'http://server.test';

    console.log(BASE_URL)

    const findAllSessions = async (query = null) => {
        let url = `${BASE_URL}/wp-json/wp/v2/session`;
        if (query !== 0) {
            url = url + `/?page=${query}`;
        };
        const response = await fetch(url);
        console.log(response);
        console.log(url);
        return response.json();
    };

    return (
        <ApiContext.Provider value={{
            findAllSessions,
        }}>
            {children}
        </ApiContext.Provider>
    );
};

export {
    ApiContext,
    ApiProvider,
    useApi
};