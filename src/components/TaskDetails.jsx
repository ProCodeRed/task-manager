import { useState, useEffect } from 'react'
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom'

const TaskDetails = () => {
    const [loading, setLoading ] = useState(true)
    const [task, setTask ] = useState({})
    const [error, setError ] = useState(null)

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchTask = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
            const data = await res.json()

            if(res.status === 404){
                // setError('Task not found')
                navigate('/')
            }

            setTask(data)
            setLoading(false)
        }

        fetchTask()
    })

    // if(error){
    //     return <Navigate to='/' />
    // }

  return (
    loading ? (<h3>Loading...</h3>) : ( <div className='task_details_wrapper'>
        <h3>{task.text}</h3>
        <p>{task.day}</p>
        <Link to='/'>Go back</Link>
        </div> )
    
  )
}

export default TaskDetails