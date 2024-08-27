import { apiSlice } from "src/app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/token',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        register: builder.mutation({
            query: userInfo => {
                return {
                    url: '/register',
                    method: 'POST',
                    body: { ...userInfo }
                };
            }
        }),
    })
});

export const {
    useLoginMutation,
    useRegisterMutation,
} = authApiSlice;
