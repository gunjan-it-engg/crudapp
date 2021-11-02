import { FormControl, FormGroup, Input, InputLabel , Button, makeStyles, Typography } from "@material-ui/core"
import { useState } from "react"
import { addUser } from "../service/api"

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

const AddUser = () =>{
    const [user , setUser] = useState(inititalValues)
    const { name , username , email , phone } = user        // destructuring  
    const classes = useStyle();

    const onValueChange = (e) =>{
        // console.log(e.target.value)
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user)
    }

    const addUserDetails = async()=>{
        await addUser(user) 
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
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
            <Button variant="contained" color="primary" onClick={()=>addUserDetails()}>Submit User</Button>
        </FormGroup>
    )
}

export default AddUser