import React from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

const EntryForm = ({ entry, setEntry }) => {

    return (
        <>
            <Form.Group widths={3} >
                <Form.Input
                    placeholder='Insurance'
                    icon='tags'
                    width={12}
                    label='Description'
                    value={entry.description}
                    onChange={(event) => setEntry(oldState => ({ ...oldState, description: event.target.value }))}
                />
                <Form.Input
                    placeholder='100.00'
                    icon='dollar'
                    width={4}
                    label='Value'
                    iconPosition='left'
                    value={entry.value}
                    onChange={(event) => setEntry(oldState => ({ ...oldState, value: event.target.value }))}
                />
            </Form.Group>
            <Segment compact >
                <Checkbox
                    toggle
                    label='Is Income'
                    checked={entry.isIncome}
                    onChange={(event) => setEntry(oldState => ({ ...oldState, isIncome: !!!oldState.isIncome }))}
                />
            </Segment>
        </>
    )
}

export default EntryForm