import React, { useReducer, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import { TextField } from "@mui/material";

type State = {
  username: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
};

type Action =
  | { type: "setUsername"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setIsButtonDisabled"; payload: boolean }
  | { type: "loginSuccess"; payload: string }
  | { type: "loginFailed"; payload: string }
  | { type: "setIsError"; payload: boolean };

const initialState: State = {
  username: "",
  password: "",
  isButtonDisabled: true,
  helperText: "",
  isError: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setUsername":
      return { ...state, username: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    case "setIsButtonDisabled":
      return { ...state, isButtonDisabled: action.payload };
    case "loginSuccess":
      return { ...state, helperText: action.payload, isError: false };
    case "loginFailed":
      return { ...state, helperText: action.payload, isError: true };
    case "setIsError":
      return { ...state, isError: action.payload };
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: "setIsButtonDisabled",
        payload: false,
      });
    } else {
      dispatch({ type: "setIsButtonDisabled", payload: true });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    if (state.username === "test@test.com" && state.password === "123123") {
      dispatch({
        type: "loginSuccess",
        payload: "Login Successfully",
      });
    } else {
      dispatch({
        type: "loginFailed",
        payload: "Incorrect username or password",
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setUsername",
      payload: event.target.value,
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };

  //   };

  return (
    <form noValidate autoComplete="off">
      <Card>
        <CardHeader title="Login App" />
        <CardContent>
          <div>
            <TextField
              error={state.isError}
              fullWidth
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
              onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
            />

            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              helperText={state.helperText}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={handleLogin}
            disabled={state.isButtonDisabled}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default Login;
