# https://www.openpolicyagent.org/docs/latest/policy-language/#scalar-values
# https://www.openpolicyagent.org/docs/latest/policy-language/#strings
# https://www.openpolicyagent.org/docs/latest/policy-language/#composite-values
# https://www.openpolicyagent.org/docs/latest/policy-language/#sets
# https://www.openpolicyagent.org/docs/latest/policy-language/#variables

###############################################################################
#                                                                             #
#  Request:                                                                   #
#                                                                             #
#      {}                                                                     #
#                                                                             #
#  Response:                                                                  #
#                                                                             #
#      {                                                                      #
#          "allowed": true,                                                   #
#          "collection": [                                                    #
#              "Hello",                                                       #
#              42,                                                            #
#              3.14159,                                                       #
#              true,                                                          #
#              null                                                           #
#          ],                                                                 #
#          "cube": {                                                          #
#              "depth": 5,                                                    #
#              "height": 4,                                                   #
#              "width": 3                                                     #
#          },                                                                 #
#          "cube_width": 3,                                                   #
#          "d": 5,                                                            #
#          "empty_count": 0,                                                  #
#          "greeting": "Hello",                                               #
#          "h": 4,                                                            #
#          "hello_here": "hello\there",                                       #
#          "hello_there": "hello\\there",                                     #
#          "ips_by_port": {                                                   #
#              "80": [                                                        #
#                  "1.1.1.1",                                                 #
#                  "1.1.1.2"                                                  #
#              ],                                                             #
#              "443": [                                                       #
#                  "2.2.2.1"                                                  #
#              ]                                                              #
#          },                                                                 #
#          "location": null,                                                  #
#          "max_height": 42,                                                  #
#          "pi": 3.14159,                                                     #
#          "q": [                                                             #
#              "dev",                                                         #
#              "prod",                                                        #
#              "smoke1"                                                       #
#          ],                                                                 #
#          "s": [                                                             #
#              3,                                                             #
#              4,                                                             #
#              5                                                              #
#          ],                                                                 #
#          "sites": [                                                         #
#              {                                                              #
#                  "name": "prod"                                             #
#              },                                                             #
#              {                                                              #
#                  "name": "smoke1"                                           #
#              },                                                             #
#              {                                                              #
#                  "name": "dev"                                              #
#              }                                                              #
#          ],                                                                 #
#          "w": 3                                                             #
#      }                                                                      #
#                                                                             #
###############################################################################

package scalars_composites

import future.keywords.contains
import future.keywords.if
import future.keywords.in

# Scalars can be strings, numbers, booleans, or null
greeting := "Hello"
max_height := 42
pi := 3.14159
allowed := true
location := null

collection := [greeting, max_height, pi, allowed, location]

# Regular string versus raw string.
# Raw strings are good for regexes.
hello_here := "hello\there"   # "hello    here"
hello_there := `hello\there`  # "hello\there"

# Composite objects can use variables or references
w := 3
h := 4
d := 5
cube := {
	"width": w,
    "height": h,
    "depth": d
}
cube_width := cube.width

ips_by_port := {
    80: ["1.1.1.1", "1.1.1.2"],
    443: ["2.2.2.1"],
}
# Example given, but it's unclear how to use this to actually set a variable
#some port; ips_by_port[port][_] == "2.2.2.1"

# This set will return an array when converted to JSON.
# If the values had been the same instead of different, we'd remove duplicates
s := {cube.width, cube.height, cube.depth}

# Empty sets are not represented by {},
# because this is also the notation for an empty object.
# Instead, we use `set()`
empty_count := count(set())

sites := [
	{"name": "prod"},
    {"name": "smoke1"},
    {"name": "dev"}
]
# Returns ["dev", "prod", "smoke1"]
q contains name if {
    some site in sites
    name := site.name
}
foo = q["smoke2"]  # Returns undefined; great way to check x in array
