/**
 * Chapter 3.3: A demonstrations of functions (which I've already kind of been
 * doing, but let's go through this chapter for completeness).
 **/

fn main() {
    print_divider();
    println!("This is run from main!");

    print_divider();
    another_function();

    print_divider();
    function_with_parameter(5);

    print_divider();
    function_with_two_parameters(5, 6);

    print_divider();
    assignment_test();

    print_divider();
    println!("The value of `no_explicit_return` is: {}", no_explicit_return());

    print_divider();
    println!("The value of `plus_one` is: {}", plus_one(5));

    print_divider();
}

/****************************** DEMO FUNCTIONS *******************************/

fn another_function() {
    println!("This is run from another function!");
}

fn function_with_parameter(num: i8) {
    // Seriously, don't use one-character variable names. They frequently
    // fuck with debuggers, and they're hard to search for, which is why
    // we're not following the example. Yes, yes, I know I did it in other
    // examples, but I'm putting my foot down, dagnabbit.
    println!("The value of num is: {}", num);
}

fn function_with_two_parameters(num1: i8, num2: i8) {
    println!("The value of num1 is: {}", num1);
    println!("The value of num2 is: {}", num2);
}

fn assignment_test() {
    let num1 = 5;

    let num2 = {
        let num1 = 3;
        num1 + 1
    };

    println!("The value of num1 is: {}", num1);
    println!("The value of num2 is: {}", num2);
}

fn no_explicit_return() -> i8 {
    // Note that there is no semi-colon after the value
    5
}

fn plus_one(base: i8) -> i8 {
    // Once again, note that there is no semi-colon. A semi-colon will cause
    // a "mismatched types" error at compilation
    base + 1
}

/********************************* UTILS *************************************/

fn print_divider() {
    println!("\n-----------------\n");
}
