/**
 * Randomly generates a number between 1 and 100, and asks the player to guess.
 *
 * NOTE: This is a re-write of the original ``main.rs`` that I wrote as part of
 * the tutorial, as a way to practice reprogramming it from memory. It is
 * considerably simplified from the original version.
 **/

use rand::Rng;
use std::cmp::Ordering;
use std::io;

const DIVIDER: &str = "\n------------------\n";

fn main() {
    let secret_number: u8 = rand::thread_rng().gen_range(1, 101);


    println!("Let's play a guessing game!");
    loop {
        println!("Guess a number between 1 and 100:");

        let mut guess = String::new();
        io::stdin()
            .read_line(&mut guess)
            .expect("Unable to read from stdin!");
        let guess: u8 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Invalid choice!");
                println!("{}", DIVIDER);
                continue;
            }
        };

        println!("Your guess was: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
        println!("{}", DIVIDER);
    }
}
