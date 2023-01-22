import './App.css'

function App() {
  return (
    <div className="appContainer">
      <h1>ToDo manager</h1>

      <div className="newTaskForm">
        <h2 className="newTaskHeader">
          What needs to be done?
        </h2>
        <div>
          <label>
            Assignee:
          </label>
          <select>
            <option value="1">Вася</option>
            <option value="2">Маша</option>
            <option value="3">Даша</option>
            <option value="4">Гомер</option>
          </select>
        </div>
        <input type="text" autoComplete="off" />
        <input type="button" value="Add" />
      </div>

      <div className="summary">
        <header className="header">Summary</header>

        <div className='statContainer'>
          <label className='tasksStat'>Tasks in backlog: 0</label>
          <label className='tasksStat'>Tasks in progress: 0</label>
          <label className='tasksStat'>Completed tasks: 0</label>
        </div>

        <div className='filtersContainer backgroundGreen'>
          <div className='cotrolGroup'>
            <label>Backlog</label>
            <input type="checkbox"></input>
          </div>

          <div className='cotrolGroup'>
            <label>In-progress</label>
            <input type="checkbox"></input>
          </div>

          <div className='cotrolGroup'>
            <label>Done</label>
            <input type="checkbox"></input>
          </div>
        </div>

      </div>
      <div className="backlogListContainer">
        <h3>Backlog</h3>
        <div className="taskContainer">
          1
        </div>
        <div className="taskContainer">
          1
        </div>
      </div>
      <div className="inProgressListContainer">
        <h3>In-progress</h3>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
      </div>
      <div className="doneListContainer">
        <h3>Done</h3>
      </div>
      <button className="loadButton">Load more...</button>
    </div>
  )
}



export default App
