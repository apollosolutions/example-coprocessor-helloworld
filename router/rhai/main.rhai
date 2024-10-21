fn router_service(service) {
    let router_request_callback = Fn("router_request_callback");
    service.map_request(router_request_callback);
  }
  
  fn router_request_callback (request) {
    //log_info(`Router Request... Host: ${request.uri.host}, Path: ${request.uri.path}`);

    //log_info(`Router Request... Port: ${request.uri.port}`);

    //print(request.uri);

    //log_info(`MY_COOL_VARIABLE: ${env::get("MY_COOL_VARIABLE")}`);

    //request.uri.path = "/lolol"
    throw #{
        status: 403,
        log_error: false,
        body: #{
            errors: [#{
                message: `I have raised a 403`,
                extensions: #{
                    code: "ACCESS_DENIED"
                }
            }]
        }
    };
  }

  fn supergraph_service(service) {
    let supergraph_request_callback = Fn("supergraph_request_callback");
    service.map_request(supergraph_request_callback);
  }
  
  fn supergraph_request_callback (request) {
    //log_info(`Supergraph Request... Host: ${request.uri.host}, Path: ${request.uri.path}`);
  }

fn subgraph_service(service, subgraph) {
  let subgraph_request_callback = Fn("subgraph_request_callback");
  service.map_request(subgraph_request_callback);
}

fn subgraph_request_callback (request) {
  //log_info(`Router Request... Host: ${request.uri.host}, Path: ${request.uri.path}`);

  //log_info(`Subgraph Request Before... Port: ${request.subgraph.uri.port}`);

  //request.subgraph.uri.port = "4001";

  //log_info(`Subgraph Request After... Port: ${request.subgraph.uri.port}`);

  //print(request.uri);

  //log_info(`MY_COOL_VARIABLE: ${env::get("MY_COOL_VARIABLE")}`);

  //request.uri.path = "/lolol"
}