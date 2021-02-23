import React, { useState } from 'react'

export const Search = ({ getQuery }) => {
    const [userInput, setUserInput] = useState('');

    const onChange = (q) => {
        setUserInput(q);
        getQuery(q);
    }

    return (
        <section className='search'>
            <form >
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search characters"
                    autoFocus
                    value={userInput}
                    onChange={(e) => onChange(e.target.value)} />
            </form>
        </section>
    )
}

export default Search 