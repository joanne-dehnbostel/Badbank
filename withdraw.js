function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [withdraw, setWithdraw] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error:Please enter ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
    if(isNaN(deposit)) {
       setStatus('Error:Withdrawal must be a number');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
    if(withdraw<balance) {
      setStatus('Error:Not enough cash!');
      setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }
  function handleCreate(){
    console.log(name,email,password,withdraw);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if (!validate(withdraw, 'withdraw')) return;
    ctx.users.push({name,email,password,withdraw,balance});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setWithdraw('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Withdrawal"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                Withdrawal<br/>
                <input type="withdraw" className="form-control" id="withdraw" placeholder="Enter withdrawal amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw Funds</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another withdrawal</button>
              </>
            )}
    />
  )
}

