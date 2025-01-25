import { useEffect, useState } from 'react'
import { EmptyTasks } from '../EmptyTasks'
import { TaskCard } from '../TaskCard'
import styles from './styles.module.css'
import { NewTaskForm } from '../NewTaskForm'

export interface Task {
  id: string
  content: string
  done: boolean
}

export function Tasks() {
  const [doneCount, setDoneCount] = useState(0)

  const [tasksList, setTasksList] = useState(() => {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : ''
  })

  function newTasksList(tasks: Task[]) {
    setTasksList(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    setDoneCount(tasks.filter((task: Task) => task.done).length)
  }

  useEffect(() => {
    if (tasksList) {
      setDoneCount(tasksList.filter((task: Task) => task.done).length)
    }
  }, [tasksList, setDoneCount])

  return (
    <div>
      <NewTaskForm tasksList={tasksList} newTasksList={newTasksList} />
      <main className={styles.tasksContainer}>
        <div className={styles.infos}>
          <span className={styles.created}>
            Tarefas Criadas <strong>{tasksList.length}</strong>
          </span>
          <span className={styles.done}>
            Concluídas{' '}
            <strong>
              {doneCount === tasksList.length
                ? doneCount
                : doneCount + ' de ' + tasksList.length}
            </strong>
          </span>
        </div>
        {tasksList.length !== 0 ? (
          tasksList.map((task: Task) => {
            return (
              <TaskCard
                key={task.id}
                id={task.id}
                content={task.content}
                done={task.done}
                tasksList={tasksList}
                newTasksList={newTasksList}
              />
            )
          })
        ) : (
          <EmptyTasks />
        )}
      </main>
    </div>
  )
}
