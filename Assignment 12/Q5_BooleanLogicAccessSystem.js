// Q5: Boolean Logic Access System

// Test different combinations of the smart-home security conditions.
function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    // Every required condition must be true for the system to be secure.
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // OR combines any unsafe condition; ! reverses each required condition.
    const isUnsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;

    console.log(`Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside}`);
    console.log(isSecure && !isUnsafe ? "Secure" : "Unsafe");
    console.log("---");
}

checkSecurity(true, true, true, true);
checkSecurity(true, true, false, true);
checkSecurity(false, true, true, true);
