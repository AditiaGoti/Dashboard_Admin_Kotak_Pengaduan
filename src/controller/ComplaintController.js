import axiosInstance,{setBearerToken} from '../Utils/axios'

export class ComplaintControllers {
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
    async getComplaintDetail(id) {
      const token = localStorage.getItem('kpjtik_access_token')
      setBearerToken(token);  
            const response = await axiosInstance.get(`/lecturer/v1/complaint?complaint_id=${id}`);
            this.setLists(response.data.data.list[0]);
            console.log( this.setLists(response.data.data.list[0]), "detaill")
            return response;
          } 
          async getComplaintbyStatus() {
            const token = localStorage.getItem('kpjtik_access_token')
            console.log("token",token)
            setBearerToken(token);  
                  const response = await axiosInstance.get(`/lecturer/v1/complaint?status=Moderated`);
                  this.setLists(response.data.data.list);
                  console.log(response.data.data.list,"list complaint Moderate")
                  return response
                }     
    async getComplaintListLecturer() {
            const token = localStorage.getItem('kpjtik_access_token')
            setBearerToken(token);                  
            const response = await axiosInstance.get(`/lecturer/v1/complaint`)
                  this.setLists(response.data.data.list);
                  console.log(response.data.data.list,"list complaint")
                  return response
              }
              async getComplaintListSuper() {
                const token = localStorage.getItem('kpjtik_access_token')
                setBearerToken(token);                  
                const response = await axiosInstance.get(`/super/v1/complaint`)
                      this.setLists(response.data.data.list);
                      console.log(response.data.data.list,"list complaint")
                      return response
                  }
                  async getComplaintListSuperBystatus() {
                    const token = localStorage.getItem('kpjtik_access_token')
                    setBearerToken(token);                  
                    const response = await axiosInstance.get(`/super/v1/complaint?status=Moderated`)
                          this.setLists(response.data.data.list);
                          console.log(response.data.data.list,"list complaint Super")
                          return response
                      }
              setLists(data) {
                  this.lists = data
              }
              async complaintPublish(complaint_id,title,body,attachmentImage) {
                const token = localStorage.getItem('kpjtik_access_token')
                setBearerToken(token);                  
                const response = await axiosInstance.put(`/lecturer/v1/complaint/publish`,{
                   complaint_id : complaint_id,
                   title : title,
                   body : body,
                   attachmentImage : attachmentImage

                })
                      this.setLists(response.data.data.list);
                      console.log(response.data.data.list,"list publish")
                      return response
                  }
                  async complaintRejected(complaint_id) {
                    const token = localStorage.getItem('kpjtik_access_token')
                    setBearerToken(token);                  
                    const response = await axiosInstance.put(`/lecturer/v1/complaint/reject`,{
                       complaint_id : complaint_id,
    
                    })
                          this.setLists(response.data.data.list);
                          console.log(response.data.data.list,"list publish")
                          return response
                      }
                  async getComplaintAnalysis() {
                    const token = localStorage.getItem('kpjtik_access_token')
                    console.log("token",token)
                    setBearerToken(token);  
                          const response = await axiosInstance.get(`/super/v1/complaint/graph`)
                          this.setLists(response.data.data);
                          console.log("Complain grafik",response.data.data)
                          return response   
                      }
                      async getComplaintCategoriesAnalysis() {
                        const token = localStorage.getItem('kpjtik_access_token')
                        console.log("token",token)
                        setBearerToken(token);  
                              const response = await axiosInstance.get(`/super/v1/complaint/graph`)
                              this.setLists(response.data.data);
                              console.log("Complain grafik",response.data.data[0].categories)
                              return response   
                          }
                          async getComplaintModerated() {
                            const token = localStorage.getItem('kpjtik_access_token')
                            console.log("token",token)
                            setBearerToken(token);  
                                  const response = await axiosInstance.get(`/lecturer/v1/complaint/moderated`)
                                  this.setLists(response.data.data.list);
                                  console.log("Complain grafik",response.data.data.list)
                                  return response   
                              }
                              async complaintDeleted(complaint_id) {
                                const token = localStorage.getItem('kpjtik_access_token')
                                setBearerToken(token);                  
                                const response = await axiosInstance.put(`/super/v1/complaint/delete`,{
                                   complaint_id : complaint_id,
                
                                })
                                      this.setLists(response.data.data.list);
                                      console.log(response.data.data.list,"list publish")
                                      return response
                                  }
              
}
