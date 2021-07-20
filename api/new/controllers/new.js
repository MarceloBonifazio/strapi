'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */


 module.exports = {
   /**
    * Retrieve records.
    *
    * @return {Array}
    */
 
   async find(ctx) {
     let entities;
     if (ctx.query._q) {
       entities = await strapi.services.new.search(ctx.query);
     } else {
       entities = await strapi.services.new.find(ctx.query);
     }

     const data = await strapi.config.functions.fakeJson();

     console.log(data) // to do add to model
 
     return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.new }));
   },
 };
  