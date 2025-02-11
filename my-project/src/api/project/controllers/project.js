'use strict';

/**
 * project controller
 */


const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::project.project", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    // Vérifie si l'ID est un nombre (recherche par ID) ou un slug
    const query = isNaN(id)
      ? { slug: id } // Recherche par slug
      : { id }; // Recherche par ID

    const entity = await strapi.db.query("api::project.project").findOne({
      where: query,
    });

    if (!entity) {
      return ctx.notFound("Project not found");
    }

    return entity;
  },
}));
