import React, { useState, useMemo, useCallback, memo } from 'react'

/*
  TASK ITEM COMPONENT 
  memo keeps this component from re-rendering unless its props (task or onToggle) change.
 This is why useCallback is important for the functions we pass down!
 */
const TaskItem = memo(({ task, onToggle }) => {
  console.log(`Rendering task: ${task.text}`)
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        className="task-checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className="task-text">{task.text}</span>
    </div>
  )
})

const App = () => {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [showOnlyCompleted, setShowOnlyCompleted] = useState(false)

  //TASK 1: Add Task
  const handleAddTask = () => {
    if (!inputValue.trim()) return
    const newTask = {
      id: Date.now(), // Unique ID using timestamp
      text: inputValue,
      completed: false
    }
    setTasks(prev => [...prev, newTask])
    setInputValue('')
  }

  // TASK 2 & 4: Callback Function for Toggling
  // useCallback memoizes the function itself.
  // Without this, every time App re-renders, a NEW toggleTask function is created,
  // which would cause every TaskItem to re-render even if nothing changed!
  const toggleTask = useCallback((id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }, [])

  //TASK 3: Show Completed Filter (using useMemo)
  // useMemo saves the result of a calculation.
  // It only re-calculates when 'tasks' or 'showOnlyCompleted' changes.
  const filteredTasks = useMemo(() => {
    if (!showOnlyCompleted) return tasks
    return tasks.filter(task => task.completed)
  }, [tasks, showOnlyCompleted])

  // TASK 4: Clear All 
  const handleClearAll = useCallback(() => {
    setTasks([])
  }, [])

  // TASK 5: Bonus - Group Tasks (using two separate useMemo hooks)
  const pendingTasks = useMemo(() => {
    return tasks.filter(task => !task.completed)
  }, [tasks])

  const completedTasks = useMemo(() => {
    return tasks.filter(task => task.completed)
  }, [tasks])

  return (
    <div className="container">
      <h1>To-Do-App</h1>

      <div className="input-group">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <div className="controls">
        <label className="toggle-group">
          <input 
            type="checkbox" 
            className="task-checkbox"
            checked={showOnlyCompleted}
            onChange={() => setShowOnlyCompleted(!showOnlyCompleted)}
          />
          <span>Show Completed Only</span>
        </label>

        <button className="btn btn-danger" onClick={handleClearAll}>
          Clear All
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">No tasks here!</div>
      ) : (
        <>
          {showOnlyCompleted ? (
            <div className="task-list">
              <h2 className="section-title">Completed {filteredTasks.length}</h2>
              {filteredTasks.map(task => (
                <TaskItem key={task.id} task={task} onToggle={toggleTask} />
              ))}
            </div>
          ) : (
            <>
              <div className="task-list">
                <h2 className="section-title">Pending ({pendingTasks.length})</h2>
                {pendingTasks.map(task => (
                  <TaskItem key={task.id} task={task} onToggle={toggleTask} />
                ))}
              </div>

              <div className="task-list">
                <h2 className="section-title">Completed ({completedTasks.length})</h2>
                {completedTasks.map(task => (
                  <TaskItem key={task.id} task={task} onToggle={toggleTask} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default App
