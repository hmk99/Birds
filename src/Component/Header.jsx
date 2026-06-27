import logo from "../Images/BIRDs - DZ.png";

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="Logo" />
      <div className="">
        <h1>نادي دجاج الزينة بالجزائر</h1>
        <p>الصفحة الرسمية للنادي</p>
      </div>
    </div>
  );
}

export default Header;
