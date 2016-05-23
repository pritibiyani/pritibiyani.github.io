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

	File.open(file, "w") do |f|
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

desc 'Add tags to data files'
task :add_tag do
	name       = prompt_for_message 'Enter Tag'
	slug       = name.downcase
	tags       = YAML.load_file('_data/tags.yml')
	tags[slug] ={ 'name' => name }
	File.open('_data/tags.yml', 'w') { |f| f.write(tags.to_yaml) }

# 	add_to_file | need to check for categorory as well
	create_permalink_file_for_tag slug
end

desc 'Add categories to data files'
task :add_category do
	name     = prompt_for_message 'Enter Category name'
	slug     = name.downcase
	category = { 'slug' => slug, 'name' => name, 'color' => '#3498db' }

	add_to_file 'categories.yml', category
	create_permalink_file_for_category slug
end

def add_to_file(filename, content_to_add)
	data = YAML.load_file("_data/#{filename}")
	data << content_to_add
	File.open("_data/#{filename}", 'w') { |f| f.write(data.to_yaml) }
end

def create_permalink_file(kind, slug)
	data      = { 'layout'    => "blog_by_#{kind}",
	              'permalink' => "/blog/#{kind}/#{slug}/",
	              kind        => slug,
	              'title'     => "Articles by #{kind}: #{slug}"
	}
	file_path = "blog/#{kind}/#{slug}.md"
	File.open(file_path, 'w') { |f| f.write(data.to_yaml) } unless File.exist?(file_path)
end

def create_permalink_file_for_tag(tag_slug)
	create_permalink_file 'tag', tag_slug
end

def create_permalink_file_for_category(category_slug)
	create_permalink_file 'category', category_slug
end