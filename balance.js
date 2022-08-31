function Balance(){
  return (
    <h1>Balance</h1>
    function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All Data in Bank</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}
  )
}
