import React, { useState, useEffect } from 'react'
import Cardcontainer from './Cardcontainer'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'


const Add = () => {
    const [arr, setarr] = useState([])
    const [changedhed, setchangehed] = useState('')
    const [ind, setind] = useState()

    const containerchange = (heading) => {
        setchangehed(heading)
        arr[ind].cat = heading.toLowerCase()
    }

    const changecat = (i) => {
        setind(i)
    }


    const delfunc = (i) => {
        setarr(arr.filter((obj, index) => {
            return index != i
        }))
        toast.success("Task Deleted succesfully", {
            style: {
                width: '200px',
                height: "60px",
                border: '1px solid #3498db',
                padding: '16px',
            }
        })
    }

    return (
        <>
            <Toaster
                position="top-center"
            />
            <Cardcontainer Heading="Most-Important" value='most-important' taskarr={arr} delfunc={delfunc} changecat={changecat} containerchage={containerchange} ></Cardcontainer>
            <Cardcontainer Heading="Important" value="important" taskarr={arr} delfunc={delfunc} changecat={changecat} containerchage={containerchange} ></Cardcontainer>
            <Cardcontainer Heading="Optional" value="optional" taskarr={arr} delfunc={delfunc} changecat={changecat} containerchage={containerchange}></Cardcontainer>

            <div className="add">
                <h1>Add task</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    const Title = document.getElementById("title").value
                    const mess = document.getElementById("mess").value
                    const opt = document.getElementById("opt").value

                    setarr([...arr, {
                        "title": Title,
                        "meassage": mess,
                        "cat": opt,
                    }])


                    document.getElementById("title").value = ""
                    document.getElementById("mess").value = ""

                    toast.success("Task Added succesfully", {
                        style: {
                            width: '200px',
                            height: "60px",
                            border: '1px solid #3498db',
                            padding: '16px',
                        }
                    })
                }
                }>
                    <input type="text" id='title' placeholder='Title' />
                    <textarea name="" id="mess" cols="30" rows="10" placeholder='Message' ></textarea>
                    <select name="" id="opt">
                        <option value="most-important">Most Important</option>
                        <option value="important">Important</option>
                        <option value="optional">Optional</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}

export default Add
