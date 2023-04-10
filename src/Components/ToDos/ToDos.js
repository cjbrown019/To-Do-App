import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext';
import SingleToDo from './SingleToDo';



export default function ToDos() {
  const [todos, setTodos] = useState([]);
  
  const {currentUser} = useAuth();

  const [showCreate, setShowCreate] = useState(false);
  const [handleClick, setHandleClick] = useState(false);

  const getToDos = () =>{
    axios.get(`http://todoapi.corbin-brown.com/api/Todoes`).then(response =>{
        
        setTodos(response.data)
    })
  }
  useEffect(() => {
    getToDos()
  }, []);
  return (
    <section>
      <article className="p-5 bg-custom-secondary">
        <h1>To Do List</h1>
      </article>
      <article className='justify-content-md-center m-tabled2'>
        
        <Table hover bordered striped className='mx-auto w-50 my-3 table-light'>
          <thead className='table-dark'>
            <tr>
              <th>
                Done
              </th>
              <th>
                Name
              </th>
              <th>
                Category
              </th>
              {handleClick &&
              <th>
                Category
              </th>
              
              }
            </tr>
          </thead>
          <tbody>
              {todos.map(t => 
                <SingleToDo todo={t} key={t.toDoid} getToDos={getToDos} handleClick={handleClick} setHandleClick={setHandleClick}/>)}
          </tbody>
        </Table>
              
      </article>
    </section>
  )
}
