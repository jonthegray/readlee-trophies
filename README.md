# readlee-trophies

## Instructions

* After installing dependencies, run `npm start` to start the server
* The page initially displays the list for a student with no trophies achieved yet
* Click each trophy to open a modal showing the details
* Log additional reading time and stories for each student with the buttons at the bottom
* Switch between students (simulate changing the logged-in student) with `window.changeStudent(id)`
  * 7 hardcoded students are provided
  * Switching between students preserves reading time and story count for each student

## Known warnings

* Opening a modal causes a warning about using findDOMNode(). This is inside the
react-bootstrap Modal code.
* TrophyPage.jsx has a warning about missing dependencies in useEffect(). This is due
to a linter limitation. A developer looking at the code can see that the missing
dependencies are the same across all renders, so technically aren't necessary.

## npm Dependencies

* Font Awesome: free library of common icons
* react-bootstrap: React library of Bootstrap components, using existing Bootstrap stylesheet
  * Currently only using Modal and Button
* flux: Basic implementation of flux architecture (from Facebook)
  * The JS architecture I'm familiar with was written before tools like Redux were created.
  This is a lightweight library to handle unidirectional data flow: Views call Actions,
  Actions are dispatched to the Store, Store updates and triggers re-render of Views.
  * If I were building a new architecture, I'd investigate Redux or other more modern tools.

## Simulated server

The Store makes calls to async functions on the "Server" with a hardcoded delay to
simulate network latency. I'm new to async/await and Promises, but this was an easy time
to try them out.

## What I'm happy with

* Like I said before, I enjoyed the open-ended nature of the exercise. It was fun to
build the page from scratch, then add more features and even learn new things along
the way.
* I think the UI is nice and clean, and I'm glad I was able to find the Readlee logo
and app font.
* I added some UI polish like disabling modal content when "processing"--small things
that make the whole page experience easier and smoother.
* I'm pretty new to create-react-app, but it was super easy to get a solution up and
running.
* This was my first time using React StrictMode. The warnings were helpful and
provided some code linting without having to set that up separately.
* The components (and props/state) should be structured in a way that minimizes
re-renders. I didn't do a full audit, but added and confirmed some logic.
* I've been working with functional React components and hooks for about a year. I'm
pretty used to the basic patterns now, but it's still fun to get a deeper understanding
of what's going on.

## What didn't go well

* I originally was using Immutable.js for the models. Working with Immutable objects
and data structures is helpful in a larger app (minimizing re-renders, avoiding side
effects, etc), but for this exercise it was over-engineered.
* I wasted some time spinning my wheels on the data model--how to track achievement
of a trophy by a student. Between this and Immutable.js, if I had spent some more
time thinking and planning, I probably could've saved an hour or two.
* With more planning, I could've worked out a more iterative approach where a fully/mostly
functional product was deliverable earlier, then added more features and polish over
time. This would also allow checkins and collaboration with other team members to
respond to changing priorities in a more agile way.

## Future enhancements

* Add more validation (both logic and UI) to the modals for logging time and stories
* Talk with the team about other ways to present the trophy details, and even what
information is important to be exposed to the user on this page, instead of a simple
modal.
* If more trophies are added, refactor the CSS to be more dynamic--and maybe even
explore different ways to display several trophies.
* Add more customization to the modal styles to make it fit inside the whole app better
* Explore better ways to organize the mobile-specific styles
* As the app grows, add more utilities and helper functions for common blocks of code
and behavior
* Build out a testing framework and add unit tests for special logic--even refactor
existing code to be more easily testable. I've used jest in the past for unit tests
and enzyme for component/snapshot tests.
* Learn more about tools like TypeScript, Redux, and other modern data flow and
client-server communication tools that would make the app easier to maintain
* Dig into the "create-react-app magic" to see if customizing things like the bundling
process would improve the user experience.