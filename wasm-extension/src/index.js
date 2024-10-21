export function greet() {
  Host.outputString(`Hello, ${Host.inputString()}`);
}

export function RouterRequest() {
  const payload = JSON.parse(Host.inputString());

  /*payload.control = { break: 401 };
  payload.body = JSON.stringify({
    errors: [
      {
        message: "This is an error from WASM land!",
        extensions: {
          code: "MY_ERROR",
        },
      },
    ],
  });*/

  Host.outputString(JSON.stringify(payload));
}
