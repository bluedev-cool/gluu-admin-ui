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

import ApiClient from '../ApiClient';

/**
 * The SectorIdentifier model module.
 * @module model/SectorIdentifier
 * @version 1.0.0
 */
class SectorIdentifier {
    /**
     * Constructs a new <code>SectorIdentifier</code>.
     * Sector Identifier Details.
     * @alias module:model/SectorIdentifier
     */
    constructor() { 
        
        SectorIdentifier.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SectorIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SectorIdentifier} obj Optional instance to populate.
     * @return {module:model/SectorIdentifier} The populated <code>SectorIdentifier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SectorIdentifier();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('redirectUris')) {
                obj['redirectUris'] = ApiClient.convertToType(data['redirectUris'], ['String']);
            }
            if (data.hasOwnProperty('clientIds')) {
                obj['clientIds'] = ApiClient.convertToType(data['clientIds'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * XRI i-number. Sector Identifier to uniquely identify the sector.
 * @member {String} id
 */
SectorIdentifier.prototype['id'] = undefined;

/**
 * A human-readable string describing the sector.
 * @member {String} description
 */
SectorIdentifier.prototype['description'] = undefined;

/**
 * Redirection URI values used by the Client. One of these registered Redirection URI values must exactly match the redirect_uri parameter value used in each Authorization Request
 * @member {Array.<String>} redirectUris
 */
SectorIdentifier.prototype['redirectUris'] = undefined;

/**
 * List of OAuth 2.0 Client Identifier valid at the Authorization Server.
 * @member {Array.<String>} clientIds
 */
SectorIdentifier.prototype['clientIds'] = undefined;






export default SectorIdentifier;
