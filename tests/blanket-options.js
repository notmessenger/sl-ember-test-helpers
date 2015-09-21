/* globals blanket, module */

const options = {
    modulePrefix: 'sl-ember-test-helpers',
    filter: '//.*sl-ember-test-helpers/.*/',
    antifilter: '//.*(tests|template).*/',
    loaderExclusions: [],
    enableCoverage: true,
    modulePattern: '\/(\\w+)',
    branchTracking: true,
    cliOptions: {
        reporters: [ 'json' ],
        autostart: true
    }
};

if ( 'undefined' === typeof exports ) {
    blanket.options( options );
} else {
    module.exports = options;
}