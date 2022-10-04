#!/bin/bash

BRANCH_NAME=$(echo $GITHUB_REF | cut -d'/' -f 3)

echo $BRANCH_NAME