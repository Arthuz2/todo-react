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
  const [tasksList, setTasksList] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : ''
  })
  const [showTaskDone, setShowTaskDone] = useState(false)

  function newTasksList(tasks: Task[]) {
    setTasksList(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  useEffect(() => {
    if (tasksList) {
      setDoneCount(tasksList.filter((task) => task.done).length)
    }
  }, [tasksList, setDoneCount])

  function handleShowAllTaskFilter() {
    setShowTaskDone(false)
  }

  function handleDoneTaskFilter() {
    setShowTaskDone(true)
  }

  return (
    <div>
      <NewTaskForm tasksList={tasksList} newTasksList={newTasksList} />
      <main className={styles.tasksContainer}>
        <div className={styles.infos}>
          <button
            className={styles.filterButton}
            onClick={handleShowAllTaskFilter}
          >
            <span className={styles.created}>Tarefas Criadas</span>
            <strong>{tasksList.length}</strong>
          </button>
          <button
            className={styles.filterButton}
            onClick={handleDoneTaskFilter}
          >
            <span className={styles.done}>Concluídas</span>
            <strong>
              {doneCount === tasksList.length
                ? doneCount
                : doneCount + ' de ' + tasksList.length}
            </strong>
          </button>
        </div>
        {!tasksList.length ? (
          <EmptyTasks />
        ) : showTaskDone ? (
          tasksList
            .filter((task) => task.done)
            .map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                content={task.content}
                done={task.done}
                tasksList={tasksList}
                newTasksList={newTasksList}
              />
            ))
        ) : (
          tasksList.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              content={task.content}
              done={task.done}
              tasksList={tasksList}
              newTasksList={newTasksList}
            />
          ))
        )}
      </main>
    </div>
  )
}
