import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';


function Form() {
    const {addIncome} = useGlobalContext()

    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        data: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category, description } = inputState

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
    }
    
  return (
    <FormStyled onSubmit={handleSubmit}>
        <div className="input-control">
            <input 
                type="text" 
                value={title}
                name={'title'}
                placeholder="Salary Title"
                onChange={handleInput('title')}
            />
        </div>
        <div className="input-control">
            <input 
                type="text" 
                value={amount}
                name={'amount'}
                placeholder="Salary Amount"
                onChange={handleInput('amount')}
            />
        </div>
        <div className="input-control">
            <DatePicker 
                id="date" 
                value={date}
                placeholder="Enter A Date"
                selected={date}
                dateFormate="dd/mm/yyyy"
                onChange={(date) => {
                    setInputState({...inputState, date: date})
                }}
            />
        </div>
        <div className="seletes input-control">
            <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                <option value="" disabled>Select Option</option>
                <option value="salary">Salary</option>
                <option value="freelancing">Freelancing</option>
                <option value="Investments">Investments</option>
                <option value="stocks">Stocks</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="bank">Bank Transfer</option>
                <option value="youtube">Youtube</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="submit-btn">
            <button>Add Income</button>
        </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
display: flex;
flex-direction: column;
gap: 2rem;
input, textarea, select{
    font-family: inherit;
    outline: none;
    border: none;
    padding: 0%.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
        color: rgba(34, 34, 96, 0.4);
    }
    .input-control{
        input{
            width: 100%;
        }
    }
    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }
}

`

export default Form