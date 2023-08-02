import "./Login.css";
import rozetkaSVG from "../../assets/rozetka.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

const Login = () => {
  return (
    <Card>
      <img src={rozetkaSVG} alt="Logo" className="logo" />
      <form>
        <div className="form-group">
          <Input type="text" placeholder="User name" />
        </div>
        <div className="form-group">
          <Input type="password" placeholder="Password" />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default Login;
