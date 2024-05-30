//! Generates a random number between 1 and 100, and asks the player to guess.
//! ([Programming a Guessing Game](https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html))
//!
//! Additional documentation:
//!
//! * [Visibility and Privacy](https://doc.rust-lang.org/reference/visibility-and-privacy.html)
//! * [Documentation](https://doc.rust-lang.org/stable/rust-by-example/meta/doc.html)
//! * [Strings](https://doc.rust-lang.org/rust-by-example/std/str.html)
//! * [mut](https://doc.rust-lang.org/rust-by-example/std/str.html)
//! * [static](https://doc.rust-lang.org/rust-by-example/scope/lifetime/static_lifetime.html)
//! * [Stdin in std::io](https://doc.rust-lang.org/std/io/struct.Stdin.html)

use rand::Rng;
use std::cmp::Ordering;
use std::io;

/******************************* GAME MESSAGES *******************************/

// Utility strings
#[doc(hidden)]
const DIVIDER: &str = "\n-----------------------\n";

// Introduction to the game
#[doc(hidden)]
const INTRO1: &str = "Let's play a guessing game!";
#[doc(hidden)]
const INTRO2: &str = "Guess a number between 1 and 100!";

// Guessing and validation
#[doc(hidden)]
const PLAYER_INPUT: &str = "Please input your guess:";
#[doc(hidden)]
const PLAYER_GUESS: &str = "You guessed:";
#[doc(hidden)]
const PLAYER_INVALID: &str = "Please enter a number between 1 and 100!";

// Messages displayed after comparing guess
#[doc(hidden)]
const COMPARE_EXACT_MATCH: &str = "You win!";
#[doc(hidden)]
const COMPARE_TOO_HIGH: &str = "Too big!";
#[doc(hidden)]
const COMPARE_TOO_LOW: &str = "Too small!";

// Optional debugging
#[doc(hidden)]
const DEBUG_SECRET_NUMBER: &str = "The secret number is:";
/// Change this to `true` to enable debugging.
static ENABLE_DEBUG: bool = false;

/************************************ MAIN ***********************************/

pub fn main() {
    let secret_number = gen_secret_number();

    print_intro();

    loop {
        if ENABLE_DEBUG {
            print_debug(secret_number);
        }
        print_prompt();

        // The original tutorial used "shadowing",
        // which is commonly used when you want to convert a variable from one type
        // to another.
        // In the original, this String variable was named `guess`,
        // and then was overridden farther down as a u8.
        // However, I believe shadowing to be a bad/confusing practice,
        // even if it's allowed.
        // I've named this variable `guess_str` so it doesn't get overridden.
        let mut guess_str = String::new();

        io::stdin()
            .read_line(&mut guess_str)
            .expect("Failed to read line");

        let guess: u8 = match guess_str.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                print_invalid();
                continue;
            },
        };
        print_guess(guess);
        // Another way to do this:
        // ```
        // match io::stdin().read_line(&mut guess) {
        //     Ok(_) => println!("You guessed: {guess}"),
        //     Err(error) => {
        //         print_invalid();
        //         continue;
        //     },
        // }
        // ```

        match guess.cmp(&secret_number) {
            Ordering::Less => {
                if ENABLE_DEBUG {
                    println!("Ordering::Less");
                }
                print_compare_too_low();
            },
            Ordering::Greater => {
                if ENABLE_DEBUG {
                    println!("Ordering::Greater");
                }
                print_compare_too_high();
            },
            Ordering::Equal => {
                if ENABLE_DEBUG {
                    println!("Ordering::Equal");
                }
                print_compare_exact_match();
                break;
            },
        }
    }
}

