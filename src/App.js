import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import './App.css'
import DisplayBalance from './Components/DisplayBalance';
import DisplayBalances from './Components/DisplayBalances';
import EntryLines from './Components/EntryLines';
import Header from './Components/Header.js'
import ModalEdit from './Components/ModalEdit';
import NewEntryForm from './Components/NewEntryForm';

function App() {

  const initialEntries = [
    {
      id: 1,
      description: 'Salary',
      value: 1000,
      isIncome: true
    },
    {
      id: 2,
      description: 'Rent',
      value: 300,
      isIncome: false
    },
    {
      id: 3,
      description: 'Groceries',
      value: 200,
      isIncome: false
    },
  ]

  const [totalIncomes, setTotalIncomes] = useState(4500)
  const [totalExpenses, setTotalExpenses] = useState(4500)
  const [entries, setEntries] = useState(initialEntries)
  const [entry, setEntry] = useState({
      id: 0,
      description: '',
      value: 0,
      isIncome: true
  })
  //
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    let incomes = 0
    let expenses = 0
    if (!!entries)
      entries.forEach(entry => {
        if (entry.isIncome)
          incomes += parseFloat(entry.value)
        else
          expenses += parseFloat(entry.value)
      })
    //
    setTotalIncomes(incomes)
    setTotalExpenses(expenses)
    //
  }, [entries])

  useEffect(() => {
    if (!modalIsOpen && !!entry && entry.id > 0)
      resetEntry()
    //
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalIsOpen])

  const resetEntry = () => {
    setEntry({
      id: 0,
      description: '',
      value: 0
  })
  }

  const deleteEntry = (id) => {
    const result = entries.filter(element => element.id !== id)
    setEntries(result)
  }

  const editEntry = (propId) => {
    if (!!propId) {
      const index = entries.findIndex(element => element.id === propId)
      const entryToEdit = entries[index]
      if (entryToEdit.id === propId) {
        setEntry(entryToEdit)        
      }
      setModalIsOpen(true)
    }
  }

  const addEntry = () => {
    const newEntry = {
      ...entry,
      id: entries.length + 1,
    }
    resetEntry()
    setEntries([...entries, newEntry])
  }

  const saveEntry = () => {
    const newEntries = [...entries]
    const index = entries.findIndex(element => element.id === entry.id)
    newEntries[index] = entry
    //
    setEntries(newEntries)
    resetEntry()
    setModalIsOpen(false)
  }

  return (
    <Container>

      <Header title='Budget' />

      <DisplayBalance
        label='Your Balance'
        value={totalIncomes - totalExpenses}
        size='small'
      />

      <DisplayBalances incomes={totalIncomes} expenses={totalExpenses} />

      <Header type='h3' title='History' />

      <EntryLines
        data={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <Header type='h3' title='Add Transaction' />

      <NewEntryForm
        addEntry={addEntry}
        entry={entry}
        setEntry={setEntry}
      />

      <ModalEdit
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        entry={entry}
        setEntry={setEntry}
        saveEntry={saveEntry}
      />
    </Container>
  );
}

export default App;
