function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    </>
<Card
      txtcolor="green"
      header="All Data"
      title="All User Data is Shown Here"
{JSON.stringify(ctx)}
      text="Use the navigation bar to access banking tools."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />  
  );
}
