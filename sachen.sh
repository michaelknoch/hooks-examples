#!/bin/bash

echo $BRANCH_NAME

git_branch=${GITHUB_REF#refs/heads/}
echo $git_branch