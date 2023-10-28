function Header(text) {
    let h1 = document.createElement("h1");
    h1.innerText = text;
    document.body.appendChild(h1);
}

Header("Header() caused side effects!");

// "Explanation of why it's considered an impure function:

//     DOM Manipulation:
//     The function directly interacts with the Document Object Model (DOM) by creating an <h1> element and appending it to the document.body. This kind of side effect makes the function impure because it affects the external state (the DOM) beyond its local scope.

//     Dependency on External State:
//     The function relies on the global document object, which is external to the function. Impure functions often depend on external state, making them harder to reason about and potentially causing unexpected behavior.

//     Observable Side Effect:
//     The function has an observable side effect on the UI by adding a visible element to the document. Pure functions, on the other hand, have no side effects and return a value solely based on their inputs.

// To make this function pure, you would need to modify it so that it doesn't have side effects on external state. Pure functions are generally preferred because they are more predictable and easier to test and reason about."