function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank Home"
      title="Welcome to the Badbank"
      text="Use the navigation bar to access banking tools."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
