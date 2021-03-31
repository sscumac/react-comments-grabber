import { useState } from "react";

// each input is gonna get its own piece of state (component level)
function AddComment({ onAdd }) {

  const [name, setName] = useState("")
  const [body, setBody] = useState("")
  const [email, setEmail] = useState("")

  // we are not calling onAdd directly
  function submit(eve) {
    eve.preventDefault()
    // just some validation
    if(!name) {
      alert("please provide a name")
      return
    }

    onAdd({ name, body, email })
    // clear the form
    setName("")
    setBody("")
    setEmail("")
  }

  return (
    <form className="add-form" onSubmit={submit}>
      <div className="form-control">
        <label>Name</label>
        <input type="text" placeholder="Add Comment" value={name} onChange={(eve) => setName(eve.target.value)}/>
      </div>
      <div className="form-control">
        <label>text</label>
        <input type="text" placeholder="Add text" value={body} onChange={(eve) => setBody(eve.target.value)} />
      </div>
      <div className="form-control">
        <label>email</label>
        <input type="text" placeholder="Add your email" value={email} onChange={(eve) => setEmail(eve.target.value)} />
      </div>
      <input type="submit" value="Save Comment"/>
    </form>
  )
}

export default AddComment
