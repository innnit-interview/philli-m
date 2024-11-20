# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Improvements

- Update the checkbox to be an accessible switch, as per the design. I avoided this due to time constraints, as creating a potentially inaccessible element is worse than leaving it as a checkbox. Additionally, check how clear the span element is for screen readers.  
- Add a character counter using the existing title state.  
- Styling: Either separate styles into component files or implement styled components. In a small, simple app, styled components might be preferable. However, since I am not fully familiar with them and the styling requirements were minimal, I opted for a more familiar approach.  
- Consider optimizing multiple form states to use a map. However, this might reduce readability.  
- Update `handleSave` to save a JSON map instead of individual key-value pairs. This would also allow saving the checked state, which currently cannot be saved as it is not a string.  
- Decide on the behavior when the editor field has been filled but the checkbox is then checked (disabling the editor). Should the content still be submitted? Should the form field be cleared when disabled? Update the code accordingly.  
- Improve styling for the success message (and translate it).  
- Add form validation and decide which fields are required.  
- Improve the handling of maxLength validation. Currently, it stops additional characters from being entered, but a clearer approach would be to warn the user when the limit is reached.  
- Add form validation to prevent submitting an empty form.  
- Enhance the visibility of keyboard focus and hover effects.  
- Test with a screen reader to ensure clear labeling of interactive elements.  
- Review form field names, classes, and IDs to ensure consistency and conformity.

---

## Test Cases

- Validate the character limit enforcement.  
- Test the values sent to local storage upon button click.  
- Test form submission behavior to ensure no empty or partial forms are accepted (depending on the required fields decision).  
- Verify that toggling the checkbox disables the editor field as expected.  
- Check the behavior of the editor field when it is disabled with existing content.  
- Add a snapshot test of the form render.  

---

## Timeline

11:45 Started coding used the Solunum timer to time 30min increments of work with 10 min breaks
13:35 Stopped for lunch after 3 cycles. 
14:45 Restarted around and completed last 3 cycles with breaks 
16:40 Stopped coding and timer
17:00 Documentation writing outside of suggested time limit.  

Total time coding 3hr 5min
