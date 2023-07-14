import axiosInstance,{setBearerToken} from '../Utils/axios'

export class ComplaintControllers {
    loading = false
    error = false
    errorCause = ''
    response = []
    lists =[]
    data = []
    datas = []

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
          async getComplaintbyTitle(title) {
            try{
            const token = localStorage.getItem('kpjtik_access_token')
            setBearerToken(token);  
                  const response = await axiosInstance.get(`/super/v1/complaint?title=${title}`);
                  this.setLists(response.data.data.list);
                  console.log( response.data.data.list, "super")
                  return response;
            } catch(error){
              this.setErrorCause(error.response.data.message)
              throw error
            }
                } 
                async getComplaintTitle(title) {
                  try{
                  const token = localStorage.getItem('kpjtik_access_token')
                  setBearerToken(token);  
                        const response = await axiosInstance.get(`/lecturer/v1/complaint?title=${title}`);
                        this.setLists(response.data.data.list);
                        console.log( response.data.data.list, "biasa")
                        return response;
                  }
                  catch(error){
                    this.setErrorCause(error.response.data.message)
                    throw error
                  }
                      } 
          async getComplaintPagebyStatus(page,limit) {
            const token = localStorage.getItem('kpjtik_access_token')
            console.log("token",token)
            setBearerToken(token);  
                  const response = await axiosInstance.get(`/lecturer/v1/complaint?status=Moderated&limit=${limit}&page=${page}`);
                  this.setLists(response.data.data.list);
                  this.setData(response.data.data);
                  console.log(response.data.data.list,"list complaint Moderate")
                  console.log(response.data.data,"Data complaint Moderate")
                  return response
                }  
                async getComplaintSuperPage(page,limit) {
                  const token = localStorage.getItem('kpjtik_access_token')
                  console.log("token",token)
                  setBearerToken(token);  
                        const response = await axiosInstance.get(`/super/v1/complaint?limit=${limit}&page=${page}`);
                        this.setLists(response.data.data.list);
                        this.setData(response.data.data);
                        console.log(response.data.data.list,"list complaint Moderate")
                        console.log(response.data.data,"Data complaint Moderate")
                        return response
                      }  
                      async getComplaintPage(page,limit) {
                        const token = localStorage.getItem('kpjtik_access_token')
                        console.log("token",token)
                        setBearerToken(token);  
                              const response = await axiosInstance.get(`/lecturer/v1/complaint?limit=${limit}&page=${page}`);
                              this.setLists(response.data.data.list);
                              this.setDatas(response.data.data);
                              console.log(response.data.data.list,"list complaint Moderate")
                              console.log(response.data.data,"Data complaint Moderate")
                              return response
                            }  
                async getComplaintbyStatus() {
                  const token = localStorage.getItem('kpjtik_access_token')
                  console.log("token",token)
                  setBearerToken(token);  
                        const response = await axiosInstance.get(`/lecturer/v1/complaint?status=Moderated`);
                        this.setLists(response.data.data.list);
                        this.setDatas(response.data.data);
                        console.log(response.data.data.list,"list complaint Moderate")
                        console.log(response.data.data,"Data complaint Moderate")
                        return response
                      }     
    async getComplaintListLecturer() {
            const token = localStorage.getItem('kpjtik_access_token')
            setBearerToken(token);                  
            const response = await axiosInstance.get(`/lecturer/v1/complaint`)
                  this.setLists(response.data.data.list);
                  this.setData(response.data.data);
                  console.log(response.data.data,"list complaint Lecturer")
                  return response
              }
              async getComplaintListSuper() {
                const token = localStorage.getItem('kpjtik_access_token')
                setBearerToken(token);                  
                const response = await axiosInstance.get(`/super/v1/complaint`)
                      this.setLists(response.data.data.list);
                      this.setData(response.data.data);
                      console.log(response.data.data,"list complaint super")
                      return response
                  }
                  async getComplaintListSuperBystatus() {
                    const token = localStorage.getItem('kpjtik_access_token')
                    setBearerToken(token);                  
                    const response = await axiosInstance.get(`/lecturer/v1/complaint/moderated?status=Moderated`)
                          this.setLists(response.data.data.list);
                          this.setDatas(response.data.data);
                          console.log(response.data.data.list,"list complaint Super")
                          return response
                      }
              setLists(data) {
                  this.lists = data
              }
              setData(data) {
                this.data = data
            }
            setDatas(data) {
              this.datas = data
          }
              async complaintPublish(complaint_id,title,body,attachmentImage) {
                try{
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
              }catch(error){
                this.setErrorCause(error.response.data.message)
                throw error
              }
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
                          return response   
                      }
                      async getComplaintCategoriesAnalysis() {
                        const token = localStorage.getItem('kpjtik_access_token')
                        console.log("token",token)
                        setBearerToken(token);  
                              const response = await axiosInstance.get(`/super/v1/complaint/graph`)
                              this.setLists(response.data.data);
                              console.log("Complain categorie",response.data.data.date)
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
                              async getComplaintModeratedSuperPage(page,limit) {
                                const token = localStorage.getItem('kpjtik_access_token')
                                console.log("token",token)
                                setBearerToken(token);  
                                      const response = await axiosInstance.get(`/super/v1/complaint/moderated?limit=${limit}&page=${page}`);
                                      this.setLists(response.data.data.list);
                                      this.setData(response.data.data);
                                      console.log(response.data.data.list,"list complaint Moderate")
                                      console.log(response.data.data,"Data complaint Moderate")
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
              
                      setErrorCause(cause){
                        this.errorCause = cause
                      }
}
