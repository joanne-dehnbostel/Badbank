function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
 const [deposit, setDeposit]         = React.useState('');
  const ctx = React.useContext(UserContext);  
  return (
   <h1>Deposit with Validation and Handling and Card</h1>
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
              Deposit<br/>
              <input type="input" className="form-control" id="deposit" placeholder="Enter deposit" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
              
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Deposit</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another deposit</button>
              </>
            )}
    />
  )
}
