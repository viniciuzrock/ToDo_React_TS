import React, { useState } from 'react';
//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

//CSS
import styles from './App.module.css'
import { ITask } from './interfaces/Task';

function App() {

  //usestate tasklist
  const [taskList, setTaskList] = useState<ITask[]>([])

  //delete task
  const deleteTask = (id: number) => {
    const newTaskList = taskList.filter((task) => {
      //compare id with id task's in list
      return task.id !== id
    })
    setTaskList(newTaskList)
  }

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
