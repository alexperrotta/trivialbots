console.log("I'm Linked!");

$(function(){
    var currentModule;
    $('.btn').click(function(){
        currentModule = new PlayerNameModule('.players');
    });
})