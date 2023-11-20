import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import './App.css';

import Navbar from './Components/Navbar';
import Section from './Components/Section';

function App() {
  const allusers = ['Yogesh', 'Shankar Kumar', 'Ramesh', 'Suresh', 'Anoop sharma']
  const allpriorities = [{ name: 'No priority', priority: 0 }, { name: 'Low', priority: 1 }, { name: 'Medium', priority: 2 }, { name: 'High', priority: 3 }, { name: 'Urgent', priority: 4 }]
  const allstatus = ['Todo', 'Done', 'In progress', 'Backlog', 'Cancelled']

  const [orderValue, setorderValue] = useState(getFromLocalStorage("orderValue") || 'title')
  const [groupValue, setgroupValue] = useState(getFromLocalStorage("groupValue") || 'status')
  const [cardDetails, setcardDetails] = useState([]);


  function handleGroupValue(value) {
    setgroupValue(value);
  }

  function handleOrderValue(value) {
    setorderValue(value);
  }


  const ordering = useCallback(async (values) => {
    values.sort((a, b) =>
  orderValue === 'priority'
    ? b.priority - a.priority
    : orderValue === 'title'
    ? a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    : 0
);

  setcardDetails(values);
  }, [orderValue, setcardDetails]);

  function storeInLocalStorage(key, state) {
    localStorage.setItem(key, JSON.stringify(state));
  }

  function getFromLocalStorage(key) {
    const storedState = localStorage.getItem(key);
    if (storedState) {
      return JSON.parse(storedState);
    }
    return null;
  }

  useEffect(() => {
    storeInLocalStorage("groupValue", groupValue);
    storeInLocalStorage("orderValue", orderValue);
    async function fetchData() {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      await refactorData(response);

    }
    async function refactorData(response) {
      let AllValues = []
      
      if (response.status === 200) {
        response.data.tickets.forEach(ticket => {
          response.data.users.forEach(user => {
            if (ticket.userId === user.id) {
              const newValue = { ...ticket, userObj: user };
              AllValues.push(newValue);
            }
          });
        });
      }
      setcardDetails(AllValues)
      ordering(AllValues)
      // console.log(AllValues);
    }
    fetchData();
  }, [ordering, groupValue, orderValue])


  return (
    <>
      <Navbar
        groupValue={groupValue}
        orderValue={orderValue}
        handleGroupValue={handleGroupValue}
        handleOrderValue={handleOrderValue}
      />
      <section className="Board">
  <div className="Board-container">
    {(() => {
      switch (groupValue) {
        case 'status':
          return allstatus.map(iterator => (
            <Section
              key={iterator}
              groupValue="status"
              orderValue={orderValue}
              iteratorvalue={iterator}
              allstatus={allstatus}
              cardDetails={cardDetails}
            />
          ));

        case 'user':
          return allusers.map(iterator => (
            <Section
              key={iterator}
              groupValue="user"
              orderValue={orderValue}
              iteratorvalue={iterator}
              allusers={allusers}
              cardDetails={cardDetails}
            />
          ));

        case 'priority':
          return allpriorities.map(iterator => (
            <Section
              key={iterator.priority}
              groupValue="priority"
              orderValue={orderValue}
              iteratorvalue={iterator.priority}
              allpriorities={allpriorities}
              cardDetails={cardDetails}
            />
          ));

        default:
          return null;
      }
    })()}
  </div>
</section>;

    </>
  );
}

export default App;
