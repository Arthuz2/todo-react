import { useState } from 'react'
import { Trash } from 'phosphor-react'
import styles from './styles.module.css'
import { Task } from '../Tasks'

interface TaskCardProps {
  id: string
  content: string
  done: boolean
  tasksList: Task[]
  newTasksList: (tasks: Task[]) => void
}

export function TaskCard({
  id,
  content,
  done,
  tasksList,
  newTasksList,
}: TaskCardProps) {
  const [isDone, setIsDone] = useState(done)

  function handleToggleStatus() {
    setIsDone(!isDone)
    tasksList = tasksList.map((task) => {
      if (task.id === id) {
        task.done = !isDone
      }
      return task
    })

    newTasksList(tasksList)
  }

  function handleDeleteTask() {
    tasksList = tasksList.filter((task) => task.id !== id)

    newTasksList(tasksList)
  }

  return (
    <div className={styles.CardContainer}>
      <div className={styles['checkbox-wrapper-12']}>
        <div className={styles.cbx}>
          <input
            id="cbx-12"
            type="checkbox"
            checked={isDone}
            onChange={handleToggleStatus}
          />
          <label htmlFor="cbx-12"></label>
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
            <path d="M2 8.36364L6.23077 12L13 2"></path>
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo-12">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="4"
                result="blur"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                result="goo-12"
              ></feColorMatrix>
              <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
      <div className={isDone ? styles.contentIsDone : styles.content}>
        {content}
      </div>
      <button className={styles.trashButton} onClick={handleDeleteTask}>
        <Trash size={20} className={styles.trash} />
      </button>
    </div>
  )
}
