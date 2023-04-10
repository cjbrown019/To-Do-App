import axios from 'axios';
import { Formik } from 'formik';
import React, {useState} from 'react'
import { useAuth } from '../../contexts/AuthContext';


export default function SingleToDo(props) {

    const {currentUser} = useAuth()

    const [showedit, setShowedit] = useState(false);

    const editShow = () =>{
        setShowedit(true)
        props.setHandleClick(true)
    }

    
    const isDone = () => {
        
        const completedTD = {
            toDoid: props.todo.toDoid,
            name : props.todo.name,
            done: !props.todo.done,
            categoryId: props.todo.category.categoryId
        }
        console.log(completedTD);
        axios.put(`http://todoapi.corbin-brown.com/api/Todoes/${props.todo.toDoid}`,completedTD).then(() => {
            
            props.getToDos()
        })
        
    }

    


  return (
    <tr>
        { currentUser.email === process.env.REACT_APP_ADMIN_EMAIL && showedit ?
        <>
            <td><input type="checkbox" readOnly checked={props.todo.done}  /></td>
            <Formik>
                <>
                <td className='text-start'>{props.todo.name}</td>
                <td>{props.todo.category.catName}</td>
                <td id='confirm link'><button className="btn btn-small bg-warning">Confirm</button></td>
                </>
            </Formik>
        </>
        :
        <>
            <td><input type="checkbox" onChange={() => isDone()} checked={props.todo.done}  /></td>
            <td className='text-start' onClick={() => editShow()}>{props.todo.name}</td>
            <td>{props.todo.category.catName}</td>
        </>
        }
    </tr>
  )
}
