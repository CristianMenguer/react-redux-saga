import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css'

function App() {
  return (
    <Container>

      <Header as='h1' >Budget</Header>

      <Statistic size='small' >
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,500</Statistic.Value>
      </Statistic>

      <Segment textAlign='center' >

        <Grid columns={2} divided={true} >
          <Grid.Row >
            <Grid.Column >
              <Statistic size='tiny' color='green' >
                <Statistic.Label>Incomes</Statistic.Label>
                <Statistic.Value>4,500</Statistic.Value>
              </Statistic>
            </Grid.Column>

            <Grid.Column>
              <Statistic size='tiny' color='red' >
                <Statistic.Label>Expenses</Statistic.Label>
                <Statistic.Value>2,000</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Segment>

      <Header as='h3'>History</Header>

      <Segment color='red' >
        <Grid columns={3} textAlign='right' >
          <Grid.Row >
            <Grid.Column width={10} textAlign='left' >Description</Grid.Column>
            <Grid.Column width={3} >125.98</Grid.Column>
            <Grid.Column width={3} >
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='green' >
        <Grid columns={3} textAlign='right' >
          <Grid.Row >
            <Grid.Column width={10} textAlign='left' >Description</Grid.Column>
            <Grid.Column width={3} >125.98</Grid.Column>
            <Grid.Column width={3} >
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3' >Add Transaction</Header>
    <Form unstackable >
      <Form.Group >
        <Form.Input 
          placeholder='Insurance' 
          icon='tags'
          width={12}
          label='Description'
        />
        <Form.Input 
          placeholder='100.00' 
          icon='currency'
          width={4}
          label='Value'
          iconPosition='left'
        />
      </Form.Group>
      <Button.Group style={{marginTop: 20}} >
      <Button >Cancel</Button>
      <Button.Or />
      <Button primary >Ok</Button>
      </Button.Group>
      
    </Form>

    </Container>
  );
}

export default App;
