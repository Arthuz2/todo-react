import { ClipboardText } from 'phosphor-react'
import styles from './styles.module.css'

export function EmptyTasks() {
  return (
    <div className={styles.tasksEmpty}>
      <ClipboardText size={56} className={styles.clipboard} />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}
