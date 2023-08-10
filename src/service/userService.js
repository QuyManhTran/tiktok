import * as request from '../utils/request';
export const getRecommendation = async (page = 1, per_page = 5) => {
    try {
        const response = await request.get(`/users/suggested`, {
            params: {
                page,
                per_page,
            },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getFollowers = async (page = 1, per_page = 5) => {
    try {
        const response = await request.get(`/users/suggested`, {
            params: {
                page,
                per_page,
            },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};
