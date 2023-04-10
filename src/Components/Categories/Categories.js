import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {  Table } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext';
import CategoryCreate from './CategoryCreate';
import SingleCategory from './SingleCategory';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  
  const {currentUser} = useAuth();

  const [showCreate, setShowCreate] = useState(false);

  const getCategories = () =>{
    axios.get(`http://todoapi.corbin-brown.com/api/Categories`).then(response =>{
        setCategories(response.data)
    })
  }
  useEffect(() => {
    getCategories()
  }, []);


  
  return (
    <section>
    <article className="p-5 bg-custom-secondary">
      <h1>Categories</h1>
    </article>
    <article className='justify-content-md-center m-tabled'>

      <button className="btn btn-warning" onClick={() => setShowCreate(true)}>Create</button>
      {showCreate &&
        <CategoryCreate setShowCreate={setShowCreate} getCategories={getCategories} showCreate={showCreate}/>
      }

      <Table hover bordered striped className='mx-auto w-50 my-3 table-light'>
        <thead className='table-dark'>
          <tr>
            <th>
              Name
            </th>
            <th>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
        {categories.map(t => 
                <SingleCategory category={t} key={t.categoryId} getCategories={getCategories}/>)}
        </tbody>
      </Table>
            hello
    </article>
  </section>
  )
}
