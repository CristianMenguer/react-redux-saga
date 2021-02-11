import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import './App.css'
import DisplayBalance from './Components/DisplayBalance';
import DisplayBalances from './Components/DisplayBalances';
import EntryLines from './Components/EntryLines';
import Header from './Components/Header.js'
import ModalEdit from './Components/ModalEdit';
import NewEntryForm from './Components/NewEntryForm';
import { useSelector } from 'react-redux'
import useEntryDetails from './hooks/useEntryDetails';

function App() {

    const [totalIncomes, setTotalIncomes] = useState(4500)
    const [totalExpenses, setTotalExpenses] = useState(4500)
    //
    const entries = useSelector(state => state.entries)
    const { isEditModalOpen, idEditModal } = useSelector(state => state.modals)
    //
    const { entry, setEntry, editEntry } = useEntryDetails()
    //

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
        if (isEditModalOpen && idEditModal > 0) {
            const entryToEdit = entries.filter(element => element.id === idEditModal)
            setEntry(entryToEdit[0])
        }
        //
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEditModalOpen, idEditModal])

    return (
        <Container>

            <Header title='Budget' />

            <DisplayBalance
                label='Your Balance'
                value={totalIncomes - totalExpenses}
                size='small'
                color={totalIncomes - totalExpenses < 0 ? 'red' : 'green'}
            />

            <DisplayBalances incomes={totalIncomes} expenses={totalExpenses} />

            <Header type='h3' title='History' />

            <EntryLines
                data={entries}
            />

            <Header type='h3' title='Add Transaction' />

            <NewEntryForm />

            <ModalEdit
                modalIsOpen={isEditModalOpen}
                entry={entry}
                setEntry={setEntry}
                editEntry={editEntry}
            />
        </Container>
    );
}

export default App;
