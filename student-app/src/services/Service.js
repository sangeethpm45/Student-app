
import http from '../http-common';
const getallstudents=()=>{
return http.get("/all")
}

const addstudent=(data)=>{
    return http.post("/addstudents",data)
}

const logger={
    getallstudents,
    addstudent
}


export default logger