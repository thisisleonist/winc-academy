/**
 * 
 *  Thought behind appColors as an object is to make the
 *  color menu dynamic and generate the HTML for the choices
 *  using JavaScript. keyCode works for the first 9 colors.
 * 
 */

const appBody = document.body;
const appMenuToggler = document.getElementById('toggler');
const appMenuIcon = document.getElementsByClassName('icon');
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

/**
 *  
 *  Builds menu of color choices based on appColors object
 *  Inserts <li> items into the existing <ul> element in the DOM
 * 
 */

const appBuildColorMenu = function(){
    for (let index = 1; index <= colorCount; index++) {
        color = appColors['color'+index];
        output = '<li id="color' + index + '" style="background-color:' +
            color.value + '"><input id="color' + index +
            'btn" type="radio" name="color" value="' + color.value + '">' +
            color.label + '<span>' + index + '</span</li>';
        appMenuChoices.innerHTML += output;
    }
};

/**
 * 
 *  Prevents color transition effect on background from firing
 *  after page load
 * 
 */

const appInitBkgndTransition = function(){
    if(!appBody.classList.contains('transition')) appBody.classList.add('transition');
}

/**
 * 
 *  @param {boolean} action: Show or hide the color menu
 * 
 */

const appToggleColorMenu = function(action){
    if(action){
        Array.from(appMenuIcon).forEach(function(e){
            e.classList.remove('anim2');
            e.classList.add('anim1');
        });
        appMenuColors.classList.remove('hide');
        appMenuColors.classList.add('show');
    }else{
        Array.from(appMenuIcon).forEach(function(e){
            e.classList.remove('anim1');
            e.classList.add('anim2');
        });
        appMenuColors.classList.remove('show');
        appMenuColors.classList.add('hide');
    }
};

/**
 * 
 *  Sets the mouseover and mouseout eventListener
 * 
 */

const appSetTogglerEvents = function(){
    appMenuToggler.addEventListener('mouseover',function(){
        appToggleColorMenu(true);
        appInitBkgndTransition();
    });
    appMenuToggler.addEventListener('mouseout',function(){
        appToggleColorMenu(false);
    });
    appMenuColors.addEventListener('mouseover',function(){
        appToggleColorMenu(true);
    });
};

/**
 * 
 *  @param {string} color: Color to apply to the body background
 * 
 */

const appChangeBackgroundColor = function(color){
    appBody.style = 'background-color:'+color;
};

/**
 * 
 *  @param {string} label: Label for the selected color
 *  @param {string} value: Color value for the selected color
 */

const appChangeBodyMessage = function(label, value){
    appBodyMessage.innerHTML = label+'<br /><span class="light">'+value+'</span>';
};

/**
 * 
 *  @param {string} button: Radio button checked example from source #2
 * 
 */

const appSelectRadioButton = function(button){
    document.getElementById(button).checked = true;
};

/**
 * 
 *  Sets click eventListener on <li> element for all menu choices
 * 
 */

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

/**
 * 
 *  Sets click eventListener on <body> to close color menu
 * 
 */

const appSetCloseMenuFromBodyEvent = function(){
    appBody.addEventListener('click',function(){
        appToggleColorMenu(false);
    });
};

/**
 * 
 *  keyCode for numeric key 1 through 9; example from source #4
 * 
 */

const appSetKeyPressEvent = function(){
    appBody.addEventListener('keypress', function(pressed){
        if( pressed.keyCode >= 49 &&
            pressed.keyCode <= 57
        ){
            appChangeBackgroundColorByKeypress(pressed.key);
        }
    });
}

/**
 * 
 *  @param {number} key: Change menu and body background color
 *  based on numeric keys 1 through 9
 *  
 */

const appChangeBackgroundColorByKeypress = function(key){
    color = appColors['color'+key];
    value = color.value;
    label = color.label;
    appInitBkgndTransition();
    appChangeBackgroundColor(color.value);
    appSelectRadioButton('color'+key+'btn');
    appChangeBodyMessage(color.label, color.value);
}

/**
 * 
 *  Initialize the color toggle menu, choices and eventListeners
 * 
 */

const appInit = function(){
    appBuildColorMenu();
    appSetTogglerEvents();
    appSetColorChoiceEvents();
    appSetCloseMenuFromBodyEvent();
    appSetKeyPressEvent();
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