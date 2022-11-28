document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');

    var getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        //+375(44) 558-11-41    - 375 44 558 11 41

        //8(044) 558-11-41      - 80 44 558 11 41

        if (["2", "3", "4", "8"].indexOf(inputNumbersValue[0]) > -1) {

            
            if ((inputNumbersValue[0] == "8")) {
                inputNumbersValue = "";
                formattedInputValue = "8(0" + inputNumbersValue;
            } else {
                if(inputNumbersValue.substring(0,3) === "375")
                    inputNumbersValue = "375" + inputNumbersValue.substring(3);
                else
                    inputNumbersValue = "375" + inputNumbersValue;

                formattedInputValue = "+375(" + inputNumbersValue.substring(3);

                if (inputNumbersValue.length > 3) {
                    formattedInputValue += inputNumbersValue.substring(4,5);
                }
                if (inputNumbersValue.length > 5) {
                    formattedInputValue += ') ' + inputNumbersValue.substring(5,8);
                }
                if (inputNumbersValue.length >= 9) {
                    //formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
                }
                if (inputNumbersValue.length >= 10) {
                    //formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
                }
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})