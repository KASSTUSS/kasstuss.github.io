document.addEventListener("DOMContentLoaded", function () {
    const phoneInputs = document.querySelectorAll('input[data-tel-input]');

    const getInputNumbersValue = function (input) {
        return input.value.replace(/\D/g, '');
    }

    const onPhonePaste = function (e) {
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        let pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            let pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    const onPhoneInput = function (e) {
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) return input.value = "";
        

        if (input.value.length != selectionStart) {
            if (e.data && /\D/g.test(e.data)) input.value = inputNumbersValue;
            return;
        }

        if (["2", "3", "4", "8"].indexOf(inputNumbersValue[0]) > -1) {

            
            if ((inputNumbersValue[0] == "8")) {
                inputNumbersValue = "80" + inputNumbersValue.substring(2);
                formattedInputValue = "8(0";
                len = 0;

                if (inputNumbersValue.length >= 2+len) formattedInputValue += inputNumbersValue.substring(2+len,4+len);
            } else {
                if(inputNumbersValue === "37") {
                    input.value = "";
                    inputNumbersValue = "";
                    formattedInputValue = "";
                    return;
                }
                if(inputNumbersValue.substring(0,3) === "375")
                    inputNumbersValue = "375" + inputNumbersValue.substring(3);
                else
                    inputNumbersValue = "375" + inputNumbersValue;

                formattedInputValue = "+375";
                len = 1;

                if (inputNumbersValue.length > 2+len) formattedInputValue += "(" + inputNumbersValue.substring(2+len,4+len);
            }
            if (inputNumbersValue.length >= 5+len) formattedInputValue += ') ' + inputNumbersValue.substring(4+len,7+len);
            if (inputNumbersValue.length >= 8+len) formattedInputValue += '-' + inputNumbersValue.substring(7+len, 9+len);
            if (inputNumbersValue.length >= 10+len) formattedInputValue += '-' + inputNumbersValue.substring(9+len, 11+len);
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    const onPhoneKeyDown = function (e) {
        let inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) e.target.value = "";
    }
    for (let phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
});