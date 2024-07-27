#!/usr/bin/env bash

cd "$(dirname "$0")/.."

content_dir="content"
template_file="templates/layout.html"
output_dir="dist"

rm -rf $output_dir
mkdir -p $output_dir

insert_into_template() {
	local content=$1
	local title=$2
	local output_file=$3

	awk -v title="$title" -v content="$content" '

	BEGIN {
		# Read the content into an array
		split(content, lines, "\n")
		# Prepare the content for substitution
		content_sub = ""
		for (i in lines) {
		content_sub = content_sub lines[i] "\n"
		}
	}
	{
		gsub(/\{\{ page_title \}\}/, title)
		gsub(/\{\{ content \}\}/, content_sub)
		print
	}

	' "$template_file" > "$output_file"
}

for markdown_file in $content_dir/*.md; do
	filename=$(basename -- "$markdown_file")
	filename="${filename%.*}"

	html_content=$(pandoc $markdown_file)
	output_file="$output_dir/$filename.html"
	insert_into_template "$html_content" "$filename" "$output_file"

	cp -r img/ dist/
	cp -r css/ dist/
	cp -r static/ dist/

	echo "Generated $output_file"
done

