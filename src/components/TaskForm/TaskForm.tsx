import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
//CSS
import styles from "./TaskForm.module.css"
//interface
import { ITask } from '../../interfaces/Task';

type Props = {
    btnText: string;
    taskList: ITask[];
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;//modify state list
    task?: ITask | null;
    handleUpdate?(id: number, title: string, difficulty: number): void;
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    useEffect(() => {
        if (task) {
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty)
        }
    }, [task])

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //validation handleupdate
        if (handleUpdate) {
            handleUpdate(id, title, difficulty)
        } else {
            const id = Math.floor(Math.random() * 1000)
            const newTask: ITask = { id, title, difficulty }
            //add to array all tasks for tasklist and a new task
            setTaskList!([...taskList, newTask])

            setTitle("")
            setDifficulty(0)
        }



    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "title") {
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
            //o dado do input vem como string, entao convertemos em number
        }
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