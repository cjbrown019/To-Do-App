import * as Yup from 'yup'


const toDoSchema = Yup.object().shape(
    {
        name: Yup.string().max(100, '100 characters MAX').required('Required'),
        done: Yup.boolean(),
        categoryId: Yup.number()
    }
)


const catSchema = Yup.object().shape({
    catName: Yup.string().max(25, 'Max 25 characters').required('Required'),
    catDesc: Yup.string().max(100, 'Max 100 characters')
})


export { toDoSchema, catSchema}