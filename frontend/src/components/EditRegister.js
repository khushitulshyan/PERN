import React, { Fragment, useState } from "react";

const EditRegister = ({registerzone}) => {
    const[fullname, setfullname] = useState(registerzone.fullname);

    //edit description function
    const updateRegister = async(e)=> {
        e.preventDefault();
        try {
            const body = {fullname: fullname};
            const response = await fetch(`http://localhost:5000/registers/${registerzone.stdid}`,{
                method: "PUT",
                headers:{"content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            console.log(response.json())

            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    };
    return <Fragment>
        
<button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${registerzone.stdid}`}>
  Edit
</button>

<div className="modal fade" id={`id${registerzone.stdid}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Todo</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=> setfullname(registerzone.fullname)}></button>
      </div>
      <div class="modal-body">
        <input type="text" className="form-control" value={fullname} onChange={e => setfullname(e.target.value)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={e => updateRegister(e)}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    </Fragment>;
};

export default EditRegister;