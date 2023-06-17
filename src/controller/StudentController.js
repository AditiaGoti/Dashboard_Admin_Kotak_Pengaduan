import axiosInstance,{setBearerToken,setBasicAuth} from '../Utils/axios'
export class StudentControllers {
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

    async getStudentList() {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log("token",token)
        setBearerToken(token);  
              const response = await axiosInstance.get(`/super/v1/student`)
              this.setLists(response.data.data.list);
              console.log("student",response.data.data.list)
              return response   
          }
          setLists(data) {
              this.lists = data
          }
          async AddStudent(avatar,name,nim,email,password,phoneNumber,major) {
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
             
              async uploadImage(image,imageFolder){
                setBasicAuth();
                const response = await axiosInstance.post('/lecturer/v1/upload',{
                  image : image,
                  imageFolder : imageFolder
                });
                this.setLists([{ key: 'attachmentImage', value: 'https://storage.googleapis.com/kotak-pengaduanjtik.appspot.com/' + response.data}]);
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
