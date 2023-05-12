import React, { useState } from 'react';
//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

//CSS
import styles from './App.module.css'
import { ITask } from './interfaces/Task';
import Modal from './components/Modal/Modal';

function App() {


  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    const newTaskList = taskList.filter((task) => {
      //compare id with id task's in list
      return task.id !== id
    })
    setTaskList(newTaskList)
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if (display) {
      modal!.classList.remove("hide")//exibe
    } else {
      modal!.classList.add("hide")//esconde
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty }
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })
    setTaskList(updatedItems)
    hideOrShowModal(false)
  }

  return (
    <div className="App">
      <Modal
        children={<TaskForm btnText='Editar tarefa' taskList={taskList} task={taskToUpdate} handleUpdate={updateTask} />}
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
