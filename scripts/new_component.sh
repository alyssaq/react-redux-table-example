#!/bin/bash

# To use:  ./new_component.sh <existing_name> <new_name>
# Example: ./new_component.sh BaseTable HappyTable

component_folder=src/components
old=$1
new=$2

echo "Creating $component_folder/$new"
cp -Ra $component_folder/$1/ $component_folder/$new/
mv $component_folder/$new/$old.js  $component_folder/$new/$new.js
mv $component_folder/$new/$old.styl  $component_folder/$new/$new.styl
find $component_folder/$new/ -type f -exec sed -i '' s/$old/$new/g {} +
