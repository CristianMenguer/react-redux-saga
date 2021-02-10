import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLine from './EntryLine'

const EntryLines = ({ data }) => {

    return (
        <Container>
            {!!data && data.map(entry => (
                <EntryLine
                    key={entry.id}
                    entry={entry}
                />
            ))}
        </Container>
    )
}

export default EntryLines
