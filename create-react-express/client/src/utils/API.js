import axios from  "axios"
export default{
    getrecords :function(){
        return axios.get("/api/restaurant")
    },
    getrecord:function(id){
        return axios.get("/api/restaurant/" + id)
    },
     deleterecord:function(id){
         return axios.get("/api/restaurant/" + id )
     },
     saverecord:function(restaurantdata){
         return axios.get("/api/restaurant/",restaurantdata)
     }
}