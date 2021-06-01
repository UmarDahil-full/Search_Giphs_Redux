import React, { useState } from 'react'


import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchGiphyByName} from "../../action"

 function Form(props) {
    const [val, setVal] = useState('')
    const search=(e)=>{
        e.preventDefault(val)
        props.fetchGiphyByName(val)
    }
    return (
<form onSubmit={search}>
    <input
        value={val}
        onChange={(e)=>setVal(e.target.value)}
    />
    <button>Idi Nahui</button>
             
</form>
    )
}

function mapDispathToProps(dispatch){
    return bindActionCreators({fetchGiphyByName },dispatch)
}
export default connect(null, mapDispathToProps)(Form)
