import React from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { userLogin } from "../Store/user";



const App = ({history}) => {
  const dispatch = useDispatch();
  let formRef = React.createRef();
  const Login = (e) => {
    e.preventDefault();
    dispatch(userLogin("dsdsd"));
    history.push("/dashboard");
  };

  return (
    <>
      <div id="login" class="wrapper fadeInDown ">
        <div className="company_info my-2">
          <h2>Wellcome to Brick Industry Managment</h2>
        </div>
        <div id="formContent">
          <div className="my-3">
            <h3 className="text-white">Login</h3>
          </div>
          <form className="mt-5" ref={node=>formRef=node} onSubmit={Login}>
            <input
              type="text"
              class="fadeIn third"
              name="email_id"
              placeholder="username or email"
            />
            <br />
            <input
              type="text"
              class="fadeIn third"
              name="password"
              placeholder="password"
            />
            <br />
            <select name="" id="">
              <option value="">Login As</option>
              <option value="">Super Admin</option>
              <option value="">Admin</option>
              <option value="">Operator</option>
            </select>
            <br />
            <input type="submit" class="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <a class="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
