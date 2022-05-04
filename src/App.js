import React, { useState } from 'react'
import UserTable from './tables/UserTable'

const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', song: 'floppydiskette', played: 'no' },
    { id: 2, name: 'Craig', song: 'siliconeidolon', played: 'no' },
    { id: 3, name: 'Ben', song: 'benisphere', played: 'no' },
  ]

  const [users, setUsers] = useState(usersData)

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default App