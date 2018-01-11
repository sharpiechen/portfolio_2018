Portfolio Update Instructions
===

by Sharon Chen

Here are instructions for updating your portfolio. The link to your portfolio can be found at [https://peteryskim.github.io/portfolio](https://peteryskim.github.io/portfolio). 

Main Files
------------
You shouldn't need to update the code in any of these files too much; all the things you add for each work (a.k.a. post) should update dynamically. Nonetheless, here is a rundown of where you can find the code for different parts of each page:

- **default.html** (located in [_layouts](https://github.com/peteryskim/portfolio/tree/gh-pages/_layouts) folder) - This file contains the code for the header (where it says "Peter Kim") and footer of all pages. 
- **index.html** - This file contains the the code for the About, Contact, and Selected Works sections of your home page. 
- **post.html** (located in [_layouts](https://github.com/peteryskim/portfolio/tree/gh-pages/_layouts)) folder) - This file contains the code for each individual work page, including the Description, Role, and body. It does not include the header and footer, which can be found in default.html. 

Adding a Work
------------
When you create posts, you are adding a work. Your home page should update with the information you type in and a new page should be created for that work. See below for instructions. 

1. Create a new post in the [_posts](https://github.com/peteryskim/portfolio/tree/gh-pages/_posts) folder. You can do this by creating a new file on your computer in Sublime Text and then syncing it with your Github repo using your Github app. 
2. Give the post a name that follows the following syntax: *YYYY-MM-DD-work-name.markdown* (Note: the date does not appear anywhere but is simply a way to make sure your works appear in the appropriate order; more recent dates will appear first.) 
3. Copy the contents in one of the existing works and edit accordingly. See below for specific instructions on editing posts.
4. Make sure your work/post is showing up correctly by going to your portfolio's [URL](https://peteryskim.github.io/portfolio). 

Editing a Post
------------
There are several variables in each post. As long as you put the right information in the right places, things will show up where they should be. 

- title: This title will appear on both your home page (on hover) and the work page
- category: This title will appear on both your home page (on hover) and the work page (role)
- description: This description is the description that appears on the work page under the title (not on the home page)
- excerpt: This is the one-sentence blurb that appears on hover on the home page
- contents after "---": This is everything that appears in the body of your work page

Adding an Image
------------
You can add an image to the body of your work page using the following code: 

`<img style="max-width:100%;border:1px solid #ddd;" src="{{site.baseurl}}/assets/img-work-1.png"></img>`

The only thing you need to change is "img-work-1.png". In your [assets](https://github.com/peteryskim/portfolio/tree/gh-pages/assets) folder, simply add a new image file and name it accordingly and then change the text. 

