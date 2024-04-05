package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	coprocessor "github.com/apollographql/coprocessor/internal"
	"github.com/gorilla/mux"
)

func main() {
	port, exists := os.LookupEnv("PORT")
	if !exists {
		port = "3007"
	}

	host, exists := os.LookupEnv("HOST")
	if !exists {
		host = "localhost"
	}

	router := mux.NewRouter()
	router.HandleFunc("/coprocessor", http.HandlerFunc(coprocessor.RequestHandler))
	http.Handle("/", router)

	srv := &http.Server{
		Handler:      router,
		Addr:         fmt.Sprintf("%s:%s", host, port),
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
		IdleTimeout:  120 * time.Second,
	}

	log.Printf("Starting on http://%s:%s", host, port)
	srv.ListenAndServe()
}
