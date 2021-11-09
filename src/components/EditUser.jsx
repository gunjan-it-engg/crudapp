import { FormControl, FormGroup, Input, InputLabel , Button, makeStyles, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { editUser, getUsers } from "../service/api"
import { useHistory , useParams } from "react-router"
  

const useStyle = makeStyles({
    container:{
        width:"50%",
        margin:"5% 0 0 25%",
        '&>*':{
            marginTop: 20 
        }
    }
})

const inititalValues = {
    name : '',
    username : '',
    email : '',
    phone : ''
}

const EditUser = () =>{
    const [user , setUser] = useState(inititalValues)
    const { name , username , email , phone } = user        // destructuring  
    const { id } = useParams();
    const classes = useStyle();
    const history = useHistory();

    useEffect(()=>{
        loadUserData();
    },[]);

    const loadUserData = async () =>{
        const response = await getUsers(id)
        setUser(response.data)
    }

    const onValueChange = (e) =>{
        // console.log(e.target.value)
        setUser({ ...user , [e.target.name]: e.target.value})
        console.log(user)
    }

    const editUserDetails = async()=> {
        await editUser(id , user);
        history.push('/all') 
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='username' value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='email' value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='phone' value={phone}/>
            </FormControl>
            <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
        </FormGroup>
    )
}

export default React.memo(EditUser)
// export default EditUser