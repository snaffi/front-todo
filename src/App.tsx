import './App.css';

function App() {
  const now = new Date();
  return (
    <div className="appContainer">
      <h1>ToDo manager</h1>

      <form className="newTaskForm">
        <h2 className="newTaskHeader">
          What needs to be done?
        </h2>
        <div className="formFieldset">
          <div className="formControl">
            <label htmlFor="assignee">
              Assignee:
            </label>
            <select id="assignee">
              <option value="1">Вася</option>
              <option value="2">Маша</option>
              <option value="3">Даша</option>
              <option value="4">Гомер</option>
            </select>
          </div>
          <div>{now.getDate()}.{String(now.getUTCMonth() + 1).padStart(2, '0')}.{now.getFullYear()}</div>
          <div className="formControl">
            <label htmlFor="status">
              Status:
            </label>
            <select id="status">
              <option value="1">Backlog</option>
              <option value="2">In-progress</option>
              <option value="3">Done</option>
            </select>
          </div>
        </div>
        <div className="formFieldset">
          <textarea name="text" className="fullWidth"></textarea>
        </div>
        <div className="formControl formActions">
          <input type="button" className="formAction" value="Create"/>
        </div>
      </form>

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
      <div className='listsContainer'>

      
        <div className="backlogListContainer">
          <h3>Backlog</h3>
          <div className="taskContainer">
            <div className="formFieldset">
              <div className="formControl">
                <label htmlFor="assignee">
                  Assignee:
                </label>
                <select id="assignee">
                  <option value="1">Вася</option>
                  <option value="2">Маша</option>
                  <option value="3">Даша</option>
                  <option value="4">Гомер</option>
                </select>
              </div>
              <div>{now.getDate()}.{String(now.getUTCMonth() + 1).padStart(2, '0')}.{now.getFullYear()}</div>
              <div className="formControl">
                <label htmlFor="status">
                  Status:
                </label>
                <select id="status">
                  <option value="1">Backlog</option>
                  <option value="2">In-progress</option>
                  <option value="3">Done</option>
                </select>
              </div>
            </div>
            <div className="formFieldset">
              <p className="fullWidth">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </div>
            <div className="formControl formActionsEdit">
              <input type="button" value="Edit" className="formAction" />

              <input type="button" value="Delete" className="formAction" />
            </div>
          </div>
          <div className="taskContainer">
            <div className="formFieldset">
              <div className="formControl">
                <label htmlFor="assignee">
                  Assignee:
                </label>
                <select id="assignee">
                  <option value="1">Вася</option>
                  <option value="2">Маша</option>
                  <option value="3">Даша</option>
                  <option value="4">Гомер</option>
                </select>
              </div>
              <div>{now.getDate()}.{String(now.getUTCMonth() + 1).padStart(2, '0')}.{now.getFullYear()}</div>
              <div className="formControl">
                <label htmlFor="status">
                  Status:
                </label>
                <select id="status">
                  <option value="1">Backlog</option>
                  <option value="2">In-progress</option>
                  <option value="3">Done</option>
                </select>
              </div>
            </div>
            <div className="formFieldset">
              <p className="fullWidth">dkjasdjasjkdbkasj adasasd jadkjas</p>
            </div>
            <div className="formControl formActionsEdit">
              <input type="button" value="Edit" className="formAction" />
              <input type="button" value="Delete" className="formAction" />
            </div>
          </div>
        </div>
        <div className="inProgressListContainer">
          <h3>In-progress</h3>
          <div className="taskContainer">
            <div className="formFieldset">
              <div className="formControl">
                <label htmlFor="assignee">
                  Assignee:
                </label>
                <select id="assignee">
                  <option value="1">Вася</option>
                  <option value="2">Маша</option>
                  <option value="3">Даша</option>
                  <option value="4">Гомер</option>
                </select>
              </div>
              <div>{now.getDate()}.{String(now.getUTCMonth() + 1).padStart(2, '0')}.{now.getFullYear()}</div>
              <div className="formControl">
                <label htmlFor="status">
                  Status:
                </label>
                <select id="status">
                  <option value="1">Backlog</option>
                  <option value="2">In-progress</option>
                  <option value="3">Done</option>
                </select>
              </div>
            </div>
            <div className="formFieldset">
              <p className="fullWidth">dkjasdjasjkdbkasj adasasd jadkjas</p>
            </div>
            <div className="formControl formActionsEdit">
              <input type="button" value="Edit" className="formAction" />
              <input type="button" value="Delete" className="formAction" />
            </div>
          </div>
        </div>
        <div className="doneListContainer">
          <h3>Done</h3>
          <div className="taskContainer">
            <div className="formFieldset">
              <div className="formControl">
                <label htmlFor="assignee">
                  Assignee:
                </label>
                <select id="assignee">
                  <option value="1">Вася</option>
                  <option value="2">Маша</option>
                  <option value="3">Даша</option>
                  <option value="4">Гомер</option>
                </select>
              </div>
              <div>{now.getDate()}.{String(now.getUTCMonth() + 1).padStart(2, '0')}.{now.getFullYear()}</div>
              <div className="formControl">
                <label htmlFor="status">
                  Status:
                </label>
                <select id="status">
                  <option value="1">Backlog</option>
                  <option value="2">In-progress</option>
                  <option value="3">Done</option>
                </select>
              </div>
            </div>
            <div className="formFieldset">
              <p className="fullWidth">dkjasdjasjkdbkasj adasasd jadkjas</p>
            </div>
            <div className="formControl formActionsEdit">
              <input type="button" value="Edit" className="formAction" />
              <input type="button" value="Delete" className="formAction" />
            </div>
          </div>
          <div className="taskContainer">
            <div className="formFieldset">
              <div className="formControl">
                <label htmlFor="assignee">
                  Assignee:
                </label>
                <select id="assignee">
                  <option value="1">Вася</option>
                  <option value="2">Маша</option>
                  <option value="3">Даша</option>
                  <option value="4">Гомер</option>
                </select>
              </div>
              <div>{now.getDate()}.{String(now.getUTCMonth() + 1).padStart(2, '0')}.{now.getFullYear()}</div>
              <div className="formControl">
                <label htmlFor="status">
                  Status:
                </label>
                <select id="status">
                  <option value="1">Backlog</option>
                  <option value="2">In-progress</option>
                  <option value="3">Done</option>
                </select>
              </div>
            </div>
            <div className="formFieldset">
              <p className="fullWidth">dkjasdjasjkdbkasj adasasd jadkjas</p>
            </div>
            <div className="formControl formActionsEdit">
              <input type="button" value="Edit" className="formAction" />
              <input type="button" value="Delete" className="formAction" />
            </div>
          </div>
          <div className="taskContainer">
            <div className="formFieldset">
              <div className="formControl">
                <label htmlFor="assignee">
                  Assignee:
                </label>
                <select id="assignee">
                  <option value="1">Вася</option>
                  <option value="2">Маша</option>
                  <option value="3">Даша</option>
                  <option value="4">Гомер</option>
                </select>
              </div>
              <div>{now.getDate()}.{String(now.getUTCMonth() + 1).padStart(2, '0')}.{now.getFullYear()}</div>
              <div className="formControl">
                <label htmlFor="status">
                  Status:
                </label>
                <select id="status">
                  <option value="1">Backlog</option>
                  <option value="2">In-progress</option>
                  <option value="3">Done</option>
                </select>
              </div>
            </div>
            <div className="formFieldset">
              <p className="fullWidth">dkjasdjasjkdbkasj adasasd jadkjas</p>
            </div>
            <div className="formControl formActionsEdit">
              <input type="button" value="Edit" className="formAction" />
              <input type="button" value="Delete" className="formAction" />
            </div>
          </div>
        </div>
      </div>
      <button className="loadButton">Load more...</button>
    </div>
  )
}



export default App
