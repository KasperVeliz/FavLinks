function TableHeader(){
    // Renders head of table
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    // Renders table data

    const rows = props.linkData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>
                    <a href={row.url}>{row.url}</a>
                </td>
                <td>
                    <button onClick={()=> props.removeLink(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

function Table(props){

    const removeLink = (index) => {
        props.removeLink({index})
    }

    return(
        <table>
            <TableHeader/>
            <TableBody linkData={props.linkData} removeLink={removeLink}/>
        </table>
    )
}

export default Table