// change the chapter number to see the various projects for each chapter.
// NOTE: chapter numbering follows the same numbering of the book, so the
// first chapter is 1
var currentChapter = 1;

var chapters = {
  chapter1: function() {
    var light = new TrafficLight({powered: false}).renderInto(document.body);
  }
};

enyo.ready(function () {
  chapters['chapter' + currentChapter]();
});
