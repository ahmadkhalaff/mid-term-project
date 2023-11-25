
import InputField from "./InputField";
import { useState } from "react";
function NewsLetter() {
    const [email, setEmail] = useState("");
  return (
    <div className="newsLetter_container">
      <h1 className="bannerheading">הרשמו וקבלו עדכונים על חולצות חדשות</h1>
      <div className="newsLetter_inner">
        <InputField
          placeholder="Write your email address here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          editable={true}
        />
        <button className="_newsLetterbutton">sign up</button>
      </div>
    </div>
  );
}

export default NewsLetter