/**
 * jans-config-api
 * jans-config-api - Authorization services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xxx@gluu.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.JansConfigApi);
  }
}(this, function(expect, JansConfigApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JansConfigApi.SectorIdentifier();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SectorIdentifier', function() {
    it('should create an instance of SectorIdentifier', function() {
      // uncomment below and update the code to test SectorIdentifier
      //var instane = new JansConfigApi.SectorIdentifier();
      //expect(instance).to.be.a(JansConfigApi.SectorIdentifier);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new JansConfigApi.SectorIdentifier();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new JansConfigApi.SectorIdentifier();
      //expect(instance).to.be();
    });

    it('should have the property redirectUris (base name: "redirectUris")', function() {
      // uncomment below and update the code to test the property redirectUris
      //var instane = new JansConfigApi.SectorIdentifier();
      //expect(instance).to.be();
    });

    it('should have the property clientIds (base name: "clientIds")', function() {
      // uncomment below and update the code to test the property clientIds
      //var instane = new JansConfigApi.SectorIdentifier();
      //expect(instance).to.be();
    });

  });

}));
