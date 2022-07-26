import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if(!text){
            alert('please add a task')
            return
        }

        onAdd({text, day, reminder})

        // to clear form
        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="task">Task</label>
            <input type="text" name="task" id="" value={text} placeholder='Add task' onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
            <label htmlFor="dt">Day & Time</label>
            <input type="text" name="dt" id="" value={day} placeholder='Day & Time' onChange={(e) => setDay(e.target.value)}  />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="reminder">Set Reminder</label>
            <input type="checkbox" name="reminder" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <input className='btn btn-block' type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask