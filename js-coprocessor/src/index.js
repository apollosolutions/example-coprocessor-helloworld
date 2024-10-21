import express from "express";

const app = express();

const processRouterRequestStage = async (payload) => {
  payload.control = { break: 401 }
  payload.body = JSON.stringify({
    errors: [
      {
        "message": "Not authenticated.",
        "extensions": {
        "code": "ERR_UNAUTHENTICATED"
        }
      }
    ]
  });
  payload.headers["content-type"] = "application/json";

  return payload;
};

const processRouterResponseStage = async (payload) => {
  // This is the object sent by the Router that you can act upon to update headers, context, auth claims, etc
  // If you update the "control" property from "Continue" to something like { "break": 400 }, it will terminate the request and return the specified HTTP error
  // See: https://www.apollographql.com/docs/router/customizations/coprocessor/
  //console.log(payload);

  //console.log(payload);

  //if (payload.statusCode === 302) {
  /* payload.control = {
    break: 302,
  };*/
  //}

  return payload;
};

const processSupergraphRequestStage = async (payload) => {
  // This is the object sent by the Router that you can act upon to update headers, context, auth claims, etc
  // If you update the "control" property from "Continue" to something like { "break": 400 }, it will terminate the request and return the specified HTTP error
  // See: https://www.apollographql.com/docs/router/customizations/coprocessor/

  return payload;
};

const processSubgraphRequestStage = async (payload) => {
  // This is the object sent by the Router that you can act upon to update headers, context, auth claims, etc
  // If you update the "control" property from "Continue" to something like { "break": 400 }, it will terminate the request and return the specified HTTP error
  // See: https://www.apollographql.com/docs/router/customizations/coprocessor/
  //console.log(payload);

  return payload;
};

const processSubgraphResponseStage = async (payload) => {
  // This is the object sent by the Router that you can act upon to update headers, context, auth claims, etc
  // If you update the "control" property from "Continue" to something like { "break": 400 }, it will terminate the request and return the specified HTTP error
  // See: https://www.apollographql.com/docs/router/customizations/coprocessor/
  
  

  return payload;
};

app.post("/", express.json(), async (req, res) => {
  const payload = req.body;

  let response = payload;
  switch (payload.stage) {
    case "RouterRequest":
      response = await processRouterRequestStage(payload);
      break;
    case "SupergraphRequest":
      response = await processSupergraphRequestStage(payload);
      break;
    case "SubgraphRequest":
      response = await processSubgraphRequestStage(payload);
      break;
    case "SubgraphResponse":
      response = await processSubgraphResponseStage(payload);
      break;
    case "RouterResponse":
      response = await processRouterResponseStage(payload);
      break;
  }

  console.log(JSON.stringify(response, null, 2));

  res.send(response);
});

app.listen(3007, () => {
  console.log("🚀 Server running at http://localhost:3007");
});
