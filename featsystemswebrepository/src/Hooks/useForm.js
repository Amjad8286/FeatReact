import React, { useState } from 'react'
import {omit} from 'lodash'


const useForm = (callback) => {
    
    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});

    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {
            case 'name':
                if(value.length <= 4){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        name:'name atleast have 5 letters'
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "name");
                    setErrors(newObj);
                    
                }
                break;
                case 'jobtitle':
                if(value.length <= 4){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        jobtitle:'jobtitle atleast have 5 letters'
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "jobtitle");
                    setErrors(newObj);
                    
                }
                break;
        
            case 'email':
                if(
                    !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        email:'Enter a valid email address'
                    })
                }else{

                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                    
                }
            break;
            
            // case 'password':
            //     if(
            //         !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
            //     ){
            //         setErrors({
            //             ...errors,
            //             password:'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
            //         })
            //     }else{

            //         let newObj = omit(errors, "password");
            //         setErrors(newObj);
                    
            //     }
            // break;
            //e.target.value === '' || re.test(e.target.value)
            case 'phone':
                if(
                    !new RegExp(/^[0-9\b]+$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        phone:'Allow only numbers'
                    })
                }else{

                    let newObj = omit(errors, "phone");
                    setErrors(newObj);
                    
                }
            break;
            case 'company':
                if(value.length <= 4){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        company:'company atleast have 5 letters'
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "company");
                    setErrors(newObj);
                    
                }
                break;
                case 'country':
                if(value.length < 1){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        country:'Please Select country'
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "country");
                    setErrors(newObj);
                    
                }
                break;
            default:
                break;
        }
    }

  //A method to handle form inputs
    const handleChange = (event) => {
        if(errors.ValidationMessage){
            setErrors({
                ...errors,
                ValidationMessage:''
            })
        }
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event,name,val);
        //Let's set these values in state

        setValues({
            ...values,
            [name]:val,
        })

    }

    const getFiles= (files)=> {
        console.log(files);
        setValues({
            ...values,
            files : files
        })
    };


    const handleSubmit = (event) => {
        if(event) event.preventDefault();

        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();

        }else{
            setErrors({
                ...errors,
                ValidationMessage:'Please fill all required fill'
            })
        }
    }

    const onVerify = (event) => {
        if(event)
        setValues({
            ...values,
            isCaptcha : true
        })

    }

    const ClearState = () => {
        setValues({});
    }
    
    const ResetForm = (formid) =>{
        if(formid){
            document.getElementById(formid).reset();
        }
    }

    

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        onVerify,
        ClearState,
        ResetForm,
        getFiles
    }
}

export default useForm
