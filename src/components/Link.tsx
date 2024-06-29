

interface IProps {
    shortURL: string;
  }
  
  const Link: React.FC<IProps> = ({ shortURL }) => {
    return (
    <>

      <html>
    <br></br>
        <p id="pLink" style={{fontFamily:"Bebas Neue, sans-serif", fontWeight:"400", fontStyle:"normal", marginBottom:"1.3rem", textAlign:"center", color:"white", border:"1px solid blue", backgroundColor:"rgb(2, 2, 155)"}}>{shortURL}</p>
        </html>
  </>
    );
  };
  export default Link;
  