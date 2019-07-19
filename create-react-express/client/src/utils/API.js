import axios from  "axios"
export default{
    getrecords :function(){
        return axios.get("/api/restaurant")
    },
    
    getrecord:function(id){
        return axios.get("/api/restaurant/" + id)
    },
     deleterecord:function(id){
         return axios.delete("/api/restaurant/" + id )
     },
     saverecord:function(restaurantdata){
         return axios.post("/api/restaurant/",restaurantdata)
     },
     updaterecord:function(id,restaurantdata){
         return axios.put("/api/restaurant/" + id ,restaurantdata)
     }
}