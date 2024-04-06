import React from 'react';
import '../styles/WorkerForm.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
// import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import * as action from "../store/action"
import { useDispatch, useSelector } from 'react-redux';

// const roles = [{ id: 0, value: "principal" }, { id: 1, value: "teacher" }, { id: 2, value: "supervisor" },{ id: 3, value: "secretery" }];

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    identity: yup.string().required(),
    startDate: yup.date().required(),
    dateOfBirth: yup.date().required(),
    gender:yup.number().required(),
    roles: yup.array().of(
      yup.object().shape({
        Name: yup.string().required(),
        isNanager: yup.number().positive(),
        startDate: yup.date().required(),
      })
    ),
    // roles: yup.array().of(yup.object().required()),
  })
  .required()
;

const WorkerForm = () => {
  const workerRedux = useSelector(x => x.worker)
  const [worker, setWorker] = useState(null);
  const [roles, setRoles] = useState([]);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }, control
  } = useForm({
    resolver: yupResolver(schema),
    values: worker,
  })
  useEffect(() => {

    axios.get("https://localhost:7259/api/Roles")
      .then(info => {
        console.log(info.data, "daratatrtra")
        // dispatch({ type: action.SET_WORKERS, workers: info.data })
        // setWorkers(info.data)
        // console.log(workers)
        setRoles(info.data);
        // setRoles(["teacher","principal"]);

      })
      .catch(err => console.log(err));
  }, []);

  const cancle=()=>{
    dispatch({ type: action.SET_WORKER, worker: null })
    navigate("/workerList");
  }
  const onSubmit1 = (data) => {

    // data.UserId = user.Id;

    if (workerRedux) {
      // dispatch({ type: action.EDIT_WORKER, worker: data })
      axios.put("https://localhost:7259/api/Worker", data) 
      .then(x => {
          dispatch({ type: action.EDIT_WORKER, worker: x.data })
          alert("worker edited succesfully");
          navigator('/homepage');
      })
      .catch(err => console.log(err))
    }else{
    // {dispatch({ type: action.ADD_, worker: data })
      axios.post("https://localhost:7259/api/Worker", data)
      .then(x => {
          dispatch({ type: action.ADD_WORKER, recipe: x.data })
          alert("worker added succesfully")
          navigate('/homepage');
      })
      .catch(err => console.log(err))}
  }
  
  const { fields: fieldsRoles, append: append, remove: remove, } = useFieldArray({
    control,
    name: "roles",
  });
  // const { fields: fieldsInstructions, append: appendInstructions, remove: removevInstructions, } = useFieldArray({
  //   control,
  //   name: "roles",
  // });


  
  return (
    <div className="worker-form-container">
      <h2 className="form-heading">{workerRedux ? 'Edit Worker' : 'Add Worker'}</h2>
      <form className='ui form' onSubmit={handleSubmit(onSubmit1)}>
        <div className="form-row">
          <label>First Name:</label>
          <input type="text" name="firstName" {...register("firstName")} //onChange={this.handleInputChange}
           />
        </div>
        <div className="form-row">
          <label>Last Name:</label>
          <input type="text" name="lastName" {...register("lastName")}  />
        </div>
        <div className="form-row">
          <label>Identity:</label>
          <input type="text" name="identity"{...register("identity")} />
        </div>
        <div className="form-row">
          <label>Starting Date:</label>
          <input type="date" name="startDate" {...register("startDate")} />
        </div>
        <div className="form-row">
          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" {...register("dateOfBirth")}  />
        </div>
        <div className="form-row">
          <label>Gender:</label>
          <select name="gender" {...register("gender")} >
            <option value="">Select Gender</option>
            <option value={0}>Male</option>
            <option value={1}>Female</option>
          </select> <hr></hr>
          </div>
        <div className="form-row">
       
        {fieldsRoles.map((field, index) => (
                <div className="ui grid">
                    <label>Role Name:</label>
                    <div className="four wide column">
                    <select name="isManager" {...register(`roles.${index}.name`)} >
                        <option value="">Select Role Name</option>
                        {roles.map((r,index)=>(
                          <option value={r.name}>{r.name}</option>
                        ))}

                    </select>
                        {/* <input {...register()} placeholder="isManager" type="select" /> */}
                        <p>{errors.roles?.[index]?.b?.message}</p>
                    </div>
                    <div className="four wide column">
                      <label for="cM">Manager</label>
                        <input type='checkbox' id="cM" name='cM' {...register(`roles.${index}.isManager`)} value="isManager" />
                        <p>{errors.roles?.[index]?.a?.message}</p>
                    </div>
                    <div className="four wide column">
                      <label>Start Working Date:</label>
                        <input {...register(`roles.${index}.Type`)} placeholder="startDate" type='date' />
                        <p>{errors.roles?.[index]?.c?.message}</p>
                    
                    </div><div className="four wide column">
                    <button className="ui button" onClick={() => remove(index)}> delete</button>
                    </div><hr />

                </div>
            ))}
            <button class="ui button" onClick={() => append({})}> add Role</button><br /><br />
            {/* {fieldsInstructions.map((field, index) => (
                <>

                    <input {...register(`Instructions.${index}`)} placeholder="instruction" />
                    <p>{errors.Instructions?.[index]?.a?.message}</p>
                    <button class="ui button" onClick={() => removevInstructions(index)}> delete</button>
                    <hr />

                </>
            ))}
            <button class="ui button" onClick={() => appendInstructions('')}> add Instruction</button> */}
            </div><br></br>
            <div className="form-buttons">
        <input className="save-button ui button" type="submit"  value="Save"></input> 
        {/* <input class=""  /> */}
         <button className="cancel-button" onClick={cancle}>Cancle</button>
      </div>
      </form>
      
    </div>
  );

         }   

export default WorkerForm;
