import * as request from '../utils/request';
export const getRcmVideo = async (type = 'for-you', page = 1) => {
    try {
        const response = await request.get(`/videos`, {
            params: {
                type,
                page,
            },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};
