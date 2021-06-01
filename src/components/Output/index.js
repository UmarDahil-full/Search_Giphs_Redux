import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function Output({giphy}) {
    useEffect(()=>{
        console.log(giphy);
    })
    return (
        <div>
            {
            giphy.length!=0 ? 
            giphy[0].map(el=>{
                return(
                    <>
                    <iframe src={el.embed_url}></iframe>
                    <p>{el.title}</p>
                    </>
                )
            })
            
            : <h3>Null</h3>}
        </div>
    )
}

function mapStateToProps({giphy}){
    return {giphy}
}

export default connect(mapStateToProps)(Output)

