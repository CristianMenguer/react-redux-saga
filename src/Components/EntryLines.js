import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLine from './EntryLine'

const EntryLines = ({ data, deleteEntry, editEntry }) => {

    return (
        <Container>
            {!!data && data.map(entry => (
                <EntryLine
                    key={entry.id}
                    {...entry}
                    deleteEntry={deleteEntry}
                    editEntry={editEntry}
                />
            ))}
        </Container>
    )
}

export default EntryLines