export default function ({ $axios, app }) {
   $axios.onResponseError(async (error) => {
     const originalRequest = error.config
     if (error.response) {
       if (error.config && error.response.status === 401 && !originalRequest._isRetry) {
         originalRequest._isRetry = true
         try {
           const res = await $axios.post('/users/refresh', {}, {
             withCredentials: true
           })
           await app.$auth.strategy.token.set(res.data.accessToken)
           return $axios.request(originalRequest)
         }catch (e) {
           if (e.response.status === 404) {
             app.$auth.reset()
           }
           throw error
         }
       }
       if (error.response.status === 403) {
         throw error
       }
     }
   })
  return true
}
