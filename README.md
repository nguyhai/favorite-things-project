# jquery-fav-things
For this assignment we will add and remove information from a web page when triggered by click events.

Gather some information on your favorite things.  One part of that information will need to be something non-textual, like an image, sound clip or embedded video link. You will need a list of at least 5 things.

## Goals:

- Use JavaScript & jQuery coding best practices
- Utilize functions to keep your code neat
- Use jQuery to build HTML to add items to the DOM
- Use jQuery to handle click events
- Show and present your code to the class in 8-10 minutes


## GitHub Repository
https://github.com/htc-ccis2591-spring2017/favorite-things-proj/

As usual you will need to fork and clone this repository to begin the assignment, and submit a pull request for grading when the assignment is complete.  


## Design the HTML Layout
Before you try to write JavaScript code to put these favorite things into HTML, you’ll want to know what that HTML looks like.  Update the test.html page with the HTML to show one of your favorite things.  This will allow you to address any layout and styling concerns before moving on to the JavaScript code.  

Don't forget to include one thing that is non-textual such as an image, video or sound clip.

__Note:__ The test.html page will be graded, so you might as well do it first and make your life easier.

As you design the structure, think of each thing as a section, article, or div element with child tags such as headings, paragraphs, images, etc.  The content will need to be laid out so that there is an item of your choice (i.e. a heading or image) that is shown initially as a summary list, while the remaining detail content is hidden.  We should then be able to click the summary items to toggle the show/hide of the details.


## Design the JSON
The information for your favorite things should be stored in one JSON file.  You should have a common structure for each of your favorite things, though you may use arrays and child objects to get some variety in the details if needed.  


## Page Behavior
When the page first loads, it should read a JSON file and use that data to build the HTML to show your favorite things.

When the page loads, we should only see a summary of your favorite things.

When one of the summary items is clicked, the detail information for that item should be shown and the detail for all other items should be hidden.  __Only one items details should be shown at a time.__


__Important Note:__  Yes, jQuery has a UI component to do this.  No you cannot use it for this assignment. The assignment involves the creation of your own show/hide behavior to illustrate that you understand some basic jQuery and JavaScript.  Using any other 3rd party component to do this defeats the purpose of the assignment.


## Code Structure
It is also expected that you will use functions to organize your code and to avoid repetition (copy/paste) of code.  At a minimum, I would expect a function that builds the HTML for one favorite thing that is parameterized so that you do not repeat that code over and over to build each item.  This will also make it easier for you to change or modify that layout later if needed or desired.

### Tips
- Be sure to use all of the JavaScript coding best practices that we have discussed.
- Make and use functions; try to keep them small, don’t make long unreadable monster code.
- Use const and let appropriately as you create variables.
- Be sure to test the show/hide of your sections well.
- Don't forget to include something non-textual for each favorite thing.
- I don't expect much beauty, but things shouldn't be squished into the edges of the page either. Consider using [Bootstrap](http://getbootstrap.com/) to get a quick edge on layout.

__Make sure to test your page after pushing your work to GitHub!__


## Presentation
The project work must be submitted with a pull request before the start of class the day that it is due.  Remember that sometimes there is a delay before your code is live on GitHub, so having this up a day before, or at least hours before is strongly recommended.  If you should your work is not live for the presentation, you may be able to present using local files but you will lose points for your project score.

In-class, you will show your page to the class as published on GitHub, and walk through what your page does and the code that you wrote. The presentation is limited to __10 minutes__, with a hard rude stop if you start to run over.  (However you also do not want your presentation to be too short or less than 8 minutes.)

### What should you cover?
- Who you are!!! Do not forget to introduce yourself.  
- Explain what your page does and how it does it. Yes, all of them will basically do the same thing.  It’s ok. Pretend that someone comes in and flash clears everyone’s memory between presentations. You need to say it all again because I'm grading you on your ability to quickly and clearly explain your JS code.
- There is no need to go into detail on HTML, CSS or JSON.
- The favorite things are super cool and all, but remember to focus on the code.  
