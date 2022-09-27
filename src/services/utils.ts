export const requestApiGET = async (url_service: string, params = {}) => {
    const options: any = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (Object.keys(params).length > 0)
        url_service += `?${new URLSearchParams(params).toString()}`;

    return fetch(url_service, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status.toString());
            }
            return response.json();
        })
        .then(data => {
            if (data.length <= 0) {
                throw new Error('No data');
            }
            return data;
        });
};

export const requestApiPOST_PUT = async (url_service: string, params = {}, method: 'POST' | 'PUT' = 'POST') => {
    const options: any = {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    };

    return fetch(url_service, options).then((response) => {
        if (!response.ok) {
            throw new Error(response.status.toString());
        }
        return response.json()
    }).then(response => {
        if (!response.id) {
            throw new Error('No data');
        }
        return response;
    });
};