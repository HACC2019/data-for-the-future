module.exports = [
  {
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    path: '/project',
    handler: (request, h) => {
      switch (request.method) {
        case 'get':
        
        case 'post':

        case 'patch':

        case 'delete':

      }

      return h.response('success');
    }
  },
  {
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    path: '/indicators',
    handler: (request, h) => {
      switch (request.method) {
        case 'get':
        
        case 'post':

        case 'patch':

        case 'delete':

      }

      return h.response('success');
    }
  },
]
