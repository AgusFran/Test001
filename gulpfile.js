var gulp = require("gulp"),
    bsync = require("browser-sync").create(),   //setup localhost & sync
    sass = require("gulp-sass"),       //create gulp saas
    apref = require("autoprefixer"),
    gpcss = require("gulp-postcss"),
    isUp = false;

gulp.task("serve", function() {
    isUp = true;
    return bsync.init({
        server: {
            baseDir: ''
        },
        online: false
    });
});

gulp.task("run", ["serve", "check"], function() {
    gulp.watch("*.html").on("change", bsync.reload);
    gulp.watch("js/*.js").on("change", bsync.reload);
    gulp.watch("sass/*.scss", ["sass"]);
    gulp.watch("css/*.css").on("change", bsync.reload);

});

gulp.task("check", function() {
    if (isUp)
        console.log("The server is online");
    else
        console.log("The server is offline");
});

gulp.task("sass", function() {
    console.log("SASS is online")
    return gulp.src("sass/styles.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gpcss([apref("last 2 versions")])) 
    .pipe(gulp.dest("css/"))
    .pipe(bsync.reload({
        stream: true
    }));
});
