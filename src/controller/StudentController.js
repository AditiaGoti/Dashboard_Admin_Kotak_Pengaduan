import axiosInstance,{setBearerToken,setBasicAuth} from '../Utils/axios'
export class StudentControllers {
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

    async getStudentList() {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log("token",token)
        setBearerToken(token);  
              const response = await axiosInstance.get(`/super/v1/student`)
              this.setLists(response.data.data.list);
              this.setData(response.data.data);
              console.log("student",response.data.data)
              return response   
          }
          async searchStudent(name) {
            const token = localStorage.getItem('kpjtik_access_token')
            console.log("token",token)
            setBearerToken(token);  
                  const response = await axiosInstance.get(`/super/v1/student?name=${name}`)
                  this.setLists(response.data.data.list);
                  console.log("student",response.data.data.list)
                  return response   
              }
          // setData(data){
          //   this.data = data
          // }
          setLists(data) {
              this.lists = data
          }
          setData(data) {
            this.data = data
        }
          async AddStudent(avatar,name,nim,email,password,phoneNumber,major) {
           try{
            const token = localStorage.getItem('kpjtik_access_token')
            console.log("token",token)
            setBearerToken(token);  
                  const response = await axiosInstance.post(`/super/v1/student/register`,{
                    avatar : avatar,
                    name : name,
                    nim : nim,
                    email : email,
                    password : password ,
                    phoneNumber : phoneNumber,
                    major : major
                  })
                  this.setLists(response.data.data);
                  console.log("student",response.data.data)
                  return response
                }
                catch(error){
                  this.setErrorCause(error.response.data.message);
                  throw error; // Rethrow the error to be handled by the caller

                }   
              }
              setErrorCause(cause) {
                this.errorCause = cause
            }
              async ImportStudent(data) {
                const token = localStorage.getItem('kpjtik_access_token')
                console.log(data,"data")
                console.log("token",token)
                setBearerToken(token);  
                      const response = await axiosInstance.post(`/super/v1/student/import`,
                       data.data
                      )
                      this.setLists(response.data.data);
                      console.log("student",response.data.data)
                      return response   
                  }
                  async getStudentPage(page, limit) {
                    const token = localStorage.getItem('kpjtik_access_token');
                    setBearerToken(token);
                    const response = await axiosInstance.get(`/super/v1/student?limit=${limit}&page=${page}`);
                    this.setLists(response.data.data.list);
                    this.setData(response.data.data);
                    console.log("student", response.data.data);
                    return response;
                  }          
              async uploadImage(data){
                setBasicAuth();
                const response = await axiosInstance.post('/lecturer/v1/upload',
                  data.data
                );
                console.log(response.data, 'upload');
                return response;
              }
              async studentDeleted(student_id) {
                const token = localStorage.getItem('kpjtik_access_token')
                setBearerToken(token);                  
                const response = await axiosInstance.put(`/super/v1/student/delete`,{
                  student_id : student_id,
    
                })
                      this.setLists(response.data.data.list);
                      console.log(response.data.data.list,"list publish")
                      return response
                  }

}
