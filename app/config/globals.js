/**
 * globals.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright 2016, Harish Anchu. All rights reserved.
 * @license Licensed under MIT
 */


var config = {

    /*
     |--------------------------------------------------------------------------
     | Quorra app object
     |--------------------------------------------------------------------------
     |
     | Expose the Positron instance representing your Quorra app. If this is
     | disabled, you can still get access require('positron')
     |
     */

    'app': true,

    /*
     |--------------------------------------------------------------------------
     | Database models
     |--------------------------------------------------------------------------
     |
     | Expose each of your app's models as global variables (using their
     | "globalId"). E.g. a model defined in app/models/User.js would have a
     | globalId of User by default. If this is disabled, you can still access
     | your models via app.models.*.
     |
     */

    'models': true
};

module.exports = config;