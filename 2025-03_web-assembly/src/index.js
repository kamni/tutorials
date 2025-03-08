/**
 * Copyright (C) J Leadbetter <j@jleadbetter.com>
 * License: MIT
 **/

import { loadPyodide } from "pyodide";

async function hello_python() {
  let pyodide = await loadPyodide({ indexURL: `${window.location.origin}/pyodide` });
  return pyodide.runPythonAsync("1+1");
}

hello_python().then((result) => {
  console.log("Python says that 1+1 =", result);
});
