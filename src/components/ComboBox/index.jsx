import React from 'react';
import { Input, Label, FormGroup } from 'reactstrap';
import './style.css';

const ComboBox = ({ label, options, name, id, onChange }) => {
    return (
        <FormGroup>
            {label && <Label for={id}>{label}</Label>}
            <Input type="select" name={name} id={id} onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Input>
        </FormGroup>
    );
};

export default ComboBox;
