import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserCrud = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    const [formData, setFormData] = useState({
        name: "",
        email:"",
        age:"",
    });

    const [editId, setEditId] = useState(null);



  return (
    
  )
}

export default UserCrud
