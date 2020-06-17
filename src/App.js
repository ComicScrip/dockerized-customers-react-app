import React from 'react';
import useResourceCollection from './hooks/useResourceCollection'
import './App.css'

function App() {
  const {collection: customers} = useResourceCollection('/customers')

  if (!customers) return 'Loading...'

  return (
    <div className="App">
      <h1>My customers</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {customers.data.map(c => {
            return <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
