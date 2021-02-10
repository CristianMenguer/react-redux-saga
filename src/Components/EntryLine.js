import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { removeEntryRedux } from '../Redux/actions/entries.actions'
import { openEditModalRedux } from '../Redux/actions/modals.actions'

const EntryLine = ({ entry }) => {

    const dispatch = useDispatch()

    return (
        <>
            <Segment color={entry.isIncome ? 'green' : 'red'} >
                <Grid columns={3} textAlign='right' >
                    <Grid.Row >
                        <Grid.Column width={10} textAlign='left' >{entry.description}</Grid.Column>
                        <Grid.Column width={3} ><Icon name='dollar' /> {entry.value}</Grid.Column>
                        <Grid.Column width={3} >
                            <Icon
                                name='edit'
                                bordered
                                onClick={() => dispatch(openEditModalRedux(entry.id))}
                            />
                            <Icon
                                name='trash'
                                bordered
                                onClick={() => dispatch(removeEntryRedux(entry.id))}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    )
}

export default EntryLine
