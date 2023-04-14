# https://www.openpolicyagent.org/docs/latest/policy-language/#the-basics

###############################################################################
#                                                                             #
#  Request:                                                                   #
#                                                                             #
#      {}                                                                     #
#                                                                             #
#  Response:                                                                  #
#      {                                                                      #
#          "foo": false,                                                      #
#          "p": true,                                                         #
#          "pi": 3.14159,                                                     #
#          "q": [                                                             #
#              "dev",                                                         #
#              "prod",                                                        #
#              "smoke1"                                                       #
#          ],                                                                 #
#          "r": true,                                                         #
#          "rect": {                                                          #
#              "height": 2,                                                   #
#              "width": 4                                                     #
#          },                                                                 #
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
#          "t2": true                                                         #
#      }                                                                      #
#                                                                             #
###############################################################################

package basics

import future.keywords.contains
import future.keywords.if
import future.keywords.in

# Scalar
pi := 3.14159

# Composite value
rect := {
    "width": 4,
    "height": 2,
}

# This variable is defined even if it evaluates to false,
# so it is always returned in the response
default foo := false
foo if "hello" == "world"

# This variable is undefined if it doesn't evaluate to true,
# so isn't returned in the response
v if "hello" == "world"

# Complex rule
t2 if {
    x := 42
    y := 41
    x > y
}

# Use of references to refer to nested documents
sites := [{"name": "prod"}, {"name": "smoke1"}, {"name": "dev"}]
r if {
    some site in sites
    site.name == "prod"
}
# Returns ["dev", "prod", "smoke1"]
q contains name if {
    some site in sites
    name := site.name
}
p if q["prod"]  # true
s if q["smoke2"]  # undefined
