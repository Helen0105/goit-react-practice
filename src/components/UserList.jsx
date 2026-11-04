import { Component } from 'react'

class UserList extends Component {
   render() {
    // Деструктуризація пропсів
    const { users, onDelete } = this.props
    
    return (
        <ul>
          {users.map(({ id, name, age, email, isActive }) => {
            return (
              <li key={id}>
                <h2>Ім'я: {name}</h2>
                <p>Вік: {age}</p>
                <p>Пошта: {email}</p>
                <p>Статус: {isActive ? "online" : "offline"}</p>
                <button onClick={() => onDelete(id)} type='button'>Видалити</button>
              </li>
            )
          })}
        </ul>
    )
   }
}

export default UserList