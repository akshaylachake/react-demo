import React, { useState } from 'react';
import image from "../../assets/dynamicInputs.png"

function DynamicInputs() {
    const [contactList, setContactList] = useState([{
        email: '',
        name: ''
    }]);
  
    const addRow = () => {
        setContactList([...contactList, {
            email: '',
            name: ''
        }])
    }

    const removeRow = (index) => {
        const newInputs = contactList.filter((_, i) => i !== index);
        setContactList(newInputs);
    }

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newInputs = [...contactList];
        newInputs[index][name] = value;
        setContactList(newInputs);
    };

    return (
        <div>
            <img src={image} alt="img" width={600}/>
            <br />
            {
                contactList.map((input, index)=>{
                    return(
                        <div key={index}>
                            <input 
                            type="email" 
                            name="email"
                            placeholder="Email"
                            value={input.email}
                            onChange={(event) => handleInputChange(index, event)}
                            />
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Name"
                                value={input.name}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                            <button onClick={()=>removeRow(index)}>Remove</button>
                        </div>
                    )
                })
            }
            <button onClick={addRow}>Add</button>
        </div>
    );
}

export default DynamicInputs