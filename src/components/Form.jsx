import { useState } from "react"

function Form(props){

    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }

    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            props.onSubmitLink({name,url})
        }}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" onChange={handleNameChange} autoComplete="off"/>
            <br></br><br></br>
            <label htmlFor="url">URL: </label>
            <input type="text" id="url" name="url" onChange={handleUrlChange} autoComplete="off"/>
            <br></br><br></br>
            <input type="submit" value={"Submit"}></input>
        </form>
    )
}

export default Form