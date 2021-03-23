import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import Spinner from '../ui/Spinner';

const Quote = () => {
    const history = useHistory();
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/quotes`);
            setQuotes(result.data);
            setIsLoading(false);
        }
        fetchItems();
    }, [])
    return isLoading ? (<Spinner />) : (
        <div className="container">
            <button className="quote-button"
                onClick={() => {
                    history.goBack();
                }}
            >
                Go back
            </button>
            <div className="cards">
                {quotes.map(quote =>
                    <div className="card" key={quote.quote_id}>
                        <div className="blockquote-wrapper">
                            <div className="blockquote">
                                <h3>
                                    {quote.quote}
                                </h3>
                                <h4>&mdash;{quote.author}</h4>
                            </div>
                        </div></div>)}
            </div>
        </div >
    )
}

export default Quote