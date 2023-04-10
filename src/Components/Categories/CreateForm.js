import React from 'react'
import axios from 'axios'
import { catSchema } from '../../Utilities/validationSchema'
import { Field, Form, Formik } from 'formik'

export default function CreateForm(props) {
    const handleSubmit = (values) =>{
        const categoryToCreate = values
            axios.post(`http://todoapi.corbin-brown.com/api/Categories`, categoryToCreate).then(() => {
                props.setShowCreate(false)
                props.getCategories()
    })
    }
  return (
    <Formik
            initialValues={{
                catName: props.Category ? props.resource.catName : '',
                catDesc: props.Category ? props.resource.catDesc : ''
            }}
            validationSchema={catSchema}
            onSubmit={values => handleSubmit(values)}
            >

           
            {({errors, touched}) => (
                <Form id='catForm' className="row text-center m-auto">
                    <div className="form-group m-1 p-1">
                        <Field name='catName' className='form-control' placeholder='Name'/>
                        {errors.catName && touched.catName ?
                            <div className='text-danger'>{errors.catName}</div>
                            :
                            null
                        }
                    </div>
                    <div className="form-group m-1">
                        <Field name='catDesc' as='textarea' className='form-control' placeholder='Description' style={{resize:'none', height: '5em'}}/>
                        {errors.catDesc && touched.catDesc ?
                            <div className='text-danger'>{errors.catDesc}</div>
                            :
                            null
                        }
                    </div>
                    <div className="form-group m-1">
                        <button className="btn btn-info m-3">
                            Submit
                        </button>
                    </div>
                </Form>
            )}
            
            </Formik>
  )
}
