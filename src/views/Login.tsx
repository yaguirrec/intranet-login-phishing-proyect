import { useSearchParams } from "react-router";
import {
  useEffect,
  useState,
  type ChangeEvent,
  type FC,
  type FormEvent,
} from "react";

interface AuthProps {
  username: string;
  password: string;
}

export const Login: FC = () => {
  const [searchParams, _] = useSearchParams();
  const [authData, setAuthData] = useState<AuthProps>({
    username: "",
    password: "",
  });

  const handleChangeAuthData: (event: ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    setAuthData({ ...authData, [event.target.name]: event.target.value });
  };

  const handleSubmit: (
    event: FormEvent<HTMLElement>,
    authData: AuthProps
  ) => void = (event, authData) => {
    event.preventDefault();
    console.log("🚀 ~ authData:", authData);
  };

  useEffect(() => {
    console.log("🚀 ~ searchParams:", searchParams.get("payrollNumber"));
  }, [searchParams]);

  return (
    <section id="login-layout">
      <div className="login-form-container">
        <h1>Login</h1>
        <p>Login to checkout all the content of the platform!</p>
        <form
          className="login-form"
          onSubmit={(event) => handleSubmit(event, authData)}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={handleChangeAuthData}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handleChangeAuthData}
          />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </section>
  );
};
