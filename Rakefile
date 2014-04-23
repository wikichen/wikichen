repo_url      = "git@github.com:wikichen/wikichen.is.git"
deploy_dir    = "_site"
deploy_branch = "gh-pages"

desc 'Deploy the site to AWS S3 served with CloudFront'
task :deploy do
  system 'jekyll build'
  system 's3_website push'
end

desc "Setup directory for deploying to GitHub Pages"
task :gh_deploy_setup do
  rm_rf deploy_dir
  mkdir deploy_dir
  cd "#{deploy_dir}" do
    system "git init"
    system "echo 'Setting up GitHub Pages deployment &hellip;' > index.html"
    system "git add ."
    system "git commit -m 'Deploy init'"
    system "git branch -m #{deploy_branch}"
    system "git remote add origin #{repo_url}"
    system "git push -u origin #{deploy_branch}"
  end
  puts "\n---\n## Now you can deploy to #{repo_url} with `rake deploy` ##"
end

desc "Build _site/"
task :build do
  system "jekyll build"
end

desc "Commit _site/"
task :commit => [:build] do
  puts "\n## Staging modified files"
  status = system("git add -A")
  puts status ? "Success" : "Failed"
  puts "\n## Committing a site build at #{Time.now.utc}"
  message = "Build site at #{Time.now.utc}"
  status = system("git commit -m \"#{message}\"")
  puts status ? "Success" : "Failed"
  puts "\n## Pushing commits to remote"
  status = system("git push origin source")
  puts status ? "Success" : "Failed"
end

desc "Create a new post"
task :new do
  type = "writing"
  title = ENV["title"] || "New Post"
  slug = title.gsub(' ','-').downcase

  if type == "writing"
    layout = "post"
  end

  filename = "#{Time.new.strftime('%Y-%m-%d')}-#{slug}.md"
  TARGET_DIR = "_posts/"
  path = File.join(TARGET_DIR, filename)
  post = <<-HTML
---
title: "TITLE"
date: "DATE"

layout: LAYOUT
category: CATEGORY
---

HTML
  post.gsub!('TITLE', title)
  post.gsub!('DATE', Time.new.to_s)
  post.gsub!('LAYOUT', layout)
  post.gsub!('CATEGORY', type)

  File.open(path, 'w') do |file|
    file.puts post
  end
  puts "New #{type} post generated in #{path}"
  system "atom #{path}"
end
