# HUE/ND Website

This repo houses the contents of http://hue.nd.edu.
It is a [jekyll][1] site hosted with [Github pages][2].

To make changes on your computer you will need a version of the [Ruby program language][3].
The version of Ruby you use should match [the one specified on by GitHub pages][4].
At the time of this update, that version is 2.7.4 (see the `.ruby-version` file).
There are [several different installers][5] to help you with this.

Like most Ruby projects, dependencies are managed with [Bundler][6].
Once your version of Ruby is installed and you have [cloned this git repository to your workspace][7] run `bundle` or `bundle install` in this directory.
(If Bundler _is not_ installed you can install it with `gem install bundler`.)

After all the dependnecies are installed, you can [get the Jekyll project running][8] with:

```
bundle exec jekyll serve
```

That will make the site available at http://localhost:4000 and will reload the site as you make changes to the files.

This site is built using [GitHub Flavored Markdown][9] for most of the page content and [Sass][10] to define the sytles.

[1]:  https://jekyllrb.com/
[2]:  https://pages.github.com/
[3]:  https://www.ruby-lang.org/en/documentation/installation/
[4]:  https://pages.github.com/versions/
[5]:  https://www.ruby-lang.org/en/documentation/installation/#installers
[6]:  https://bundler.io/
[7]:  https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
[8]:  https://jekyllrb.com/docs/
[9]:  https://github.github.com/gfm/
[10]: https://sass-lang.com/
