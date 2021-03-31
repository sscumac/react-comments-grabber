import { useState } from "react";

// each input is gonna get its own piece of state (component level)
function AddComment({ onAdd, onShow }) {

  const [name, setName] = useState("")
  const [body, setBody] = useState("")
  const [email, setEmail] = useState("")

  // toggle create comment form
  let visibility = {}
  onShow ? (visibility = { visibility: "unset" }) : (visibility = { visibility: "hidden" })

  // not calling onAdd directly
  function submit(eve) {
    eve.preventDefault()
    
    if(!name) {
      alert("please provide a name")
      return
    }

    onAdd({ name, body, email })
    
    setName("")
    setBody("")
    setEmail("")
  }


  return (
    <form className="add-form" style={visibility} onSubmit={submit}>
      <div className="form-control">
        <label>Name</label>
        <input type="text" placeholder="Add Name" value={name} onChange={(eve) => setName(eve.target.value)}/>
      </div>
      <div className="form-control">
        <label>text</label>
        <input type="text" placeholder="Add text" value={body} onChange={(eve) => setBody(eve.target.value)} />
      </div>
      <div className="form-control">
        <label>email</label>
        <input type="text" placeholder="Add your email" value={email} onChange={(eve) => setEmail(eve.target.value)} />
      </div>
      <input className="btn-save" type="submit" value="save comment"/>
    </form>
  )
}

export default AddComment
