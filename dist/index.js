/** @license Apache-2.0 */

'use strict';

/**
* Discrete uniform distribution variance.
*
* @module @stdlib/stats-base-dists-discrete-uniform-variance
*
* @example
* var variance = require( '@stdlib/stats-base-dists-discrete-uniform-variance' );
*
* var v = variance( 0, 1 );
* // returns ~0.25
*
* v = variance( 4, 12 );
* // returns ~6.667
*
* v = variance( 2, 8 );
* // returns 4.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
