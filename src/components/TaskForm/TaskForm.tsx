import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
//CSS
import styles from "./TaskForm.module.css"
//interface
import { ITask } from '../../interfaces/Task';

type Props = {
    btnText: string;
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>//modify state list

}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * 1000)
        const newTask: ITask = { id, title, difficulty }
        //add to array all tasks for tasklist and a new task
        setTaskList!([...taskList, newTask])
        //reset form's values

        setTitle("")
        setDifficulty(0)
        console.log(taskList);

    }

    const handleChange = (e: any) => {
        if (e.target.name === "title") {
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
            //o dado do input vem como string, entao convertemos em number
        }
        console.log(difficulty, title);

    }

    return (
        //o value faz com que os valores dos inputs fiquem linkados ás variaveis do state
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder='Título da tarefa' onChange={handleChange} value={title} />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="title">Dificuldade:</label>
                <input type="text" name="diffi" placeholder='Título da tarefa' onChange={handleChange} value={difficulty} />
            </div>
            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm