<textarea id="source">

<h1 class="slide-header">Responding to Browser Events</h1>

<span id=time-estimate class="color-grey-500">60 mins</span>

<p id="lesson-description">
  It all comes together when we use JavaScript to wait for user activity in the browser and respond by executing JavaScript functions that manipulate the DOM. In this lesson, we’ll work on attaching event listeners to DOM elements to allow our webpages to intelligently interact with user input.
</p>

<h5 id="topics-header" class="color-grey-500">Topics</h5>

Event Listeners

<hr>

Callback Functions

<hr>

<a href="https://ga-create-api.s3.amazonaws.com/studyguides/responding-to-browser-events-216c34.pdf" target="_blank" download="responding_to_browser_events_study_guide.pdf" class="ant-btn" data-trackable="true" data-track-category="study guide" data-track-section="lesson page" data-track-action="download study guide"><span role="img" class="anticon"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><g class="download_svg__nc-icon-wrapper"><path d="M8 12c.3 0 .5-.1.7-.3L14.4 6 13 4.6l-4 4V0H7v8.6l-4-4L1.6 6l5.7 5.7c.2.2.4.3.7.3z"></path><path data-color="color-2" d="M1 14h14v2H1z"></path></g></svg></span><span> Download Study Guide</span></a>

---

<h1 class="slide-header">Learning Objectives</h1>

<p>By the end of this lesson, you'll be able to:</p>

<ul>
  <li>Use JavaScript to respond to user actions in the browser.</li>
  <li>Update elements on a webpage based on user behavior.</li>
</ul>

---

<h1 class="slide-header">Event Listeners</h1>

**Events** are user actions that occur on your webpage, such as hovering over an element, clicking a link, or scrolling down a page.

When you add a listener (which is a function) to an event, you get an **event listener** (also called **event handlers**). This is how the browser knows to respond to user actions. Your browser “listens” for an event to take place, then responds in whatever way you tell it to.

An event listener begins with `on`. Here are a few commonly used ones:

```js
onload  // When the page loads.
onclick  // When a user clicks something.
onmouseover  // When a user hovers their mouse over something.
onfocus  // When a user puts the cursor on a form field.
```

To tell the browser which element to listen to, we’ll bring back the DOM access method we learned about in the last lesson: `querySelector()`. (We can only attach an event listener to an individual element, so we wouldn’t use `querySelectorAll()` here.)

---

<h1 class="slide-header">onclick</h1>

Take `onclick`: It refers to an element's event listener, which will be triggered when the element is clicked. The general format looks like this:

```js
elementToGrab.onclick = function() {
   // Code that should run 
};
```

Let’s say we created a function named `respondToLoginAttempt` that throws a notification when the login element is clicked. The code snippet would look like this: 

```js
document.querySelector('#login').onclick = respondToLoginAttempt;
```

In plain English, this is saying, “When the login element is clicked, run the function called `respondToLoginAttempt`.”

---

<h1 class="slide-header">Another Method: addEventListener</h1>

You can also add event listeners using a method called `addEventListener()`. Similar to `onclick`, this method tells elements to wait for something to happen in the browser and then execute a specific function when it does.

For example, forms can wait for a user to submit data and then run validation functions to check the input. Or, buttons can wait for a user to click them and then remove certain elements from the page.

The general format looks like this: `elementToGrab().addEventListener(event, callback);`. Notice how this method takes two parameters:
1. The name of the browser event being listened for.
2. The callback function to be executed once that event occurs.

In this simple example, a clicked button will print a message to the console:

```js
function sayHello() {
    console.log("Hello!");
}
document.querySelector('button').addEventListener('click', sayHello);
```

---

<h1 class="slide-header">Which One?</h1>

Let’s compare what it’s like to use `onclick` and `addEventListener()`.

In an earlier example, we used a function called `respondToLoginAttempt`. If we use `onclick`, the code would look like this:

`document.querySelector('#login').onclick = respondToLoginAttempt;`


If we use `addEventListener()`, the code would look like this: 

`document.querySelector('#login').addEventListener('click', respondToLoginAttempt);`

A key difference is that `onclick` will **overwrite any previous click listeners** on the element, whereas `addEventListener()` will preserve existing listeners.

---

<h1 class="slide-header">The Event Object</h1>

When attaching functions as event listeners, you might want that function to use the element that was clicked. Maybe you want to grab the text that was clicked to store or update it.

When defining the function, you can add a parameter, typically called `e`. This parameter, known as the **event object**, is passed into the function when it’s triggered. It contains helpful details about the event that triggered the function, including which element triggered the function: `e.target`.

```javascript
document.querySelector('#disappearing-button').onclick = function(e) {
    console.log(e.target);
    e.target.remove();
}
```

---

<h1 class="slide-header">Our First Event Listener</h1>

Add an event listener to the button with the `generate-greeting` ID. When the button is clicked, trigger the `sayHello()` function.

---

<h1 class="slide-header">Express Yourself</h1>

Instead of a pre-generated greeting, let’s get a bit fancier and add a text input that allows users to log whatever is on their mind! 

When the user clicks the button with the ID of `generate-message`, log the value the user has typed into the input field. 

---

<h1 class="slide-header">So Much to Do...</h1>

There’s always more to do when it comes to programming! In this code challenge, users should be able to fill in the input field, click the button, and have their text added to the list as a new item.

When the user clicks the button with the ID of `generate-todo`, grab the value from the input with the ID of `new-todo`. Store the input value as the text of a new list item and append that new item to the unordered list with the class of `todos`.

---

<h1 class="slide-header">Conclusion</h1>

While it will take a lot more practice to get comfortable with these concepts, the JavaScript we've learned so far is enough to create rich and complex front-end applications.

</textarea>