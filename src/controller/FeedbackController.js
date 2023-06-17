import axiosInstance,{setBearerToken} from '../Utils/axios'
export class FeedbackController {
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

    async getFeedbackList() {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log("token",token)
        setBearerToken(token);  
              const response = await axiosInstance.get(`/lecturer/v1/feedback`)
              this.setLists(response.data.data.list);
              console.log("feedback",response.data.data.list)
              return response   
          }
          async getFeedbackSuperList() {
            const token = localStorage.getItem('kpjtik_access_token')
            console.log("token",token)
            setBearerToken(token);  
                  const response = await axiosInstance.get(`/super/v1/feedback`)
                  this.setLists(response.data.data.list);
                  console.log("feedback super",response.data.data.list)
                  return response   
              }
              async getFeedbackModerated() {
                const token = localStorage.getItem('kpjtik_access_token')
                console.log("token",token)
                setBearerToken(token);  
                      const response = await axiosInstance.get(`/lecturer/v1/feedback/moderated`)
                      this.setLists(response.data.data.list);
                      console.log("feedback",response.data.data.list)
                      return response   
                  }
              async getFeedbackSuperListByStatus() {
                const token = localStorage.getItem('kpjtik_access_token')
                console.log("token",token)
                setBearerToken(token);  
                      const response = await axiosInstance.get(`/super/v1/feedback?status=Moderated`)
                      this.setLists(response.data.data.list);
                      console.log("feedback super",response.data.data.list)
                      return response   
                  }

          
          async feedbackPublish(feedback_id,message) {
            const token = localStorage.getItem('kpjtik_access_token')
            setBearerToken(token);                  
            const response = await axiosInstance.put(`/lecturer/v1/feedback/publish`,{
                feedback_id : feedback_id,
                message : message,
               

            })
                  this.setLists(response.data.data.list);
                  console.log(response.data.data.list,"list publish")
                  return response
              }
              async feedbackRejected(feedback_id) {
                const token = localStorage.getItem('kpjtik_access_token')
                setBearerToken(token);                  
                const response = await axiosInstance.put(`/lecturer/v1/feedback/reject`,{
                    feedback_id : feedback_id,                   
    
                })
                      this.setLists(response.data.data.list);
                      console.log(response.data.data.list,"list publish")
                      return response
                  }
              async feedbackDeleted(feedback_id) {
                const token = localStorage.getItem('kpjtik_access_token')
                setBearerToken(token);                  
                const response = await axiosInstance.put(`/super/v1/feedback/delete`,{
                    feedback_id :   feedback_id,

                })
                      this.setLists(response.data.data.list);
                      console.log(response.data.data.list,"list publish")
                      return response
                  }

              setLists(data) {
                this.lists = data
            }

}
