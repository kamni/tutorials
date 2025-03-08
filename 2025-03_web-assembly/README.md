# Running Python in the Browser with WebAssembly

Tutorial is [here](https://testdriven.io/blog/python-webassembly/).

The tutorial is out of date, so there are several adaptations
that need to be made to get the project to work.
This README describes what needs to be done.

## Requirements

These are versions that I used to get this tutorial working:

* Python 3.12
* Pyodide v0.23.7
* Node 23.6.0 / NPM 11.0.0

## Setup

Set up Python:

```bash
python -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
```

Set up javascript requirements:

```bash
npm install
```
