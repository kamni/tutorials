/**
 * Chapter 3.2 Data typing exercises
 **/

fn main() {
    print_divider();

    numeric_operations();
    print_divider();

    tuples();
    print_divider();

    tuple_indexing();
    print_divider();

    all_zero_array();
    print_divider();

    invalid_array_access();
    print_divider();
}

/****************************** DEMO FUNCTIONS *******************************/

fn numeric_operations() {
    let sum = 5 + 10;
    println!("The sum of 5+10 is: {}", sum);

    let difference = 95.5 - 4.3;
    println!("The difference of 95.5-4.3 is: {}", difference);

    let product = 4 * 30;
    println!("The product of 4*30 is: {}", product);

    let quotient = 56.7 / 32.2;
    println!("The quotient of 56.7/32.2 is: {}", quotient);

    let remainder = 43 % 5;
    println!("The remainder of 43%5 is: {}", remainder);
}

fn tuples() {
    let tup = (500, 6.4, 1);
    // Prefixing variables with an underscore tells the compiler that you
    // don't intend to use them
    let (_x, y, _z) = tup;

    println!("The value of y is: {}", y);
}

fn tuple_indexing() {
    let x: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = x.0;
    println!("Five hundred is: {}", five_hundred);

    let six_point_four = x.1;
    println!("Six point four is: {}", six_point_four);

    let one = x.2;
    println!("One is: {}", one);
}

fn all_zero_array() {
    // creates a 5x5 array of all zeros
    let a = [[0; 5]; 5];
    println!("{}", a[3][3]);
}

fn invalid_array_access() {
    let a = [1, 2, 3, 4, 5];
    let index = 10;

    // This is expected to panic
    let element = a[index];

    println!("The value of element is: {}", element);
}

/********************************* UTILS *************************************/

fn print_divider() {
    println!("\n-----------------\n");
}
