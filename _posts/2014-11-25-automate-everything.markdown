---
layout: post
title:  "Automate Everything!"
date:   2014-11-25 13:30:04
categories: jekyll update
---
Yeah.. yeah.. I know what you are thinking. The title contradicts with the principle ‘Do Not Automate Everything!’ Well it still holds  true when you think of the test suite for your projects!

I am not going to talk about testing coverage or test Pyramid. What I am going to talk about is Automate everything that you come across which will ease your day to day work. While it obviously helps you to speed up your mundane tasks, it also allows you to learn alongside!

Following are some situations I was regularly faced with while working on my previous project:


**Setting up data, again and again!**

This was the one thing I hated doing. Every time a new feature was released, I had to setup the test data on different environments with different variations. Though I could use REST plugins for browser (like POSTMAN), it was difficult to track all that test data. Bulk upload and variations of the data was almost impossible to keep track of.
After some days of frustration, I spent some time writing a small script to do all this tiring work for me. That was the first time, when I first discovered the joy of automation beyond my project test suite.

![My helpful screenshot]({{ site.url }}/assets/try.png)


![My helpful screenshot]({{ site.url }}/assets/data_format_02_resize.png)
![My helpful screenshot]({{ site.url }}/assets/data_format_02_resize_70.png)
![My helpful screenshot]({{ site.url }}/assets/ORG_1.png)
![My helpful screenshot]({{ site.url }}/assets/ORG_2.png)


{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
