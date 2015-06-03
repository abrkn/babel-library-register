#!/usr/bin/env node
var path = require('path');
var fs = require('fs');

var babelCoreUtil = require('babel/node_modules/babel-core/lib/babel/util');

/**
 * Locate the package.json of the package to which the specified file name
 * belongs. Returns false if that package has a dependency on babel.
 */
babelCoreUtil.shouldIgnore = function(fn) {
    var dir = path.dirname(fn);
    var packageFn;

    do {
        packageFn = path.join(dir, 'package.json');
        if (fs.existsSync(packageFn)) {
            var package = require(packageFn);
            if (!package.dependencies) { return true; }
            return package.dependencies.babel === undefined;
        }
        dir = path.join(dir, '..');
    } while (true);
};

require('babel/register')({
    ignore: false,
    stage: 0,
    only: /this-will-be-ignored/
});
