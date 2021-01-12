/**
 * Generates a random number between 1 and 100, and asks the player to guess.
 **/

use rand::Rng;
use std::cmp::Ordering;
use std::io;

/******************************* GAME MESSAGES *******************************/

// Utility strings
const DIVIDER: &str = "\n-----------------------\n";

// Introduction to the game
const INTRO1: &str = "Let's play a guessing game!";
const INTRO2: &str = "Guess a number between 1 and 100!";

// Guessing and validation
const PLAYER_INPUT: &str = "Please input your guess:";
const PLAYER_GUESS: &str = "You guessed:";
const PLAYER_INVALID: &str = "Please enter a number between 1 and 100!";

// Messages displayed after comparing guess
const COMPARE_EXACT_MATCH: &str = "You win!";
const COMPARE_TOO_HIGH: &str = "Too big!";
const COMPARE_TOO_LOW: &str = "Too small!";

// Optional debugging
const DEBUG_SECRET_NUMBER: &str = "The secret number is:";

/************************************ MAIN ***********************************/

pub fn main() {
    let secret_number = get_secret_number();

    print_intro();

    loop {
        //print_debug(secret_number);
        print_prompt();

        let mut guess = String::new();
        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u8 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                print_invalid();
                continue;
            }
        };
        print_guess(guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => print_compare_too_low(),
            Ordering::Greater => print_compare_too_high(),
            Ordering::Equal => {
                print_compare_exact_match();
                break;
            }
        }
    }
}

/******************************* UTILITIES ***********************************/

fn get_secret_number() -> u8 {
    return rand::thread_rng().gen_range(1, 101);
}

/**************************** PRINT FUNCTIONS ********************************/

// Probably a bit of overkill to separate out the string constants up top
// from the actual formatting functions. But this is more of a learning
// exercise, and in principle if we were adding il8n this would probably be
// a good move to separate the strings from the display formatting.

fn print_compare_exact_match() {
    println!("{}", COMPARE_EXACT_MATCH);
    print_divider();
}

fn print_compare_too_high() {
    println!("{}", COMPARE_TOO_HIGH);
    print_divider();
}

fn print_compare_too_low() {
    println!("{}", COMPARE_TOO_LOW);
    print_divider();
}

fn print_divider() {
    println!("{}", DIVIDER);
}

fn print_guess(guess: u8) {
    println!("\n{} {}", PLAYER_GUESS, guess);
}

fn print_intro() {
    print_divider();

    println!("{}", INTRO1);
    println!("{}", INTRO2);

    print_divider();
}

fn print_invalid() {
    println!("\n{}", PLAYER_INVALID);
    print_divider();
}

fn print_prompt() {
    println!("{}\n", PLAYER_INPUT);
}

// Optional debugging statement for testing.
// Uncomment in the loop in ``main``.
#[allow(dead_code)]
fn print_debug(secret_number: u8) {
   println!("{} {}", DEBUG_SECRET_NUMBER, secret_number);
}

/******************************* EXAMPLE CODE ********************************/

// This isn't called, but keeping this here for reference
#[allow(dead_code)]
fn formatting_fun() {
    let x = 5;
    let y = 10;
    println!("x = {}, y = {}", x, y);
}
