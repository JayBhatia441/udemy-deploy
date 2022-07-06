import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown  from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items = [
    {
        title:'What is React?',
        content: 'React is a frontend javascript framework'
    },
    {
        title:'Why use React?',
        content: 'React is very famous'
    },    {
        title:'How to use React?',
        content: 'You use react by making components'
    },
]

const options = [

    {
        label : 'The Color Red',
        value:'red'
    },
    {
        label:'The Color Green',
        value:'green'
    },
    {
        label:'The Color Blue',
        value: 'Blue'
    }
]


export default () => {
    
    const [selected,setSelected] = useState(options[0])

     return (
        <div>
            <Header />
            <Route path='/'>
                <Accordion items={items}></Accordion>
            </Route>

            <Route path='/list'>
                <Search></Search>
            </Route>
            <Route path='/dropdown'>
                <Dropdown options={options} selected={selected} onSelectChange={setSelected}></Dropdown>
            </Route>

            <Route path='/translate'>
                <Translate></Translate>
            </Route>
        </div>

    )
}

