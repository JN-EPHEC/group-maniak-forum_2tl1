// fetchWithAuth.ts

export const fetchWithAuth = async (url: string, options: RequestInit = {}): Promise<Response> => {

    const token = localStorage.getItem("tokenIdentification");

    const authOptions = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            ...options.headers,
        }
    };

    let response = await fetch(url, authOptions);

    if (response.status === 401) {
        const refreshResponse = await fetch(`${import.meta.env.VITE_API_URL}/auth/refresh`, {
            method: 'POST',
            credentials: 'include', 
            headers: { 'Content-Type': 'application/json' },
        });

        if (refreshResponse.ok) {
            const data = await refreshResponse.json();

            localStorage.setItem("tokenIdentification", data.accessToken);

            // Relance la requête originale avec le nouveau token
            response = await fetch(url, {
                ...authOptions,
                headers: {
                    ...authOptions.headers,
                    'Authorization': `Bearer ${data.accessToken}`,
                }
            });
        } else {
            // Refresh expiré → déconnexion forcée
            localStorage.removeItem("tokenIdentification");
            localStorage.removeItem("tokenUser");
        }
    }

    return response;
};