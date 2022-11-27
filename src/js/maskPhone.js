document.addEventListener('DOMContentLoaded', function(){
    const phoneInputs = document.querySelectorAll('input[data-tel-input]');
    const mask = '+375(__) ___-__-__';

    const getInputNumberValue = function(input){ // get input only with number
        return input.value.replace(/\D/g, '');
    };

    const getCursorPosition = function(ctrl) {
        var CaretPos = 0;
        if ( document.selection ) {
            ctrl.focus ();
            var Sel = document.selection.createRange();
            Sel.moveStart ('character', -ctrl.value.length);
            CaretPos = Sel.text.length;
        } else if ( ctrl.selectionStart || ctrl.selectionStart == '0' ) {
            CaretPos = ctrl.selectionStart;
        }
        return CaretPos;
    };

    const setCursorPosition = function(input, pos) {
        setTimeout(function(){
            input.setSelectionRange(pos, pos);
        },0);
    };

    const onPhoneInput = function(e){
        let input = e.target,
            inputNumbersValue = getInputNumberValue(input),
            formattedInputValue = '',
            cursorPosition = getCursorPosition(input);
        
        if(cursorPosition === 19) {
            return input.value = input.value.slice(0,18);
        }

        if(inputNumbersValue === '375') {
            input.value = mask;
            return setCursorPosition(input, 5);
        }

        if(input.value[cursorPosition] === '_') {
            input.value = input.value.slice(0,cursorPosition) + input.value.slice(++cursorPosition);
            setCursorPosition(input, --cursorPosition);

            if(input.value[cursorPosition] === ')') {
                setCursorPosition(input, cursorPosition+2);
            }

            if(input.value[cursorPosition] === '-') {
                setCursorPosition(input, cursorPosition+1);
            }

            return;
        }
        
        console.log(cursorPosition+'_'+ getCursorPosition(input));
        
    };

    const onPhoneFocus = function(e){
        let input = e.target;
        if (!input.value) {
            input.value = mask;
            setCursorPosition(input, 5);
            console.log(getCursorPosition(input))
        } else {
            return;
        }
        
    };

    const onPhoneBlur = function(e){
        let input = e.target;
        if (input.value === mask) {
            input.value = '';
        } else {
            return;
        }
        
    };

    for ( let i=0; i<phoneInputs.length; i++ ) {
        phoneInputs[i].addEventListener('focus', onPhoneFocus);
        phoneInputs[i].addEventListener('blur', onPhoneBlur);
        phoneInputs[i].addEventListener('input', onPhoneInput);

    }
});