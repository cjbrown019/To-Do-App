import React from 'react'
import { Modal } from 'react-bootstrap'
import CreateForm from './CreateForm'

export default function CategoryCreate(props) {
  return (
    <Modal
    show={props.showCreate}
    onHide={() => props.setShowCreate(false)}
    size='lg'>
        <Modal.Header closeButton>
            <h3>Create Category</h3>
        </Modal.Header>
        <Modal.Body>
            <CreateForm showCreate={props.showCreate} setShowCreate={props.setShowCreate} getCategories={props.getCategories}/>
        </Modal.Body>
    </Modal>
  )
}
