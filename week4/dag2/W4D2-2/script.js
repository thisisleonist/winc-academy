// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// function Video(title){
//     this.title = title;
//     console.log(this);
// }

// const v = new Video('b');

const Video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this);
    }
};

/*

Video is een object met twee properties, titel en tags
showTags() is een method (function) binnen het object
this: de gedefinieerde properties binnen het object
.forEach() kan this lezen door 'm als 2e arg mee te geven

*/