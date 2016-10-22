require 'Date'
require 'yaml'

def prompt_for_message(message)
	puts message
	input_value = STDIN.gets.strip
	input_value
end

desc 'create a new draft post'
task :new_post do
	title = prompt_for_message 'Enter new post title'
	slug  = "#{Date.today}-#{title.downcase.gsub(/[^\w]+/, '-')}"
	file  = File.join(File.dirname(__FILE__), '_posts', slug + '.markdown')

	File.open(file, 'w') do |f|
		f << <<-EOS.gsub(/^    /, '')
    ---
    layout: post
    title: #{title}
    published: false
    category:
    tags: []
    social_media_share:
    feature_image:
    ---
		EOS
	end

	system ("#{ENV['EDITOR']} #{file}")
end

desc 'List all draft posts'
task :drafts do
	puts `find ./_posts -type f -exec grep -H 'published: false' {} \\;`
end

desc 'Create category'
task :add_category do
	name     = prompt_for_message 'Enter Category name'
	slug     = name.downcase
	category = { 'slug' => slug, 'name' => name, 'color' => '#3498db' }

	# add_to_file 'categories.yml', category
	generate_file_for_category category
end

desc 'Create tag'
task :add_tags do
	tags       = prompt_for_message 'Enter tag names separated by space '
	tags_array = tags.split(' ')
	tags_array.each do |t|
		tag = { 'slug' => t.downcase, 'name' => t }
		generate_tag_file tag
	end
end

desc 'Create tag'
task :add_tag do
	tag_name = prompt_for_message 'Enter tag name'
	tag_slug = prompt_for_message 'Enter tag slug'
	tag      = { 'slug' => tag_slug, 'name' => tag_name }
	generate_tag_file tag
end

def generate_tag_file(tag)
	file_path = "_my_tags/#{tag['name']}.md"
	file      = File.join(File.dirname(__FILE__), file_path)
	File.open(file, "w") do |f|
		f << <<-EOS.gsub(/^    /, '')
---
name: #{tag['name']}
slug: #{tag['slug']}
---
		EOS
	end
	# File.open(file, 'w') { |f| f.write(tag.to_yaml) } unless File.exist?(file)
end

def add_to_file(filename, content_to_add)
	data = YAML.load_file("_data/#{filename}")
	data << content_to_add
	File.open("_data/#{filename}", 'w') { |f| f.write(data.to_yaml) }
end

def generate_file_for_category(category)
	file_path = '_my_categories/' + category['slug'] + '.md'
	file      = File.join(File.dirname(__FILE__), file_path)
	File.open(file, 'w') { |f| f.write(category.to_yaml) } unless File.exist?(file)
end