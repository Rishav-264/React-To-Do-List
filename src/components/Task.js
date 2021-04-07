import Grid from '@material-ui/core/Grid';
import {useState} from 'react';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import '../styles/task.css';

const Task = (props) =>{

    const [checked,handleChecked] = useState(false);
    const [unchecked,handleUnchecked] = useState(true);

    const checkHandler = () =>{
        handleChecked(!checked);
        handleUnchecked(!unchecked);
    }

    const deleteHandler = () =>{
        props.setTasks(props.tasks.filter(task=>task.id!==props.index));
    }

    return(
        <Grid container spacing={0} key={props.index}>
            {unchecked && <Grid item xs={8}>
                <Button disabled>
                    <p>{props.taskItem}</p>
                </Button>
            </Grid>}
            {checked && <Grid item xs={8}>
                <Button disabled>
                    <p className='listItemUnchecked'>{props.taskItem}</p>
                </Button>
            </Grid>}
            <Grid item xs={2}>
                <Button onClick={checkHandler}>
                    <CheckIcon />
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button onClick={deleteHandler}>
                    <DeleteIcon />
                </Button>
            </Grid>
        </Grid>
    )
}

export default Task;