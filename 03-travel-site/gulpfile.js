var gulp = require("gulp");
var watch = require("gulp-watch");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssvars = require("postcss-simple-vars");
var nested = require("postcss-nested");

gulp.task("default", function() {console.log("Hello from GULP - you just created a Gulp Task.");});
gulp.task("html", function(){ console.log("Imagine someting useful beeng done to your HTML here.");});


            // This task is modify to create a temp folder with a copy css. file
gulp.task("styles", function(){
    return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"));
});



gulp.task("watch", function(){

      watch("./app/index.html", function(){ gulp.start("html");} );


            // watching the folder styles, (** = any future subfolders), (*.css = any file with an extenscion ".css")
      watch("./app/assets/styles/**/*.css", function(){
            gulp.start("styles");
            });


      });
