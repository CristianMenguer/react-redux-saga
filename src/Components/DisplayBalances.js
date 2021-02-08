import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance';

const DisplayBalances = ({ incomes = 0, expenses = 0 }) => {

    return (
        <Segment textAlign='center' >

            <Grid columns={2} divided={true} >
                <Grid.Row >
                    <Grid.Column >
                        <DisplayBalance
                            size='tiny'
                            color='green'
                            label='Incomes'
                            value={incomes}
                        />
                    </Grid.Column>

                    <Grid.Column>
                        <DisplayBalance
                            size='tiny'
                            color='red'
                            label='Expenses'
                            value={expenses}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Segment>
    )
}

export default DisplayBalances