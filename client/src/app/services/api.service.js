import { default as React, useContext, createContext } from 'react';

// import { apiConfig } from '../config';

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
        return response.json();
    };

    const findAllSessionsWithUserId = async (query = null, userId) => {
        let url = `${BASE_URL}/wp-json/wp/v2/session/?user_id=${userId}`;
        if (query !== 0) {
            url = url + `/?page=${query}`;
        };
        const response = await fetch(url);
        return response.json();
    };

    const storeSession = async (body, token) => {
        const options = {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer'+ token
          },
          body: JSON.stringify(body)
        };
    
        let url = `${BASE_URL}/wp-json/wp/v2/session`;
        const response = await fetch(url, options);
        return response.json();
    };

    return (
        <ApiContext.Provider value={{
            findAllSessions,
            storeSession,
            findAllSessionsWithUserId,
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