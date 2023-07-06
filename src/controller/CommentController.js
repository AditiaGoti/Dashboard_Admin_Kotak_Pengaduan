import axiosInstance,{setBearerToken} from '../Utils/axios'
export class CommentControllers {
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

    async getCommentList() {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log("token",token)
        setBearerToken(token);  
              const response = await axiosInstance.get(`/lecturer/v1/comment`)
              this.setLists(response.data.data.list);
              this.setData(response.data.data);
              console.log("comment lecturer",response.data.data)
              return response   
          }
          async getCommentPage(page,limit) {
            const token = localStorage.getItem('kpjtik_access_token')
            console.log("token",token)
            setBearerToken(token);  
                  const response = await axiosInstance.get(`/lecturer/v1/comment?limit=${limit}&page=${page}`);
                  this.setLists(response.data.data.list);
                  this.setData(response.data.data);
                  console.log("comment Super",response.data.data)
                  return response   
              }
          setLists(data) {
              this.lists = data
          }
          setData(data) {
            this.data = data
          }
          async getSuperCommentList() {
            const token = localStorage.getItem('kpjtik_access_token')
            console.log("token",token)
            setBearerToken(token);  
                  const response = await axiosInstance.get(`/super/v1/comment`)
                  this.setLists(response.data.data.list);
                  this.setData(response.data.data);
                  console.log("comment Super",response.data.data)
                  return response   
              }
              async getSuperCommentPage(page,limit) {
                const token = localStorage.getItem('kpjtik_access_token')
                console.log("token",token)
                setBearerToken(token);  
                      const response = await axiosInstance.get(`/super/v1/comment?limit=${limit}&page=${page}`);
                      this.setLists(response.data.data.list);
                      this.setData(response.data.data);
                      console.log("comment Super",response.data.data)
                      return response   
                  }
              async getCommentMessage(message) {
                try{
                const token = localStorage.getItem('kpjtik_access_token')
                console.log("token",token)
                setBearerToken(token);  
                      const response = await axiosInstance.get(`/lecturer/v1/comment?message=${message}`)
                      this.setLists(response.data.data.list);
                      this.setData(response.data.data);
                      console.log("comment lecturer",response.data.data)
                      return response 
                }
                catch(error){
                  this.setErrorCause(error.response.data.message);
                  throw error;
                }  
                  }
                  async getCommentbyMessage(message) {
                    try {
                    const token = localStorage.getItem('kpjtik_access_token')
                    console.log("token",token)
                    setBearerToken(token);  
                          const response = await axiosInstance.get(`/super/v1/comment?message=${message}`)
                          this.setLists(response.data.data.list);
                          this.setData(response.data.data);
                          console.log("comment Super",response.data.data.list)
                          return response   }
                          catch(error){
                            this.setErrorCause(error.response.data.message);
                            console.log(error.response.data.message,"error")
                            throw error;
                          }
                      }
              async commentDeleted(comment_id) {
                const token = localStorage.getItem('kpjtik_access_token')
                setBearerToken(token);                  
                const response = await axiosInstance.put(`/super/v1/comment/delete`,{
                    comment_id :   comment_id,

                })
                      this.setLists(response.data.data.list);
                      console.log(response.data.data.list,"list publish")
                      return response
                  }

                  setErrorCause(cause) {
                    this.errorCause = cause
                }
}
