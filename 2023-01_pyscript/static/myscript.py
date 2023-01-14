import sys
import xml.etree.ElementTree as ET

import pyodide_js

print(pyodide_js.version)
print(f"Python {sys.version}")
ET.fromstring("<person>John Doe</person>")
