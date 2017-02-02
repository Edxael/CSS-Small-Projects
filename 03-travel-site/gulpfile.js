var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task("default", function() {console.log("Hello from GULP - you just created a Gulp Task.");});
gulp.task("html", function(){ console.log("Imagine someting useful beeng done to your HTML here.");});


            // This is the new task
gulp.task("styles", function(){
            console.log("Imagine Sass or PostCSS task running here");
      });



gulp.task("watch", function(){

      watch("./app/index.html", function(){ gulp.start("html");} );


            // watching the folder styles, (** = any future subfolders), (*.css = any file with an extenscion ".css")
      watch("./app/styles/**/*.css", function(){
            gulp.start("styles");
            });


      });