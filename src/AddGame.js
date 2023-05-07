import { useState } from 'react';
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom'


const AddGame = () => {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('') //try direct file upload next!
    const [year, setYear] = useState('')

    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const game = {title, url, year}

        setIsPending(true)

        fetch('http://localhost:8000/games', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(game)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false)
            history.push('/')
        })

        
    }

    return (
        <div className='add-form'>
            <h1>Round Select</h1>
            <form>
                {/* add hints? */}
                <label>Game title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Image URL:</label>
                <textarea
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                ></textarea>
                <label>Release date:</label>
                <input
                type="text"
                required
                value={year}
                onChange={(e) => setYear(e.target.value)}
                />
            </form>
            {!isPending && <button>Add game</button>}
            {isPending && <button disabled>Adding game...</button>}
        </div>
    );
}
 
export default AddGame;