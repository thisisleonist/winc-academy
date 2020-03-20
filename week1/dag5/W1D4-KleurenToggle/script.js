/**
 * 
 *  Gedachte achter appColors als object is om het kleurenmenu
 *  dynamisch te maken en de HTML voor de keuzes te genereren
 *  vanuit het script
 * 
 */

const appBody = document.body;
const appMenuToggler = document.getElementById('toggler');
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
    }
};

// Object.keys example from source #1
const colorCount = Object.keys(appColors).length;

const appBuildColorMenu = function(){
    for (let index = 1; index <= colorCount; index++) {
        color = appColors['color'+index];
        output = '<li id="color'+index+'" style="background-color:'+color.value+'"><input id="color'+index+'btn" type="radio" name="color" value="'+color.value+'">'+color.label+'</li>';
        appMenuChoices.innerHTML += output;
    }
};

const appToggleMenu = function(action){

    if(action){
        appMenuColors.classList.remove('hide');
        appMenuColors.classList.add('show');
    }else{
        if(whereIsThePointer()===false){
            appMenuColors.classList.add('hide');
            appMenuColors.classList.remove('show');
        }
    }
};


// appMenuToggler.addEventListener('mouseleave',function(){
//     appToggleMenu(false);
// });

const appBindToggler = function(){
    appMenuToggler.addEventListener('mouseenter',function(){
        appToggleMenu(true);
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

const appBindColors = function(){
    for (let index = 1; index <= colorCount; index++) {
        color = appColors['color'+index];
        let value = color.value;
        let label = color.label;
        document.getElementById('color'+index).addEventListener('click',function(){
            appChangeBackgroundColor(value);
            appSelectRadioButton('color'+index+'btn');
            appChangeBodyMessage(label, value);
            appToggleMenu(false);
        });
    };
};

const appBindMenuClose = function(){
    appBody.addEventListener('click',function(){
        appToggleMenu(false);
    });
};

// keyCode range 0 t/m 9 example from source #4
const appBindKeyPress = function(){
    appBody.addEventListener('keypress', function(pressed){
        if( pressed.keyCode >= 48 &&
            pressed.keyCode <= 57
        ){
            appChangeBackgroundColorByKeypress(pressed.key);
        }
    });
}

const appChangeBackgroundColorByKeypress = function(key){
    color = appColors['color'+key];
    let value = color.value;
    let label = color.label;

    appChangeBackgroundColor(value);
    appSelectRadioButton('color'+key+'btn');
    appChangeBodyMessage(label, value);
}

const appInitTransitions = function(){
    appBody.classList.remove('preload');
}

const appRun = function(){
    appBuildColorMenu();
    appBindToggler();
    appBindColors();
    appBindMenuClose();
    appBindKeyPress();
    appInitTransitions();
};

appRun();

/**
 * 
 *  Sources
 * 
 *  #1: https://stackoverflow.com/questions/126100/how-to-efficiently-count-the-number-of-keys-properties-of-an-object-in-javascrip
 *  #2: https://stackoverflow.com/questions/21166860/check-a-radio-button-with-javascript
 *  #4: https://stackoverflow.com/questions/13196945/keycode-values-for-numeric-keypad/13196983
 * 
 */