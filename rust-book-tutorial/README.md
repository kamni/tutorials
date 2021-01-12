# Tutorial for "The Rust Book"

This is a project to store all code created while going through
["The Rust Book"](https://doc.rust-lang.org/stable/book/title-page.html),
which is a tutorial to learn the programming language Rust.


## Hints for Code Compilation

I don't really want to commit the compiled files to git. So whenever compiling
files, compile to the ``target`` directory in the relevant folder:

```bash
rustc chapter_xx/project/main.rs -o chapter_xx/project/target/main
```

And obviously, if you're building with cargo, just let it auto-build to the
``target`` folder that it creates.
