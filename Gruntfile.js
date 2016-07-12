'use strict';

module.exports = function(grunt) {

	// load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-notify');

	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'app/bower.min.js': [
                        'app/bower_components/jquery/dist/jquery.min.js',
                        'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
                        'app/bower_components/angular/angular.js',
                        'app/bower_components/angular-ui-router/release/angular-ui-router.min.js'
					]
				}
			}
		},
        // "less"-task configuration
        less: {
            // production config is also available
            development: {
                options: {
                    sourceMapFilename: 'app.min.css.map', // otherwise, shit happens
                    compress: true,
                    sourceMap: true
                },
                files: {
                    // compilation.css  :  source.less
                    'app/app.min.css': 'app/app.less'
                }
            },
        },
		watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            less: {
            	files: ['**/*.less'],
            	tasks: ['less'],
				options: {
					// Start a live reload server on the default port 35729
					livereload: false,
				}
            },
			livereload: {
				// Here we watch the files the sass task will compile to
				// These files are sent to the live reload server after sass compiles to them
				options: { livereload: false },
				files: ['**/*.html']
			},
        },
        connect: {
		    server: {
		      options: {
		        port: 8888,
		        base: 'app'
		      }
		    }
		},
		notify: {
			watch: {
				options: {
				    title: 'Task Complete',  // optional
				    message: 'Task completed!', //required
                    duration: 1
				}
		  	},
			less: {
				options: {
				    title: 'Task Complete',  // optional
				    message: 'Task completed!', //required
                    duration: 1
				}
		  	}
	  	}
	});

  	// Default task(s).
	grunt.registerTask('default', ['connect','less','watch']);
	grunt.registerTask('styles', ['connect','less']);
	grunt.registerTask('bower', ['uglify']);


};
