import axiosInstance,{setBearerToken} from '../Utils/axios'

export class DashboardController {
    loading = false
    error = false
    errorCause = ''
    response = []
    lists =[]
    constructor(loading, error, errorCause) {
        this.loading = loading
        this.error = error
        this.errorCause = errorCause
    }  
    async getComplaintListLecturer() {
            const token = localStorage.getItem('kpjtik_access_token')
            setBearerToken(token);                  
            const response = await axiosInstance.get(`/lecturer/v1/complaint`)
                  this.setLists(response.data.data);
                  console.log(response.data.data,"list complaint")
                  return response
              }
              async getComplaintListSuper() {
                const token = localStorage.getItem('kpjtik_access_token')
                setBearerToken(token);                  
                const response = await axiosInstance.get(`/super/v1/complaint`)
                      this.setLists(response.data.data);
                      console.log(response.data.data,"list complaint")
                      return response
                  }
                  async getFeedbackList() {
                    const token = localStorage.getItem('kpjtik_access_token')
                    console.log("token",token)
                    setBearerToken(token);  
                          const response = await axiosInstance.get(`/lecturer/v1/feedback`)
                          this.setLists(response.data.data);
                          console.log("feedback",response.data.data)
                          return response   
                      }
                      async getFeedbackSuperList() {
                        const token = localStorage.getItem('kpjtik_access_token')
                        console.log("token",token)
                        setBearerToken(token);  
                              const response = await axiosInstance.get(`/super/v1/feedback`)
                              this.setLists(response.data.data);
                              console.log("feedback super",response.data.data)
                              return response   
                          }
                          async getStudentList() {
                            const token = localStorage.getItem('kpjtik_access_token')
                            console.log("token",token)
                            setBearerToken(token);  
                                  const response = await axiosInstance.get(`/super/v1/student`)
                                  this.setLists(response.data.data);
                                  console.log("student",response.data.data)
                                  return response   
                              }
                              
    async getLecturerList() {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log("token",token)
        setBearerToken(token);  
              const response = await axiosInstance.get(`/super/v1/lecturer`)
              this.setLists(response.data.data.list);
              console.log("student",response.data.data)
              return response   
          }
              setLists(data) {
                  this.lists = data
              }
        
              
}
