var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");

    // Create task to Auto-Prefix css
gulp.task("sty", function(){
    gulp.src("css/01-hand.css")
        .pipe(autoprefixer())
        .pipe(gulp.dest("css/build"));
});


    // Create the watch taskt
gulp.task("ojo", function(){
    gulp.watch("css/01-hand.css", ["sty"]);
});
