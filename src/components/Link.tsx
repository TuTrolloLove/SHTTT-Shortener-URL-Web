

interface IProps {
    shortURL: string;
  }
  
  const Link: React.FC<IProps> = ({ shortURL }) => {
    return (
    <>

      <html>
    <br></br>
        <p id="pLink" style={{fontFamily:"Bebas Neue, sans-serif", fontWeight:"400", fontStyle:"normal", marginBottom:"1.3rem", textAlign:"center", color:"white"}}>{shortURL}</p>
        </html>
  </>
    );
  };
  export default Link;
  