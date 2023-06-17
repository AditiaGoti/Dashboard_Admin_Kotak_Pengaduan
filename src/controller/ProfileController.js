import axiosInstance,{setBearerToken} from '../Utils/axios'

export class ProfileController {
    loading = false
    error = false
    errorCause = ''
    response = []
    lists = []
    list = []
    constructor(loading, error, errorCause) {
        this.loading = loading
        this.error = error
        this.errorCause = errorCause
    }
    async getProfileLecturer() {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log("token",token)
        setBearerToken(token);
              const response = await axiosInstance.get('/lecturer/v1/profile')
              this.setLists(response.data.data);

        return response
        
    }
    async getProfile() {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log("token",token)
        setBearerToken(token);
              const response = await axiosInstance.get('/lecturer/v1/profile')
              this.setLists(response.data.data);
                console.log("list profile",response.data.data)
        return response
        
    }
    setLists(data) {
        this.list = data
        console.log(this.list);
    }
    async updateProfileLecturer(avatar,name,nip,phoneNumber,email,) {
        const token = localStorage.getItem('kpjtik_access_token')
        setBearerToken(token);
              const response = await axiosInstance.put('/lecturer/v1/profile',{
                avatar : avatar,
                name : name,
                nip : nip,
                phoneNumber : phoneNumber,
                email : email,
              })
              this.setLists(response.data.data);

        return response
        
    }

}
