import { requestApiGET, requestApiPOST_PUT } from './utils';

const PATH_CHARACTER = '/characters';

export const createCharacter = async (params: any) => {
    try {
        const URL_CONSUME = `${process.env.FAKE_SERVICE}${PATH_CHARACTER}`;

        return await requestApiPOST_PUT(
            `${URL_CONSUME}`,
            params
        );
    } catch (error) {
        return null;
    }
};

export const readCharacters = async (params: any) => {
    try {
        const URL_CONSUME = `${process.env.FAKE_SERVICE}${PATH_CHARACTER}`;
        return await requestApiGET(
            `${URL_CONSUME}`,
            params
        );
    } catch (error) {
        return null;
    }
};

export const updateCharacter = async (id: number, params: any) => {
    try {
        const URL_CONSUME = `${process.env.FAKE_SERVICE}${PATH_CHARACTER}/${id}`;

        return await requestApiPOST_PUT(
            `${URL_CONSUME}`,
            params
        );
    } catch (error) {
        return null;
    }
};

export const deleteCharacter = async (id: number) => {
    try {
        return await fetch(`${process.env.FAKE_SERVICE}${PATH_CHARACTER}/${id}`, {
            method: 'DELETE',
        }).then(res => res.json()).then(res => res)
    } catch (error) {
        return null;
    }
};