# Golang Coprocessor

[Style Guide](https://google.github.io/styleguide/go/best-practices.html)
[Project Layout](https://github.com/golang-standards/project-layout)
[Some best practices](https://go.dev/talks/2013/bestpractices.slide)

## Structure

Modeled after the ["Server project"](https://go.dev/doc/modules/layout) layout

## Run

1. Pick one of the Golang frameworks exampled under `cmd`. Customers often have a "platform" preferred one they write other services in.
1. Start the coprocessor
    ```shell
    go run cmd/simple-http/main.go
    ```
    or
    ```shell
    go run cmd/gorilla-mux/main.go
    ```
    ... etc.
1. [Start the router](/router/README.md#running-the-router)

## Packaging for a customer

1. Copy whole directory
1. Remove unnecessary `cmd`'s
1. Run `go mod tidy` which will cleanup the imports for all the other frameworks

## Logging types

https://go.dev/play/p/yHGoKST0lEx