import {useState} from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import '../styles/form.css';
import OutlinedInput from '@material-ui/core/OutlinedInput';

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
            <FormControl className='addTask' variant="outlined">
            <OutlinedInput
                onChange={handleNewTask}
                placeholder='Enter New Task'
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        onClick={addNewTask}
                    >
                    <AddCircleIcon />
                    </IconButton>
                </InputAdornment>
                }
            />
            </FormControl>
            </form>
        </div>
    )
}

export default Form;