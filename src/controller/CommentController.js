import axiosInstance,{setBearerToken} from '../Utils/axios'
export class CommentControllers {
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

    async getCommentList() {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log("token",token)
        setBearerToken(token);  
              const response = await axiosInstance.get(`/lecturer/v1/comment`)
              this.setLists(response.data.data.list);
              console.log("comment lecturer",response.data.data.list)
              return response   
          }
          setLists(data) {
              this.lists = data
          }
          async getSuperCommentList() {
            const token = localStorage.getItem('kpjtik_access_token')
            console.log("token",token)
            setBearerToken(token);  
                  const response = await axiosInstance.get(`/super/v1/comment`)
                  this.setLists(response.data.data.list);
                  console.log("comment Super",response.data.data.list)
                  return response   
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

}