//pub fn main() {
//    let secret_number = get_secret_number();
//
//    print_intro();
//
//    loop {
//        if ENABLE_DEBUG {
//            print_debug(secret_number);
//        }
//        print_prompt();
//
//        let mut guess = String::new();
//        io::stdin()
//            .read_line(&mut guess)
//            .expect("Failed to read line");
//
//        let guess: u8 = match guess.trim().parse() {
//            Ok(num) => num,
//            Err(_) => {
//                print_invalid();
//                continue;
//            }
//        };
//        print_guess(guess);
//
//        match guess.cmp(&secret_number) {
//            Ordering::Less => {
//                if ENABLE_DEBUG {
//                    println!("Ordering::Less");
//                }
//                print_compare_too_low();
//            }
//            Ordering::Greater => {
//                if ENABLE_DEBUG {
//                    println!("Ordering::Greater");
//                }
//                print_compare_too_high();
//            }
//            Ordering::Equal => {
//                if ENABLE_DEBUG {
//                    println!("Ordering::Equal");
//                }
//                print_compare_exact_match();
//                break;
//            }
//        }
//    }
//}

/******************************* UTILITIES ***********************************/

#[doc(hidden)]
fn gen_secret_number() -> u8 {
    // A really round-about way to do this:
    // ```
    // return (rand::thread_rng().gen::<f64>() * 100.0).floor() as u8 + 1;
    // ```
    return rand::thread_rng().gen_range(1..=100);
}

/**************************** PRINT FUNCTIONS ********************************/

// Probably a bit of overkill to separate out the string constants up top
// from the actual formatting functions. But this is more of a learning
// exercise, and in principle if we were adding il8n this would probably be
// a good move to separate the strings from the display formatting.

#[doc(hidden)]
fn print_compare_exact_match() {
    println!("{COMPARE_EXACT_MATCH}");
    print_divider();
}

#[doc(hidden)]
fn print_compare_too_high() {
    println!("{COMPARE_TOO_HIGH}");
    print_divider();
}

#[doc(hidden)]
fn print_compare_too_low() {
    println!("{COMPARE_TOO_LOW}");
    print_divider();
}

#[doc(hidden)]
fn print_divider() {
    println!("{DIVIDER}");
}

#[doc(hidden)]
fn print_guess(guess: u8) {
    println!("\n{PLAYER_GUESS} {guess}");
}

#[doc(hidden)]
fn print_intro() {
    print_divider();

    println!("{INTRO1}");
    println!("{INTRO2}");

    print_divider();
}

#[doc(hidden)]
fn print_invalid() {
    println!("\n{PLAYER_INVALID}");
    print_divider();
}

#[doc(hidden)]
fn print_prompt() {
    println!("{PLAYER_INPUT}\n");
}

// Optional debugging statement for testing.
#[doc(hidden)]
fn print_debug(secret_number: u8) {
   println!("{DEBUG_SECRET_NUMBER} {secret_number}");
}

/******************************* EXAMPLE CODE ********************************/

// The following functions aren't called, but keeping this here for reference

#[allow(dead_code)]
/// Demonstrates the basics of string formatting.
fn formatting_fun() {
    let x = 5;
    let y = 10;
    println!("x = {x}, y + 2 = {}", y + 2);
}

/// Test function to show returning an error result.
/// ([Error in std::iio](https://doc.rust-lang.org/std/io/struct.Error.html))
fn throw_error(message: &str) -> io::Result<()> {
    Err(io::Error::new(io::ErrorKind::Other, message))
}

#[allow(dead_code)]
/// Display of different ways to handle errors.
/// ([std::result](https://doc.rust-lang.org/std/result/))
fn miscellaneous_error_handling() -> io::Result<()> {
    // Here we explicitly catch and handle the error.
    match throw_error("Catch me if you can!") {
        Ok(_) => println!("Unexpected behavior!"),
        Err(_) => println!("Error handled as expected."),
    }

    // Really lazy error handling; does not provide a backtrace.
    // The question mark operator can only be used with Result and Option.
    // [Operator expressions: the question mark operator](https://doc.rust-lang.org/reference/expressions/operator-expr.html#the-question-mark-operator)
    throw_error("Being lazy")?;

    // Here we say we expect it to succeed;
    // when it doesn't, throw the error with the specified message.
    // Possible to get a backtrace.
    // This line doesn't run, because the previous line threw an error.
    throw_error("Assume the best").expect("Error thrown as expected");

    // Return the error explicitly.
    // This line doesn't run, because the previous line threw an error.
    throw_error("Return me")
}
