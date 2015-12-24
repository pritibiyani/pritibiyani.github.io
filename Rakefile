require 'Date'

desc 'create a new draft post'
task :new_post do
  puts 'Enter new post title'
  title = STDIN.gets.strip
  slug = "#{Date.today}-#{title.downcase.gsub(/[^\w]+/, '-')}"
  file = File.join(File.dirname(__FILE__), '_posts', slug + '.markdown')

  File.open(file, "w") do |f|
    f << <<-EOS.gsub(/^    /, '')
    ---
    layout: post
    title: #{title}
    published: false
    categories:
    tags:
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