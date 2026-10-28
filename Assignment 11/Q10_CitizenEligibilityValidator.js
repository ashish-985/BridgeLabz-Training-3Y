// Q10: Citizen Eligibility Validator

// Example inputs; update these values to test different cases.
const age = 19;
const isCitizen = true;

if (isCitizen) {
    // The prompt's "all services" and "vote only" rules overlap at ages 18-20.
    // This implementation treats ages 18-20 as vote-only, and age 21+ as all services.
    if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only.");
    } else if (age >= 21) {
        console.log("Eligible for all services.");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
