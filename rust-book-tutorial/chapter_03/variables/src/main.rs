/**
 * Chapter 3.1: Demonstration of variables and mutability
 **/

fn main() {
    print_divider();

    //immutable_variable();
    //print_divider();

    mutable_variable();
    print_divider();

    shadow_variable();
    print_divider();
}

/****************************** DEMO FUNCTIONS *******************************/

#[allow(dead_code)]
fn immutable_variable() {
    let x = 5;
    println!("Meet x, the immutable variable. The value of x is: {}", x);

    println!("Now we're going to try to set x to 6...");
    // uncomment this line when you're ready to test
    //x = 6;

    println!("But we're going to get an error at compile, because x is immutable!");
}

fn mutable_variable() {
    let mut y = 5;
    println!("Meet y, the mutable variable. The value of y is: {}", y);

    println!("Now we're going to try to set y to 6...");
    y = 6;

    println!("And it succeeds. The value of y is: {}", y);
}

fn shadow_variable() {
    let z = 5;
    let z = z + 1;
    let z = z * 2;

    println!("Meet z, the shadow variable. The value of z is: {}", z);
}

/********************************* UTILS *************************************/

fn print_divider() {
    println!("\n-----------------\n");
}
