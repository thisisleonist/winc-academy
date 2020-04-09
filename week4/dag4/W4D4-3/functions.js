const passwordVerifier = function(password) {
    
    // We tellen het aantal requirements waar het wachtwoord aan moet voldoen
    let score = 0;

    // Voor elke conditie maken we een interne check
    const isNotBlank = (pw) => {
        // return boolean
    };
    const isLessThan8Chars = (pw) => {
        // return boolean
    };
    const hasUppercase = (pw) => {
        // return boolean
    };
    const hasLowercase = (pw) => {
        // return boolean
    };
    const hasDigit = (pw) => {
        // return boolean
    };

    // Voor elke requirement die waar is, tel 1 punt op
    if(isNotBlank(password)) score++;
    if(isLessThan8Chars(password)) score++;
    if(hasUppercase(password)) score++;
    if(hasDigit(password)) score++;
    if(hasLowercase(password)) {
        score++;
    } else {
        // Voor deze requirement maken een uitzondering; reset de score als hier niet aan wordt voldaan
        score = 0;
    }

    // Markeer het wachtwoord als valide als er een score van minimaal 3 is
    return {
        score: score,
        valid: score >= 3
    };
};

module.exports = passwordVerifier;