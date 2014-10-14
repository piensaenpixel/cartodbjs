var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');


gulp.task('default', function(){
  gulp.src(['./svgs/*.svg'])
    
    .pipe(iconfontCss({
      fontName: 'cartodbComponent',
      path: 'templates/_icons.css',
      targetPath: '../../www/css/_icons.css',
      fontPath: '../../www/fonts/'
    }))

    .pipe(iconfont({
      fontName: 'cartodbComponent', // required
      appendCodepoints: true // recommended option
    }))

    .pipe(gulp.dest('www/fonts/'));
});
