export default function ({ $axios, app }) {
   let retry = false
   $axios.onError(error => {
     if (error.response.status === 401 && retry === false) {
       retry = true
       $axios.post('/users/refresh', {}, {
         withCredentials: true,
       }).then((res) => {
         app.$auth.strategy.token.set(res.data.accessToken)
         app.$auth.fetchUser().then(r => {
           console.log(r, "fetch")
         }).catch((e) => {
           console.log('me', e)
         })
       }).catch((e) => {
         if (e.response.status && e.response.status === 401) {
           app.$auth.reset()
         }
       })
     }
   })
  return true
}
