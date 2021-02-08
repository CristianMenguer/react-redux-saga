import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import './App.css'
import DisplayBalance from './Components/DisplayBalance';
import DisplayBalances from './Components/DisplayBalances';
import EntryLine from './Components/EntryLine';
import Header from './Components/Header.js'
import NewEntryForm from './Components/NewEntryForm';

function App() {

  const [totalIncomes, setTotalIncomes] = useState(4500)
  const [totalExpenses, setTotalExpenses] = useState(4500)

  useEffect(() => {
    setTimeout(() => setTotalIncomes((props) => {
      return props + 1000
    }), 2000)
  }, [])

  return (
    <Container>

      <Header title='Budget' />

      <DisplayBalance
        label='Your Balance'
        value='2,500'
        size='small'
      />

      <DisplayBalances incomes={totalIncomes} expenses={totalExpenses} />

      <Header type='h3' title='History' />

      <EntryLine isIncome={false} title='Description' value='125.98' />

      <EntryLine isIncome title='Description' value='125.98' />

      <EntryLine isIncome title='Description' value='115.98' />

      <Header type='h3' title='Add Transaction' />

      <NewEntryForm />

    </Container>
  );
}

export default App;
