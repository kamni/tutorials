###############################################################################
#                                                                             #
#  Request:                                                                   #
#                                                                             #
#      {                                                                      #
#          "message": "world"                                                 #
#      }                                                                      #
#                                                                             #
#  Response:                                                                  #
#                                                                             #
#      {                                                                      #
#          "hello": true                                                      #
#      }                                                                      #
#                                                                             #
###############################################################################

package hello

import future.keywords.if

default hello := false

hello if input.message == "world"

