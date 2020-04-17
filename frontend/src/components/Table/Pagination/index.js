import React from 'react';

import PropTypes from 'prop-types';

import { Container, Button } from './styles';
import createPagination from './utils/create-pagination';

export default function Pagination({ pages, page, setPage }) {
    const paginationLabels = createPagination(page, pages);

    function handleChangePage(nextPage) {
        if (nextPage !== page) {
            setPage(nextPage);
        }
    }

    return (
        <Container>
            <ul>
                {paginationLabels.map((label, idx) => (
                    <li key={`${label}-${idx}`}>
                        <Button
                            active={page === label}
                            onClick={() => handleChangePage(label)}
                            disabled={label === '...'}
                        >
                            {label}
                        </Button>
                    </li>
                ))}
            </ul>
        </Container>
    );
}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
};
