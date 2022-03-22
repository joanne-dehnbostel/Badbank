function Home(){
  return (
    <Card
      txtcolor="blue"
      header="BadBank Home"
      title="Welcome to the Badbank"
      text="Use the navigation bar to access banking functions"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
