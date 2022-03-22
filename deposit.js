function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
 const [deposit, setDeposit]         = React.useState('');
  const ctx = React.useContext(UserContext);  
  return (
   <h1>Deposit with Validation and Handling and deposit form card</h1>
  )

function validate(field, label){
      if (!field) {
       setStatus('Error: ' + label);
       setTimeout(() => setStatus(''),3000);
       return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(deposit);
    if (!validate(deposit,     'name'))     return;
    ctx.users.push({deposit,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setDeposit('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}
