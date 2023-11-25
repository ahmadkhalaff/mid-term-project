import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();

  return (
    <div className="rootDiv">
    <div className="nestedDiv">
        <h1 className="nestedDiv h1">
            Shop. support. take part.
        </h1>
        <p className="nestedDiv p">
          חולצות למטרה טובה היום יותר מאי פעם נותנים למי שזקוק לזה הכי הרבה
        </p>
        <button className="nestedDiv button" onClick={()=>navigate("/shirts")}>
            'קולקציית מלחמרצ
        </button>
    </div>
</div>

  );
}

export default Hero;
