import React from 'react'
import styles from './Modal.module.css'
type Props = {
    children: React.ReactNode,
}

const Modal = ({ children }: Props) => {
    //                          referencia ao click em um componente de react
    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal")
        modal!.classList.add("hide")//add a lista de classes

    }

    return (
        <div id='modal' className='hide'>
            <div className={styles.fade} onClick={closeModal}></div>
            <div className={styles.modal}>
                <h2>Texto Modal</h2>
                {children}
                {/* propriedade usada para manusear componentes */}
            </div>
        </div>
    )
}

export default Modal