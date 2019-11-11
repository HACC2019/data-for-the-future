const models = require('../models');

module.exports = [
  {
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    path: '/user',
    handler: (request, h) => {
      switch (request.method) {
        case 'get':
          models.User.findByPk(request.params.id)
          .then((result) => h.response(result));
        case 'post':
          models.User.create({
              username: request.body.username,
              email: request.body.email,
              first: request.body.first,
              last: request.body.last,
              profilePic: request.body.profilePic,
              phoneNumber: request.body.phoneNumber
            })
            .then((result) => h.response(result));
        case 'patch':
          models.User.update({
              username: request.body.username,
              email: request.body.email,
              first: request.body.first,
              last: request.body.last,
              profilePic: request.body.profilePic,
              phoneNumber: request.body.phoneNumber
            },
            {
              where: {
                id: request.params.id
              }
            })
            .then((result)=>h.response(result));
        case 'delete':
          models.User.destroy(request.params.id)
          .then((result)=>h.response(result));
      }
      return h.response('success');
    }
  },
  {
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    path: '/report',
    handler: (request, h) => {
      switch (request.method) {
        case 'get':
          models.Report.findByPk(request.params.id)
          .then((result) => h.response(result));
        case 'post':
          models.Report.create({
              indicatorID: request.body.indicatorID,
              projectID: request.body.projectID,
              metric: request.body.metric
            })
            .then((result) => h.response(result));
        case 'patch':
          models.Report.update({
            indicatorID: request.body.indicatorID,
            projectID: request.body.projectID,
            metric: request.body.metric
          },
            {
              where: {
                id: request.params.id
              }
            })
            .then((result) => h.response(result));
        case 'delete':
          models.Report.destroy(request.params.id)
          .then((result) => h.response(result));
      }
      return h.response('success');
    }
  },
  {
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    path: '/project',
    handler: (request, h) => {
      switch (request.method) {
        case 'get':
          models.Project.findByPk(request.params.id)
          .then((result) => h.response(result));
        case 'post':
          models.Project.create({
              name: request.body.name,
              summary: request.body.summary,
              longitude: request.body.longitude,
              latitude: request.body.latitude,
              endsDate: request.body.endDate
            })
            .then((result)=>h.response(result));
        case 'patch':
          models.Project.update({
              name: request.body.name,
              summary: request.body.summary,
              longitude: request.body.longitude,
              latitude: request.body.latitude,
              endsDate: request.body.endDate            },
            {
              where: {
                id: request.params.id
              }
            })
            .then((result)=>h.response(result));
        case 'delete':
          models.Project.destroy(request.params.id)
          .then((result)=>h.response(result));
      }
      return h.response('success');
    }
  },
  {
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    path: '/project-users',
    handler: (request, h) => {
      switch (request.method) {
        case 'get':
          models.ProjectUser.findByPk(request.params.id)
          .then((result) => h.response(result));
        case 'post':
          models.ProjectUser.create({
              userID: request.body.userID,
              projectID: request.body.projectID
            })
            .then((result)=>h.response(result));
        case 'patch':
          models.ProjectUser.update({
            userID: request.body.userID,
            projectID: request.body.projectID
            },
            {
              where: {
                id: request.params.id
              }
            })
            .then((result)=>h.response(result));
        case 'delete':
          models.ProjectUser.destroy(request.params.id)
          .then((result)=>h.response(result));
      }
      return h.response('success');
    }
  },
  {
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    path: '/project-indicators',
    handler: (request, h) => {
      switch (request.method) {
        case 'get':
          models.IndicatorProject.findByPk(request.params.id)
          .then((result) => h.response(result));
        case 'post':
          models.IndicatorProject.create({
              projectID: request.body.projectID,
              email: request.body.indicatorID,
              metricMeasurement: request.body.metricMeasurement
            })
            .then((result)=>h.response(result));
        case 'patch':
          models.IndicatorProject.update({
              projectID: request.body.projectID,
              email: request.body.indicatorID,
              metricMeasurement: request.body.metricMeasurement
            },
            {
              where: {
                id: request.params.id
              }
            })
            .then((result)=>h.response(result));
        case 'delete':
          models.IndicatorProject.destroy(request.params.id)
          .then((result)=>h.response(result));
      }
      return h.response('success');
    }
  },
  {
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    path: '/project-categories',
    handler: (request, h) => {
      switch (request.method) {
        case 'get':
          models.ProjectCategory.findByPk(request.params.id)
          .then((result) => h.response(result));
        case 'post':
          models.ProjectCategory.create({
              projectID: request.body.projectID,
              categoryID: request.body.categoryID
            })
            .then((result)=>h.response(result));
        case 'patch':
          models.ProjectCategory.update({
              projectID: request.body.projectID,
              categoryID: request.body.categoryID
            },
            {
              where: {
                id: request.params.id
              }
            })
            .then((result)=>h.response(result));
        case 'delete':
          models.ProjectCategory.destroy(request.params.id)
          .then((result)=>h.response(result));
      }
      return h.response('success');
    }
  },
  {
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    path: '/indicator',
    handler: (request, h) => {
      switch (request.method) {
        case 'get':
          models.Indicator.findByPk(request.params.id)
          .then((result) => h.response(result));
        case 'post':
          models.Indicator.create({
              categoryID: request.body.categoryID,
              name: request.body.name,
              description: request.body.description,
              unit: request.body.unit
            })
            .then((result)=>h.response(result));
        case 'patch':
          models.Indicator.update({
            categoryID: request.body.categoryID,
            name: request.body.name,
            description: request.body.description,
            unit: request.body.unit            },
            {
              where: {
                id: request.params.id
              }
            })
            .then((result)=>h.response(result));
        case 'delete':
          models.Indicator.destroy(request.params.id)
          .then((result)=>h.response(result));
      }
      return h.response('success');
    }
  },
  {
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    path: '/categories',
    handler: (request, h) => {
      switch (request.method) {
        case 'get':
          models.Category.findByPk(request.params.id)
          .then((result) => h.response(result));
        case 'post':
          models.Category.create({
              name: request.body.name,
              icon: request.body.icon,
              description: request.body.description
            })
            .then((result)=>h.response(result));
        case 'patch':
          models.Category.update({
            name: request.body.name,
            icon: request.body.icon,
            description: request.body.description
            },
            {
              where: {
                id: request.params.id
              }
            })
            .then((result)=>h.response(result));
        case 'delete':
          models.Category.destroy(request.params.id)
          .then((result)=>h.response(result));
      }
      return h.response('success');
    }
  }
]