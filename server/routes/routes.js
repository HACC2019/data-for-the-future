const models = require('./models');

module.exports = [
  {
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    path: '/user',
    handler: (request, h) => {
      switch (request.method) {
        case 'get':
          models.findByPk(request.params.id)
          .then((result) => request.json(result));
        case 'post':
          models.create({
              username: request.body.username,
              email: request.body.email,
              first: request.body.first,
              last: request.body.last,
              profilePic: request.body.profilePic,
              phoneNumber: request.body.phoneNumber
            })
            .then((result) => request.json(result));
        case 'patch':
          models.update({
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
            .then((result)=>request.json(result));
        case 'delete':
          models.destroy(request.params.id)
          .then((result)=>request.json(result));
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
          models.findByPk(request.params.id)
          .then((result) => request.json(result));
        case 'post':
          models.create({
              indicatorID: request.body.indicatorID,
              projectID: request.body.projectID,
              metric: request.body.metric
            })
            .then((result) => request.json(result));
        case 'patch':
          models.update({
            indicatorID: request.body.indicatorID,
            projectID: request.body.projectID,
            metric: request.body.metric
          },
            {
              where: {
                id: request.params.id
              }
            })
            .then((result) => request.json(result));
        case 'delete':
          models.destroy(request.params.id)
          .then((result) => request.json(result));
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
          models.findByPk(request.params.id)
          .then((result) => request.json(result));
        case 'post':
          models.create({
              name: request.body.name,
              summary: request.body.summary,
              longitude: request.body.longitude,
              latitude: request.body.latitude,
              endsDate: request.body.endDate
            })
            .then((result)=>request.json(result));
        case 'patch':
          models.update({
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
            .then((result)=>request.json(result));
        case 'delete':
          models.destroy(request.params.id)
          .then((result)=>request.json(result));
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
          models.findByPk(request.params.id)
          .then((result) => request.json(result));
        case 'post':
          models.create({
              userID: request.body.userID,
              projectID: request.body.projectID
            })
            .then((result)=>request.json(result));
        case 'patch':
          models.update({
            userID: request.body.userID,
            projectID: request.body.projectID
            },
            {
              where: {
                id: request.params.id
              }
            })
            .then((result)=>request.json(result));
        case 'delete':
          models.destroy(request.params.id)
          .then((result)=>request.json(result));
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
          models.findByPk(request.params.id)
          .then((result) => request.json(result));
        case 'post':
          models.create({
              projectID: request.body.projectID,
              email: request.body.indicatorID,
              metricMeasurement: request.body.metricMeasurement
            })
            .then((result)=>request.json(result));
        case 'patch':
          models.update({
              projectID: request.body.projectID,
              email: request.body.indicatorID,
              metricMeasurement: request.body.metricMeasurement
            },
            {
              where: {
                id: request.params.id
              }
            })
            .then((result)=>request.json(result));
        case 'delete':
          models.destroy(request.params.id)
          .then((result)=>request.json(result));
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
          models.findByPk(request.params.id)
          .then((result) => request.json(result));
        case 'post':
          models.create({
              projectID: request.body.projectID,
              categoryID: request.body.categoryID
            })
            .then((result)=>request.json(result));
        case 'patch':
          models.update({
              projectID: request.body.projectID,
              categoryID: request.body.categoryID
            },
            {
              where: {
                id: request.params.id
              }
            })
            .then((result)=>request.json(result));
        case 'delete':
          models.destroy(request.params.id)
          .then((result)=>request.json(result));
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
          models.findByPk(request.params.id)
          .then((result) => request.json(result));
        case 'post':
          models.create({
              indicatorID: request.body.indicatorID,
              indicatorName: request.body.indicatorName,
              unitOfMeasurement: request.body.unitOfMeasurement
            })
            .then((result)=>request.json(result));
        case 'patch':
          models.update({
            indicatorID: request.body.indicatorID,
            indicatorName: request.body.indicatorName,
            unitOfMeasurement: request.body.unitOfMeasurement            },
            {
              where: {
                id: request.params.id
              }
            })
            .then((result)=>request.json(result));
        case 'delete':
          models.destroy(request.params.id)
          .then((result)=>request.json(result));
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
          models.findByPk(request.params.id)
          .then((result) => request.json(result));
        case 'post':
          models.create({
              name: request.body.name,
              icon: request.body.icon,
              description: request.body.description
            })
            .then((result)=>request.json(result));
        case 'patch':
          models.update({
            name: request.body.name,
            icon: request.body.icon,
            description: request.body.description
            },
            {
              where: {
                id: request.params.id
              }
            })
            .then((result)=>request.json(result));
        case 'delete':
          models.destroy(request.params.id)
          .then((result)=>request.json(result));
      }
      return h.response('success');
    }
  }
]