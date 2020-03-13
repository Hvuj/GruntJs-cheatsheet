const sass = require("node-sass");

module.exports = function(grunt) {
	//config
	grunt.initConfig({
		//pass in options to plugin, refrences to files etc
		concat: {
			js: {
				src: ["js/*.js"],
				dest: "build/scripts.js"
			},
			css: {
				src: ["css/*.css"],
				// src: ['css/reset.css', 'css/bootstrap.css', 'css/styles.css'],
				dest: "build/styles.css"
			}
		},

		sass: {
			options: {
				implementation: sass,
				sourceMap: false
			},
			build: {
				files: [
					{
						src: "css/sass/styles.scss",
						dest: "css/styles.css"
					}
				]
			}
		},

		uglify: {
			build: {
				files: [
					{
						src: "build/scripts.js",
						dest: "build/scripts.js"
					}
				]
			}
		}
	});

	//load plugins
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	//register tasks
	// grunt.registerTask("run", function() {
	// 	console.log("i am running");
	// });

	// grunt.registerTask("sleep", function() {
	// 	console.log("i am sleeping");
	// });

	// grunt.registerTask("all", ["run", "sleep"]);

	grunt.registerTask("concat-js", ["concat:js"]);
	grunt.registerTask("concat-css", ["concat:css"]);
};
