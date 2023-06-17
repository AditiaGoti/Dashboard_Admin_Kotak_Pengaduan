import axiosInstance,{setBearerToken,setBasicAuth} from '../Utils/axios'
export class LecturerControllers {
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

    async getLecturerList() {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log("token",token)
        setBearerToken(token);  
              const response = await axiosInstance.get(`/super/v1/lecturer`)
              this.setLists(response.data.data);
              console.log("student",response.data.data)
              return response   
          }
          setLists(data) {
              this.lists = data
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
          
    async AddLecturer(avatar,name,nip,email,password,phoneNumber,lecturer_type) {
        const token = localStorage.getItem('kpjtik_access_token')
        console.log("token",token)
        setBearerToken(token);  
              const response = await axiosInstance.post(`/super/v1/lecturer/register`,{
                avatar : avatar,
                name : name,
                nip : nip,
                email : email,
                password : password ,
                phoneNumber : phoneNumber,
                lecturer_type : lecturer_type
              })
              this.setLists(response.data.data);
              console.log("student",response.data.data)
              return response   
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
