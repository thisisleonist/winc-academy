/**
 * 
 *  Thought behind appColors as an object is to make the
 *  color menu dynamic and generate the HTML for the choices
 *  using JavaScript. keyCode works for the first 9 colors.
 * 
 */

const appBody = document.body;
const appMenuToggler = document.getElementById('toggler');
const appHamburgerImage = document.querySelector('#toggler img');
const appMenuColors = document.getElementById('colors');
const appMenuChoices = document.getElementById('choices');
const appBodyMessage = document.getElementById('message');

const appColors = {
    color1: {
        label: 'Home',
        value: '#999999'
    },
    color2: {
        label: 'Red',
        value: '#CC2929'
    },
    color3: {
        label: 'Orange',
        value: '#FF8000'
    },
    color4: {
        label: 'Purple',
        value: '#9C3DCC'
    },
    color5: {
        label: 'Green',
        value: '#3DCC3D'
    },

    // Uncomment for additional colors
    
    // color6: {
    //     label: 'Yellow',
    //     value: '#FFD500'
    // },
    // color7: {
    //     label: 'Aqua',
    //     value: '#29CCCC'
    // },
    // color8: {
    //     label: 'Blue',
    //     value: '#295FCC'
    // },
    // color9: {
    //     label: 'Magenta',
    //     value: '#9C3DCC'
    // }

}

// Object.keys example from source #1
const colorCount = Object.keys(appColors).length;

const appBuildColorMenu = function(){
    for (let index = 1; index <= colorCount; index++) {
        color = appColors['color'+index];
        output = '<li id="color'+index+'" style="background-color:'+color.value+'"><input id="color'+index+'btn" type="radio" name="color" value="'+color.value+'">'+color.label+'</li>';
        appMenuChoices.innerHTML += output;
    }
};

const appInitBkgndTransition = function(){
    if(!appBody.classList.contains('transition')) appBody.classList.add('transition');
}

const appToggleColorMenu = function(action){
    if(action){
        appMenuColors.classList.remove('hide');
        appHamburgerImage.classList.add('rotate-right');
        
        appMenuColors.classList.add('show');
    }else{
        appMenuColors.classList.add('hide');
        appHamburgerImage.classList.remove('rotate-right');
        appMenuColors.classList.remove('show');
    }
};

const appSetTogglerEvents = function(){
    appMenuToggler.addEventListener('mouseenter',function(){
        appToggleColorMenu(true);
        // prevents *flash* from white to black after page load
        appInitBkgndTransition();
    });
    appMenuToggler.addEventListener('mouseleave',function(){
        appToggleColorMenu(false);
    });
    appMenuColors.addEventListener('mouseenter',function(){
        appToggleColorMenu(true);
    });
};

const appChangeBackgroundColor = function(color){
    appBody.style = 'background-color:'+color;
};

const appChangeBodyMessage = function(label, value){
    appBodyMessage.innerHTML = label+'<br /><span class="light">'+value+'</span>';
};

// Radio button checked example from source #2
const appSelectRadioButton = function(button){
    document.getElementById(button).checked = true;
};

const appSetColorChoiceEvents = function(){
    for (let index = 1; index <= colorCount; index++) {
        color = appColors['color'+index];
        let value = color.value;
        let label = color.label;
        document.getElementById('color'+index).addEventListener('click',function(){
            appChangeBackgroundColor(value);
            appSelectRadioButton('color'+index+'btn');
            appChangeBodyMessage(label, value);
            appToggleColorMenu(false);
        });
    };
};

const appBindCloseMenuFromBody = function(){
    appBody.addEventListener('click',function(){
        appToggleColorMenu(false);
    });
};

// keyCode range 1 t/m 9 example from source #4
const appBindKeyPress = function(){
    appBody.addEventListener('keypress', function(pressed){
        if( pressed.keyCode >= 49 &&
            pressed.keyCode <= 57
        ){
            appChangeBackgroundColorByKeypress(pressed.key);
        }
    });
}

const appChangeBackgroundColorByKeypress = function(key){
    color = appColors['color'+key];
    value = color.value;
    label = color.label;
    // prevents *flash* from white to black after page load
    appInitBkgndTransition();
    appChangeBackgroundColor(color.value);
    appSelectRadioButton('color'+key+'btn');
    appChangeBodyMessage(color.label, color.value);
}

const appInit = function(){
    appBuildColorMenu();
    appSetTogglerEvents();
    appSetColorChoiceEvents();
    appBindCloseMenuFromBody();
    appBindKeyPress();
};

appInit();

/**
 * 
 *  Sources
 * 
 *  #1: https://stackoverflow.com/questions/126100/how-to-efficiently-count-the-number-of-keys-properties-of-an-object-in-javascrip
 *  #2: https://stackoverflow.com/questions/21166860/check-a-radio-button-with-javascript
 *  #4: https://stackoverflow.com/questions/13196945/keycode-values-for-numeric-keypad/13196983
 * 
 */