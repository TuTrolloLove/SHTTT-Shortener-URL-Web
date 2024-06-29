interface IProps {
    shortURL: string;
  }
  
  const Link: React.FC<IProps> = ({ shortURL }) => {
    if (shortURL != null) {
      console.log("No soy null");
    } else {
      console.log("Soy null");
    }
    return (
    <>
      <html>
        <p id="pLink" style={{fontFamily:"Bebas Neue, sans-serif", fontWeight:"400", fontStyle:"normal", fontSize:"3rem", marginBottom:"1rem", textAlign:"center", color:"white" }}>{shortURL}</p>
        </html>
  </>
    );
  };
  export default Link;
  