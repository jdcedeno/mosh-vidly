import React from 'react';

const Like = (props) => {
    let { onClick, liked } = props;
    let classes = "fa fa-heart";
    if (!liked) classes += "-o";        
    
    return (<i onClick={onClick} style={{cursor: "pointer"}} className={classes} aria-hidden="true" />);
}
 
export default Like;