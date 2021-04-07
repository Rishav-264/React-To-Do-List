import './App.css';
import {useState} from 'react';
import Container from '@material-ui/core/Container';
import Form from './components/Form';
import List from './components/List';
import data from './components/data.json';

function App() {
  const [tasks,setTasks] = useState(data);
  return (
    <div className="App">
      <Container maxWidth="sm">
        <h1>A Simple To-Do List</h1>
        <Form setTasks={setTasks} tasks={tasks} />
        <List tasks={tasks} setTasks={setTasks}/>
      </Container>
    </div>
  );
}

export default App;
