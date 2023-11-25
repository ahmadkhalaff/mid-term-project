
function Brands() {

    const Logos = [
     
    ];
  return (
    <div className="_brands">
      {Logos.map((logo, key) => (
        <div key={key} className="mx-10">
          <img src={logo} 
          style={{objectFit: "contain",height: "100px", width: "100px"}}
           alt="" />
        </div>
      ))}
    </div>
  );
}

export default Brands