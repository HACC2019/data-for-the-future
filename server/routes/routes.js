const models = require('../models');
const Boom = require('boom');
module.exports = [
  // Begin association RESTful API
  {
    path: '/user/{id}/project', // userId
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.User.findAll({
          where: {id: request.params.id},
          include: [{
            model: models.Project, 
            as: 'projects',
            include: [{
              model: models.Category,
              as: 'listing'
            }],
            include: [{
              model: models.Indicator,
              as: 'measurement'
            }],
            include: [{
              model: models.Report,
              as: 'report'
            }]
          }]
        })
        return result;
      } catch (err) {console.log(err);return Boom.notFound();}
    }
  },
  {
    path: '/project/{id}/report',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.Project.findAll({
          where: {id: request.params.id},
          include: [
            {
              model: models.Report,
              as: 'report',
              include: [
                {
                  model: models.Indicator,
                  as: 'indicator'
                }
              ]
            }
          ] 
        })
        return result;
      } catch (err) {
        console.log(err)
        return Boom.notFound();
      }
    }
  },
  {
    path: '/project/{id}/categories',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.Category.findAll({
          where: {id: request.params.id},
          include: [{model: models.Project, as: 'origin'}] 
        })
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/project/{id}/indicator',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.Project.findAll({
          where: {id: request.params.id},
          include: [{model: models.Indicator, as: 'measurement'}] 
        })
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/project/{id}/user',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.Project.findAll({
          where: {id: request.params.id},
          include: [{model: models.User, as: 'contributor'}] 
        })
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/categories/{id}/indicator',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.Category.findAll({
          where: {id: request.params.id},
          include: [{model: models.Indicator, as: 'indicator'}]
        })
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/categories/{id}/project',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.Category.findAll({
          where: {id: request.params.id},
          include: [{model: models.Project, as: 'origin'}]
        })
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/report/{id}',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.Report.findAll({
          where: {id: request.params.id},
          include: [{
            model: models.Project, 
            as: 'project'
          }],
          include: [{
            model: models.Indicator,
            as: 'indicator'
          }]
        })
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  // End association RESTful API
  {
    path: '/user',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.User.findAll();
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/user/{id}',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.User.findByPk(request.params.id);
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/user',
    method: 'POST',
    handler: async function(request) {
      try {
        const result = await models.User.build({
          username: request.payload.username,
          email: request.payload.email,
          first: request.payload.first,
          last: request.payload.last,
          profilePic: request.payload.profilePic,
          phoneNumber: request.payload.phoneNumber
        })
        return result.save();
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/user/{id}',
    method: ['PUT', 'PATCH'],
    handler: async function(request) {
      try {
        const result = await models.User.findByPk(request.params.id)
        result.update({
          username: request.payload.username,
          email: request.payload.email,
          first: request.payload.first,
          last: request.payload.last,
          profilePic: request.payload.profilePic,
          phoneNumber: request.payload.phoneNumber
        })
        return result.save();
      } catch (err) {return Boom.notFound();};
    }
  },
  {
    path: '/user/{id}',
    method: 'DELETE',
    handler: async function(request) {
      try {
        const result = await models.User.findByPk(request.params.id);
        return result.destroy();
      } catch (err) {return Boom.notFound();};
    }
  },
  {
    path: '/report',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.Report.findAll();
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  // {
  //   path: '/report/{id}',
  //   method: 'GET',
  //   handler: async function(request) {
  //     try {
  //       const result = await models.Report.findByPk(request.params.id);
  //       return result;
  //     } catch (err) {return Boom.notFound();}
  //   }
  // },
  {
    path: '/report',
    method: 'POST',
    handler: async function(request) {
      try {
        const result = await models.Report.build({
          indicatorId: request.payload.indicatorId,
          projectId: request.payload.projectId,
          metric: request.payload.metric
        })
        return result.save();
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/report/{id}',
    method: ['PUT', 'PATCH'],
    handler: async function(request) {
      try {
        const result = await models.Report.findByPk(request.params.id)
        result.update({
          indicatorId: request.payload.indicatorId,
          projectId: request.payload.projectId,
          metric: request.payload.metric
        })
        return result.save();
      } catch (err) {return Boom.notFound();};
    }
  },
  {
    path: '/report/{id}',
    method: 'DELETE',
    handler: async function(request) {
      try {
        const result = await models.Report.findByPk(request.params.id);
        return result.destroy();
      } catch (err) {return Boom.notFound();};
    }
  },
  {
    path: '/project',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.Project.findAll();
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/project/{id}',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.Project.findByPk(request.params.id);
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/project',
    method: 'POST',
    handler: async function(request) {
      try {
        const result = await models.Project.build({
          name: request.payload.name,
          summary: request.payload.summary,
          longitude: request.payload.longitude,
          latitude: request.payload.latitude,
          endsAt: request.payload.endsAt
        })
        return result.save();
      } catch (err) { console.log(err); return Boom.notFound();}
    }
  },
  {
    path: '/project/{id}',
    method: ['PUT', 'PATCH'],
    handler: async function(request) {
      try {
        const result = await models.Project.findByPk(request.params.id)
        result.update({
          name: request.payload.name,
          summary: request.payload.summary,
          longitude: request.payload.longitude,
          latitude: request.payload.latitude,
          endsAt: request.payload.endsAt
        })
        return result.save();
      } catch (err) {return Boom.notFound();};
    }
  },
  {
    path: '/project/{id}',
    method: 'DELETE',
    handler: async function(request) {
      try {
        const result = await models.Project.findByPk(request.params.id);
        return result.destroy();
      } catch (err) {return Boom.notFound();};
    }
  },
  {
    path: '/indicator',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.Indicator.findAll();
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/indicator/{id}',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.Indicator.findByPk(request.params.id);
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/indicator',
    method: 'POST',
    handler: async function(request) {
      try {
        const result = await models.Indicator.build({
          categoryId: request.payload.categoryId,
          name: request.payload.name,
          unit: request.payload.unit,
          description: request.payload.description
        })
        return result.save();
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/indicator/{id}',
    method: ['PUT', 'PATCH'],
    handler: async function(request) {
      try {
        const result = await models.Indicator.findByPk(request.params.id)
        result.update({
          categoryId: request.payload.categoryId,
          name: request.payload.name,
          unit: request.payload.unit,
          description: request.payload.description
        })
        return result.save();
      } catch (err) {return Boom.notFound();};
    }
  },
  {
    path: '/indicator/{id}',
    method: 'DELETE',
    handler: async function(request) {
      try {
        const result = await models.Indicator.findByPk(request.params.id);
        return result.destroy();
      } catch (err) {return Boom.notFound();};
    }
  },
  {
    path: '/categories',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.Category.findAll();
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/categories/{id}',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.Category.findByPk(request.params.id);
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/categories',
    method: 'POST',
    handler: async function(request) {
      try {
        const result = await models.Category.build({
          name: request.payload.name,
          icon: request.payload.icon,
          description: request.payload.description
        })
        return result.save();
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/categories/{id}',
    method: ['PUT', 'PATCH'],
    handler: async function(request) {
      try {
        const result = await models.Category.findByPk(request.params.id)
        result.update({
          name: request.payload.name,
          icon: request.payload.icon,
          description: request.payload.description
        })
        return result.save();
      } catch (err) {return Boom.notFound();};
    }
  },
  {
    path: '/categories/{id}',
    method: 'DELETE',
    handler: async function(request) {
      try {
        const result = await models.Category.findByPk(request.params.id);
        return result.destroy();
      } catch (err) {return Boom.notFound();};
    }
  },
];