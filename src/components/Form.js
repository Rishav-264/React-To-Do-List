import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import '../styles/form.css';

const Form = ({ setTasks,tasks }) =>{

    const [newTask,setTask] = useState("Random");
    const [index,setIndex] = useState(5);

    const handleNewTask = (e) =>{
        setTask(e.target.value);
    }

    const addNewTask = (e) =>{
        e.preventDefault();
        setIndex(index+1);
        setTasks([
            ...tasks,{
                id:index,
                task:newTask
            }
        ]);
        console.log(tasks);
    }

    return(
        <div>
            <form>
            <Grid container spacing={0}>
                <Grid item xs={10}>
                    <TextField 
                        variant="outlined" 
                        label="Add Task" 
                        className='addTask'
                        onChange={handleNewTask}
                    />
                </Grid>
                <Grid item xs={2} align='center'>
                    <Button 
                        className='addButton' 
                        onClick={addNewTask}
                        type='submit'
                    >
                        <AddCircleIcon />
                    </Button>
                </Grid>
            </Grid>
            </form>
        </div>
    )
}

export default Form;