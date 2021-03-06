/**
 * Load tasks
 */

import fs from 'fs';

import gulp from 'gulp';
import config from './config';
import pkg from '../package.json';

// Export globals
global.gulp = gulp;
global.config = config;
global.pkg = pkg;

let tasks = fs.readdirSync('./gulp/tasks/');
tasks.forEach(function(task) {
	require(`./tasks/${task}`);
});
