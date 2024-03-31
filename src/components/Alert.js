import React from "react";

function Alert(props) {
    const capitalized=(alerttype)=>{
     return alerttype.charAt(0).toUpperCase()+alerttype.slice(1);
    }
  return (
    <div style={{height:'60px'}}>
   {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
    </div>
  );
}

export default Alert;
