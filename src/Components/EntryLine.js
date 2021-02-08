import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'

const EntryLine = ({ isIncome = true, title, value }) => {

    return (
        <Segment color={isIncome ? 'green' : 'red'} >
            <Grid columns={3} textAlign='right' >
                <Grid.Row >
                    <Grid.Column width={10} textAlign='left' >{title}</Grid.Column>
                    <Grid.Column width={3} >{value}</Grid.Column>
                    <Grid.Column width={3} >
                        <Icon name='edit' bordered />
                        <Icon name='trash' bordered />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default EntryLine