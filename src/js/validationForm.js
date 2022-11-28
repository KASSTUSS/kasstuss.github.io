const checkPhoneNumber = function(n) {
    return /\+375\(\d{2}\) \d{3}\-\d{2}\-\d{2}/i.test(n) || /8\(0\d{2}\) \d{3}\-\d{2}\-\d{2}/i.test(n);
}

