import { PlusCircle } from 'phosphor-react'
import styles from './styles.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from '../Tasks'

interface NewTaskFormProps {
  tasksList: Task[]
  newTasksList: (tasks: Task[]) => void
}

export function NewTaskForm({ tasksList, newTasksList }: NewTaskFormProps) {
  const [taskContent, setTaskContent] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      id: String(new Date().getTime()),
      content: taskContent,
      done: false,
    }

    newTasksList([...tasksList, newTask])
    setTaskContent('')
  }

  function handleTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value)
  }

  return (
    <form className={styles.formContainer} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        name="taskContent"
        className={styles.taskInput}
        placeholder="Adicione uma nova tarefa"
        value={taskContent}
        onChange={handleTaskContentChange}
        required
      />
      <button type="submit" className={styles.submitButton}>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}
