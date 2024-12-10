import React from 'react';
import styled from 'styled-components';
import BookCard from '../utils/Book-card/BookCard';

const BooksGrid = () => {

    const StyledGrid = styled.View`
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 20px;
        padding-top: 8px;
        padding-bottom: 60px;
        /* border: 1px solid green; */
    `;

    return (
        <StyledGrid>
            {Array(9).fill(null).map((book, ind) => (
                <BookCard key={ind} classname="w-[47%]" />
            ))}
        </StyledGrid>
    );
};

export default BooksGrid;
