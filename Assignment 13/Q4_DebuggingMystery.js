"use strict";

// Q4: Debugging Mystery
function showMessage() {
    // In strict mode, assigning to undeclared greeting throws ReferenceError.
    // Fix: explicitly declare the variable in the function's local scope.
    const greeting = "Welcome";
    const watchMessage = greeting; // Add watchMessage to the VS Code Watch panel.
    debugger; // Pause here to inspect local variables and the call stack.
    console.log(watchMessage);
}

showMessage();

// Debug observation:
// Call Stack: global/script context -> showMessage()
// greeting and watchMessage are local to showMessage; neither becomes global.
// Without the declaration, greeting = "Welcome" would throw ReferenceError in strict mode.
