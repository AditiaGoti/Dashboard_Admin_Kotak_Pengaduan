import axiosInstance,{setBasicAuth,setBearerToken} from '../Utils/axios'

import { setAuthentication } from '../Utils/localstorage'
export class AuthControllers {
    loading = false
    error = false
    errorCause = ''
    response = []
    constructor(loading, error, errorCause) {
        this.loading = loading
        this.error = error
        this.errorCause = errorCause
    }

    setLoginLecturerDetail(token, name, nip, email) {
        setAuthentication(token, name, nip, email)
    }
   async signInLecturer(nip, password) {
        this.setLoading(true)
        setBasicAuth();
        const response = await axiosInstance.post('/lecturer/v1/login', {
                nip: nip,
                password: password,
              });
        console.log("test",response)
        return response
    }
    async changePassLecturer(oldPassword,newPassword) {
      try{
        const token = localStorage.getItem('kpjtik_access_token')
        console.log("token",token)
        setBearerToken(token);
              const response = await axiosInstance.put('/lecturer/v1/password/change',{
                oldPassword : oldPassword,
                newPassword : newPassword,
              });
        return response
            }
            catch(error){
                this.setErrorCause(error.response.data.message);
                throw error;
            }
    }
    setLoading(status) {
        this.loading = status
    }

    setError(err) {
        this.error = err
    }

    setErrorCause(cause) {
        this.errorCause = cause
    }
}
