package greetings

import (
    "fmt"
    "errors"
    "math/rand"
    "time"
)

// Returns a greeting for the named person
func Hello(name string) (string, error)  {
    if name == "" {
        return "", errors.New("Must supply a name")
    }
    message := fmt.Sprintf(randomGreeting(), name)
    return message, nil
}

// Returns multiple greetings for multiple names
func Hellos(names []string) (map[string]string, []error) {
    errors := make([]error)
    messages := make(map[string]string)

    for _, name := range names {
        message, err := Hello(name)

        if err != nil {
            append(errors, err)
        }
        else {
            messages[name] = message
        }
    }

    return messages, errors
}

func init() {
    // When this module initializes, set rand's seed to the current time
    rand.Seed(time.Now().UnixNano())
}

func randomGreeting() string {
    greet := []string{
        "Hi, %v. Welcome!",
        "Great to see you, %v!",
        "Hail, %v! Well met!",
    }

    return greet[rand.Intn(len(greet))]
}
