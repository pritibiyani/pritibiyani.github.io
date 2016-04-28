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
    categories:
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
	name = prompt_for_message 'Enter Tag'
	slug = name.downcase
	tag  = { 'slug' => slug, 'name' => name }
	tags = YAML.load_file('_data/tags.yml')
	tags << tag
	File.open('_data/tags.yml', 'w') { |f| f.write(tags.to_yaml) }
end

desc 'Add categories to data files'
task :add_category do
	name       = prompt_for_message 'Enter Category name'
	slug       = name.downcase
	category  = { 'slug' => slug, 'name' => name, 'color' => '#3498db' }
	categories = YAML.load_file('_data/categories.yml')
	categories << category
	File.open('_data/categories.yml', 'w') { |f| f.write(categories.to_yaml) }
end