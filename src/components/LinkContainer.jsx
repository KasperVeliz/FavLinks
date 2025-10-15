import Table from "./Table"
import Form from "./Form"

import { useState } from "react"

function LinkContainer(){

    const [favLinks, setFavLinks] = useState([])

    const handleRemove = (index) => {
        const updatedLinks = [...favLinks.slice(0,index), ...favLinks.slice(index+1)];
        setFavLinks(updatedLinks)
    }

    const handleSubmit = (favLink) =>{
        setFavLinks([...favLinks, favLink])
    }

    return(
        <>
        <div>
            <div>
                <h1>Favorite Links</h1>
                <p>Add a new link with a name and URL to the table!</p>
            </div>
            <Table linkData={favLinks} removeLink={handleRemove}/>
            <h1>Add new</h1>
            <Form onSubmitLink={handleSubmit}/>
        </div>
        </>
    )
}

export default LinkContainer