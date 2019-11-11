const models = require('../models');
const Boom = require('boom');
module.exports = [
  {
    path: '/user',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.User.findAll()
          .catch((err) => {throw err});
        return result;
      } catch (err) { console.log(err) }
    }
  },
  {
    path: '/user/{id}',
    method: 'GET',
    handler: async function(request) {
      try {
        const result = await models.User.findByPk(request.params.id)
          .catch((err) => {throw err});
        return result;
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/user',
    method: 'POST',
    handler: async function(request) {
      try {
        const nuser = await models.User.build({
          username: request.body.username,
          email: request.body.email,
          first: request.body.first,
          last: request.body.last,
          profilePic: request.body.profilePic,
          phoneNumber: request.body.phoneNumber
        })
          .catch((err) => {throw err});
          return nuser.save();
      } catch (err) {return Boom.notFound();}
    }
  },
  {
    path: '/user/{id}',
    method: ['PUT', 'PATCH'],
    handler: async function(request) {
      try {
        const upDate = await models.User.findByPk(request.params.id)
          .catch((err) => {throw err});
        upDate.update(request.payload.username)
        return upDate.save();
      } catch (err) {return Boom.notFound();};
    }
  },
  {
    path: '/user/{id}',
    method: 'DELETE',
    handler: async function(request) {
      try {
        const duser = await models.User.findByPk(request.params.id)
          .catch((err) => {throw err});
        return duser.destroy();
      } catch (err) {return Boom.notFound();};
    }
  }
];