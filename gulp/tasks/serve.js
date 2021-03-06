/**
 * Serve task
 *
 * Serve dist directory
 * Log url to access from external devices (such as smartphone on the same network)
 * Log on device connection
 *
 */

import browserSync from 'browser-sync';

gulp.task('serve', function() {

  let logLevel = config.verbose ? 'debug' : 'info';

  browserSync({
    server: {
      baseDir: config.dist,
      directory: true
    },
    port: config.port,
    logConnections: true,
    logLevel: logLevel
  });
});
