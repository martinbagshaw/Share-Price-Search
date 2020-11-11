1. How long did I spend on the challenge?
- 4 evenings, not sure how many hours.

2. What would I add to your solution if you had more time?
- I would tighten up my use of TypeScript, and get a better handle on the use of Generics.
- Split up larger components more, especially the SearchForm.
- I would have written more integration tests, especially for the SearchForm.
- A better chart for statistics, and more robust way to order data than ``Object.entries``.
- Used the News feed API call I made.
- I would also have planned it out more, written Github issues for it, used a Kanban board, and not just committed to master. I am keeping obvious technical test off Github too, for the time being!
- An ideal touch for better user experience would be a company name search, which would convert the readable company name to the company code, for querying the API.

3. What was the most useful feature that was added to the latest version of your chosen language?
- Not entirely sure, but I quite like optional chaining, which is fairly new to JavaScript:

```javascript
const deepObject = {
  a: {
    b: {
      c: {
        d: 100,
        e: 200,
      }
    }
  },
  z: {
    'testing 123': [1, 2, 3]
  }
};
const nestedProperty = a?.b?.c?.f;
`The property 'f' on 'deepObject' is ${nestedProperty}.`;
`This means I don't have to write 'a && a.b && a.b.c && a.b.c.f', which can save me from writing a lot more code`;
```

4. How would I track down a performance issue in production? Have I ever had to do this?

Yes. In no specific order:
  - i. Gather all information on the error possible, from the user/ customer's experience of it, to information in any error reporting services that may be set up.
  - ii. Draw up a list of possible causes from all known information, and if any of the causes can be isolated, investigate the most obvious isolated cause first.
  - iii. Try to reproduce the error, as it was reported
  - iv. If the error is less clear, get a better idea of the system in question, and investigate where any possible race conditions may lie.
  - v. Investigate locally, and in a staging environment to further deduce the cause, noting any differences in app behaviour between environments.
  - vi. Making use of the developer tools in the browser, check out the console, network panel, performance, memory, storage, etc, to see if anything is awry.

5. Please describe yourself using JSON

```javascript
const martin = {
  "name": "Martin Bagshaw",
  "age": "31",
  "dob": "30-06-1989",
  "sex": "male",
  "profession": "frontend developer",
  "hobbies": [ "art", "climbing", "cycling", "hiking", "reading", "socialising"],
  "favourites": {
    "artists": ["M.C. Escher", "C215", "Chuck Close"],
    "books": [{
      "title": "Only Forward",
      "author": "Michael Marshall Smith" 
    },
    {
      "title": "Mort",
      "author": "Terry Pratchett" 
    },
    {
      "title": "Johannes Cabal the Necromancer",
      "author": "Jonathan L. Howard" 
    }],
    "comedians": ["Doug Stanhope", "George Carlin", "Jim Jeffries", "Stewart Lee"]
    "films": ["Oh Brother, where are Thou?", "The Big Lebowski"]
  }
}
```