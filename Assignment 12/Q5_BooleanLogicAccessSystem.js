function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {

    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    console.log(`Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside}`);
    console.log(isSecure ? "Secure" : "Unsafe");
    console.log("---");
}

checkSecurity(true, true, true, true);
checkSecurity(true, true, false, true);
checkSecurity(false, true, true, true);
