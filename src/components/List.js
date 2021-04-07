import Task from './Task';
import '../styles/list.css';
import Grid from '@material-ui/core/Grid';

const List = ({ tasks,setTasks }) =>{
    return(
        <Grid container spacing={1}>
            <Grid item xs={12} align='center'>
                {tasks.map((elem)=>(
                    <div className='task'>
                        <Task taskItem={elem.task} index={elem.id} key={elem.id} tasks={tasks} setTasks={setTasks} />
                    </div>
                ))}
            </Grid>
        </Grid>
    )
}

export default List;