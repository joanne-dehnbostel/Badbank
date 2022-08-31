function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error:Please enter ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
    if(isNaN(deposit)) {
       setStatus('Error:Deposit must be a number');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
    if(deposit<0) {
      setStatus('Error:Deposit must not be less than zero');
      setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password,deposit);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if (!validate(deposit, 'deposit')) return;
    ctx.users.push({name,email,password,deposit,balance:0});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setDeposit('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Deposit, Balance= "
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                Deposit<br/>
                <input type="deposit" className="form-control" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
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
