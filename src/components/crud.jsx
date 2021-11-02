import home from '../Assets/images/home.png'
import coderwelcome from '../Assets/images/coderwelcome.jpg'
import { Box } from '@material-ui/core';


const crud = () => {
  return (
    <Box style={{display:'flex'}}>
      <img src={coderwelcome} style={{width:'45%', margin: '80px 0 0 50px'}}/>
      <img src={home} style={{width:'45%', margin: '80px 0px 0px 50px'}} />
    </Box>
  )
};

export default crud;
