import instance from "./Axiosinstance.js";


export const LoginAdmin = async (payload) => {
    try {
        const response = await instance.post('/api/admin/auth/login', payload);
        return response.data
    } catch (err) {
        return err.response.data;
    }
}