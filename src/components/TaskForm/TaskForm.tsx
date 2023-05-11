import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
//CSS
import styles from "./TaskForm.module.css"
//interface
import { ITask } from '../../interfaces/Task';

type Props = {
    btnText: string
}

const TaskForm = ({ btnText }: Props) => {

    //usestate for id
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHandler = () => {

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "title") {
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
            //o dado do input vem como string, entao convertemos em number
        }
        //log for title and difficulty
        console.log(title, difficulty)
    }

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder='Título da tarefa' onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="title">Dificuldade:</label>
                <input type="text" name="diffi" placeholder='Título da tarefa' onChange={handleChange} />
            </div>
            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm