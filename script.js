import http from "k6/http";
import { check } from "k6";
import { crypto } from "k6/experimental/webcrypto";

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 1,
  // A string specifying the total duration of the test run.
  duration: "10s",
};

const BASE_URL = "http://127.0.0.1:3005/graphql";

const query = `
query ExampleQuery {
  hello
}
`;

// The function that defines VU logic.
//
// See https://grafana.com/docs/k6/latest/examples/get-started-with-k6/ to learn more
// about authoring k6 scripts.
//
export default function () {
  const requests = Array.from({ length: 5 }, () => ({
    method: "POST",
    url: BASE_URL,
    body: JSON.stringify({ query: query }),
    params: {
      headers: {
        "Content-Type": "application/json",
        "x-my-header": crypto.randomUUID(),
      },
    },
  }));

  /*const requests = [][
    {
      method: 'POST',
      url: BASE_URL,
      body: JSON.stringify({ query: query }),
      params: { headers: headers }
    },
    {
      method: 'POST',
      url: BASE_URL,
      body: JSON.stringify({ query: query }),
      params: { headers: headers }
    },
  ];*/

  const responses = http.batch(requests);

  responses.forEach((res) => {
    check(res, {
      "is status 200": (r) => r.status === 200,
    });

    const body = JSON.parse(res.body);
    check(body, {
      "without errors": (b) => b.errors == null,
    });
  });
}
