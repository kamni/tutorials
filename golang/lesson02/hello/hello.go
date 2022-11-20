package main

import (
    "fmt"
    "log"
    "example.com/greetings"
)

func main() {
    foo("Gladys")
    foo("")
}

// Bookmark: https://golang.org/doc/tutorial/greetings-multiple-people
// Currently there are errors when I try to run the code, which I haven't
// tried to fix yet.
func foo(name string) {
    // Set the properties of the logger
    log.SetPrefix("hello: ")
    // Disable printing additional information, like time and line number
    log.SetFlags(0)

    messages, errs := greetings.Hellos({
        "Gladys",
        "",
        "Ada",
        "Enid",
        "",
    })

    for _, msg := range messages {
        fmt.Println(msg)
    }

    if len(errs) != 0 {
        log.Fatal(fmt.Sprintf("Errors while processing names: %v", len(errs)
    }
}
