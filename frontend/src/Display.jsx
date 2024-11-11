import {useState,useEffect} from "react";
import axios from "axios";
const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=()=>{
        let api="http://localhost:8080/employee/userdisplay";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data);
        })
    }
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.firstname}</td>
                <td>{key.secondname}</td>
                <td>{key.userid.username}</td>
                <td>{key.userid.email}</td>
            </tr>
            </>
        )
    })
    useEffect(()=>{
        loadData();
    },[])
    return(
        <>
        <h1>This is display page</h1>
        <table>
            <tr>
                <th>FirstName</th>
                <th>SecondName</th>
                <th>UserId</th>
                <th>Email</th>
            </tr>
        </table>
        </>
    )
}
export default Display;