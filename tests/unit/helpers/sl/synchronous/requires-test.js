import Ember from 'ember';
import { test } from 'ember-qunit';
import requires from '../../../../helpers/sl/synchronous/requires';

module( 'Unit | Helpers | sl/synchronous/requires' );

test( 'it exists', function( assert ) {
    assert.ok(
        requires,
        'it exists'
    );
});

test( 'First argument must be a function', function( assert ) {

    // Number
    let assertionThrown = false;

    try {
        requires(
            12,
            false
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'First parameter was a number'
    );

    // String
    assertionThrown = false;

    try {
        requires(
            'testString',
            false
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'First parameter was a string'
    );

    // Array
    assertionThrown = false;

    try {
        requires(
            [],
            false
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'First parameter was an array'
    );

    // Object
    assertionThrown = false;

    try {
        requires(
            {},
            false
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'First parameter was an object'
    );

    // Function
    assertionThrown = false;

    try {
        requires(
            function() {},
            false
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'First parameter was a function'
    );

    // Undefined
    assertionThrown = false;

    try {
        requires(
            undefined,
            false
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'First parameter was undefined'
    );

    // Boolean
    assertionThrown = false;

    try {
        requires(
            true,
            false
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'First parameter was a boolean'
    );

    // Null
    assertionThrown = false;

    try {
        requires(
            null,
            false
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'First parameter was null'
    );

});

test( 'Second argument must be an array', function( assert ) {

    // Number
    let assertionThrown = false;

    try {
        requires(
            12,
            12
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Second parameter was a number'
    );

    // String
    assertionThrown = false;

    try {
        requires(
            'testString',
            'testString'
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Second parameter was a string'
    );

    // Array
    assertionThrown = false;

    try {
        requires(
            [],
            []
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Second parameter was an array'
    );

    // Object
    assertionThrown = false;

    try {
        requires(
            {},
            {}
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Second parameter was an object'
    );

    // Function
    assertionThrown = false;

    try {
        requires(
            function() {},
            function() {}
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Second parameter was a function'
    );

    // Undefined
    assertionThrown = false;

    try {
        requires(
            undefined,
            undefined
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Second parameter was undefined'
    );

    // Boolean
    assertionThrown = false;

    try {
        requires(
            true,
            false
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Second parameter was a boolean'
    );

    // Null
    assertionThrown = false;

    try {
        requires(
            null,
            null
        );
    } catch( error ) {
        assertionThrown = true;
    }

    assert.ok(
        assertionThrown,
        'Second parameter was null'
    );

});

test( 'Return type', function( assert ) {
    const testFunction = function( first ) {
        Ember.assert(
            'Test argument must be a function or boolean',
            'function' === Ember.typeOf( first ) ||
            'boolean' === Ember.typeOf( first )
        );
    };

    const testDefinition = requires(
        testFunction,
        [ 'function', 'boolean' ]
    );

    assert.deepEqual(
        testDefinition,
        { requires: true, messages: '' },
        'Returns expected object'
    );
});

test( 'Functions as expected', function( assert ) {
    const testFunction = function( first ) {
        Ember.assert(
            'Test argument must be a function or boolean',
            'function' === Ember.typeOf( first ) ||
            'boolean' === Ember.typeOf( first )
        );
    };

    let testDefinition = requires(
        testFunction,
        [ 'function', 'boolean' ]
    );
    assert.ok(
        testDefinition.requires,
        'Functioned as expected when passed desired argument types: ' + test.messages
    );

    testDefinition = requires(
        testFunction,
        [ 'function', 'boolean', 'string' ]
    );
    assert.ok(
        !testDefinition.requires,
        'Functioned as expected when passed undesired argument types: ' + test.messages
    );
});
