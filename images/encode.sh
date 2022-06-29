#!/bin/bash
for i in *; do echo -e "$i: \"`base64 -w0 $i`\","; done
