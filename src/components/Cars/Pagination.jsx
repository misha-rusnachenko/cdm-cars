import React from 'react'
import './Pagination.css'

export const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    } 

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <div onClick={() => paginate(number)}>
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}