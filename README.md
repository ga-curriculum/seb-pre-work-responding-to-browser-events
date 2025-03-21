<textarea id="source">

<h1 class="slide-header">Responding to Browser Events</h1>

<span id=time-estimate class="color-grey-500">60 mins</span>

<p id="lesson-description">
It all comes together when we use JavaScript to <strong>listen for user actions in the browser</strong> and respond by running functions that manipulate the DOM.

In this lesson, you’ll learn how to <strong>attach event listeners</strong> to DOM elements. This will allow your webpages to respond to user input — such as clicks, form submissions, and other interactions — making your pages dynamic and interactive.

</p>

<h5 id="topics-header" class="color-grey-500">Topics</h5>

Event Listeners

<hr>

Callback Functions

<hr>

<a href="./assets/responding_to_browser_events_study_guide.pdf" target="_blank" download="responding_to_browser_events_study_guide.pdf" class="ant-btn" data-trackable="true" data-track-category="study guide" data-track-section="lesson page" data-track-action="download study guide"><span role="img" class="anticon"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><g class="download_svg__nc-icon-wrapper"><path d="M8 12c.3 0 .5-.1.7-.3L14.4 6 13 4.6l-4 4V0H7v8.6l-4-4L1.6 6l5.7 5.7c.2.2.4.3.7.3z"></path><path data-color="color-2" d="M1 14h14v2H1z"></path></g></svg></span><span> Download Study Guide</span></a>

---

<h1 class="slide-header">Event Listeners</h1>

**Events** are actions that users take on your webpage, like clicking a button, hovering over an element, or scrolling the page.

When you attach a function to one of these events, you create an **event listener** (sometimes called an **event handler**). This allows the browser to “listen” for specific user actions and then respond by running the code you define.

Event listeners often start with `on`. Here are a few common examples:

```js
onload; // Runs when the page finishes loading.
onclick; // Runs when a user clicks an element.
onmouseover; // Runs when the user hovers the mouse over something.
onfocus; // Runs when a form field receives focus.
```

To attach an event listener to a specific element, you’ll use `querySelector()` to select that element. (We don’t use `querySelectorAll()` here because we attach event listeners to individual elements.)

---

<h1 class="slide-header">onclick</h1>

The `onclick` event is used to run code when a specific element is clicked. The general format looks like this:

```js
elementToGrab.onclick = function () {
  // Code to run when the element is clicked
};
```

For example, if we have a function named `respondToLoginAttempt` that shows a message when someone clicks the login button, we could write:

```js
document.querySelector('#login').onclick = respondToLoginAttempt;
```

In other words: “When the element with the ID `login` is clicked, run the `respondToLoginAttempt` function.”

---

<h1 class="slide-header">Another Method: addEventListener</h1>

Another common way to add event listeners is by using the `addEventListener()` method. Like `onclick`, this tells the browser to wait for a certain event and then run a function when that event happens.

For example, a form can wait for a user to submit it and then run validation code. A button can wait to be clicked and then trigger changes on the page.

The general format looks like this:

```js
elementToGrab.addEventListener(event, callbackFunction);
```

This method takes two parameters:

1. The name of the event (as a string), like `'click'` or `'submit'`.
2. The function that should run when the event happens (this is called a **callback function**).

Here’s a simple example where clicking a button prints a message in the console:

```js
function sayHello() {
  console.log('Hello!');
}
document.querySelector('button').addEventListener('click', sayHello);
```

---

<h1 class="slide-header">Which One Should You Use?</h1>

You might be wondering when to use `onclick` and when to use `addEventListener()`.

Let’s compare them with the same example using a function called `respondToLoginAttempt`:

Using `onclick`:

```js
document.querySelector('#login').onclick = respondToLoginAttempt;
```

Using `addEventListener()`:

```js
document
  .querySelector('#login')
  .addEventListener('click', respondToLoginAttempt);
```

**The key difference:**

- **`onclick` can only store one click event handler.** If you set another `onclick` later, it will overwrite the first one.
- **`addEventListener()` allows multiple event listeners** on the same element without overwriting each other.

---

<h1 class="slide-header">The Event Object</h1>

Sometimes you’ll want your event-handling function to know more about the event — for example, which element was clicked.

When your callback function is triggered, JavaScript passes it an **event object** (usually called `e` or `event`). This object contains helpful information about what happened, including the element that triggered the event (`e.target`).

Here’s an example where clicking a button will log the element and then remove it from the page:

```javascript
document.querySelector('#disappearing-button').onclick = function (e) {
  console.log(e.target); // Logs the clicked button
  e.target.remove(); // Removes the button from the page
};
```

Using the event object makes your functions more flexible and dynamic.

---

<h1 class="slide-header">Our First Event Listener</h1>

**1. Select the button with the ID of `generate-greeting`.**  
**2. Add an event listener to this button.**  
**3. When the button is clicked, run the `sayHello()` function.**

This will help you practice adding a basic event listener.

<iframe height="300" style="width: 100%;" scrolling="no" title="Our First Event Listener" src="https://codepen.io/GAmarketing/embed/ZEZBqZW?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/ZEZBqZW">
  Our First Event Listener</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Express Yourself</h1>

**1. Select the button with the ID of `generate-message`.**  
**2. Add an event listener to this button.**  
**3. When the button is clicked, grab the value from the text input field.**  
**4. Log that value to the console.**

This will let you practice getting user input and responding to a click event.

<iframe height="300" style="width: 100%;" scrolling="no" title="Express Yourself" src="https://codepen.io/GAmarketing/embed/rNbWqbM?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/rNbWqbM">
  Express Yourself</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">So Much to Do...</h1>

**1. Select the button with the ID of `generate-todo`.**  
**2. Add an event listener to this button.**  
**3. When the button is clicked, grab the value from the input with the ID of `new-todo`.**  
**4. Create a new list item (`<li>`) element with that value as its text.**  
**5. Append the new list item to the unordered list with the class of `todos`.**

This will help you practice combining user input, creating new elements, and adding them to the page.

<iframe height="300" style="width: 100%;" scrolling="no" title="So Much To Do" src="https://codepen.io/GAmarketing/embed/ExJNdJW?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/ExJNdJW">
  So Much To Do</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Conclusion</h1>

While it will take practice to feel fully comfortable with these concepts, the JavaScript you’ve learned so far gives you the foundation to start building **dynamic and interactive front-end applications**.

As you continue practicing, you’ll be able to combine these skills to create more complex and engaging web experiences.

</textarea>
