import axiosInstance,{setBearerToken,setBasicAuth} from '../Utils/axios'
export class LecturerControllers {
    loading = false
    error = false
    errorCause = ''
    response = []
    lists =[]
    data = []
    constructor(loading, error, errorCause) {
        this.loading = loading
        this.error = error
        this.errorCause = errorCause
    }

    async getLecturerList() {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log("token",token)
        setBearerToken(token);  
              const response = await axiosInstance.get(`/super/v1/lecturer`)
              this.setLists(response.data.data.list);
              this.setData(response.data.data);
              console.log("student",response.data.data.list)
              return response   
          }
          async getLecturerPage(page, limit) {
            const token = localStorage.getItem('kpjtik_access_token');
            setBearerToken(token);
            const response = await axiosInstance.get(`/super/v1/lecturer?limit=${limit}&page=${page}`);
            this.setLists(response.data.data.list);
            this.setData(response.data.data);
            console.log("student", response.data.data);
            return response;
          }          
          setLists(data) {
              this.lists = data
          }
          setData(data) {
            this.data = data
        }
        setErrorCause(cause) {
          this.errorCause = cause
      }
          async searchLecturer(name) {
            const token = localStorage.getItem('kpjtik_access_token')
            console.log("token",token)
            setBearerToken(token);  
                  const response = await axiosInstance.get(`/super/v1/lecturer?name=${name}`)
                  this.setLists(response.data.data.list);
                  console.log("student",response.data.data.list)
                  return response   
              }
          async getLecturerTypeList() {
            const token = localStorage.getItem('kpjtik_access_token')
            console.log("token",token)
            setBearerToken(token);  
                  const response = await axiosInstance.get(`/super/v1/lecturer/type`)
                  this.setLists(response.data.data.list);
                  console.log("student",response.data.data.list)
                  return response   
              }
          
              async AddLecturer(avatar, name, nip, email, password, phoneNumber, lecturer_type) {
                try {
                  const token = localStorage.getItem('kpjtik_access_token');
                  console.log("token", token);
                  setBearerToken(token);
                  
                  const response = await axiosInstance.post(`/super/v1/lecturer/register`, {
                    avatar: avatar,
                    name: name,
                    nip: nip,
                    email: email,
                    password: password,
                    phoneNumber: phoneNumber,
                    lecturer_type: lecturer_type
                  });
                  
                  this.setLists(response.data.data);
                  console.log("student", response.data.data);
                  return response;
                } catch (error) {
                  this.setErrorCause(error.response.data.message);
                  console.error("An error occurred while adding a lecturer:", error);
                  throw error; // Rethrow the error to be handled by the caller
                }
              }
              
          async ImportLecturer(data) {
            const token = localStorage.getItem('kpjtik_access_token')
            console.log(data,"data")
            console.log("token",token)
            setBearerToken(token);  
                  const response = await axiosInstance.post(`/super/v1/lecturer/import`,
                   data.data
                  )
                  this.setLists(response.data.data);
                  console.log("lecturer",response.data.data)
                  return response   
              }
              async uploadImage(data){
                setBasicAuth();
                const response = await axiosInstance.post('/lecturer/v1/upload',
                  data.data
                );
                console.log(response.data, 'upload');
                return response;
              }
          async lecturerDeleted(lecturer_id) {
            const token = localStorage.getItem('kpjtik_access_token')
            setBearerToken(token);                  
            const response = await axiosInstance.put(`/super/v1/lecturer/delete`,{
              lecturer_id : lecturer_id,

            })
                  this.setLists(response.data.data.list);
                  console.log(response.data.data.list,"list publish")
                  return response
              }
             
}
