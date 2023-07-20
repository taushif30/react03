import React from'react'

import { Component } from 'react'
import DisplayForm from './DisplayForm';

class FormClass extends Component{
    constructor(){
        super();
        this.state ={
            Name:"",
            dept:"",
            Rating:"",
            clicked :true,
            EmpData: []
        }
    }
    handleChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }

    toggleFunction = () =>{
        this.setState({clicked : !this.state.clicked})
    }

    handleClick = () =>{
        const empObj = {
            name : this.state.Name,
            dept : this.state.dept,
            Rating: this.state.Rating,
        }

        this.state.EmpData.push(empObj);
        this.setState({
            EmpDate : this.state.EmpData,
            Name : '',
            dept :"",
            Rating: "",
            clicked : false
        })
        console.log(this.state.EmpData)
    }


    render(){
        return(
            <>
            <h1 className='up'>EMPLOYEE FEEDBACK FORM</h1>

            {this.state.clicked ? 
            <div className='form'> 
            <form>
            <label htmlFor="name">Name : </label>
            <input id='name' placeholder='Enter Name' type='text' name='Name' value={this.state.Name} onChange={this.handleChange}/><br/>
            
            <label htmlFor="dept">Deptartment : </label>
            <input id='dept' placeholder='Enter Dept' type='text' name='dept' value={this.state.dept} onChange={this.handleChange}/><br/>
            
            <label htmlFor="Rating">rating : </label>
            <input id='Rating' placeholder='Enter Rating' type='number' name='Rating' value={this.state.Rating} onChange={this.handleChange}/><br/>
            <button className='btn1'type='button' onClick={this.handleClick}> Submit</button>
            </form>
            </div>
            :<DisplayForm  value={this.state.EmpData} toggleFunc= {this.toggleFunction}/> }
            
            </>
        )
    }
}

export default FormClass