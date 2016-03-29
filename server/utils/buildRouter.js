const buildRouter = (router) => {

  // add router here
  router.use('*', (req, res, next) => {
    console.log(` | INFO: Reaching ${req.url} endpoint`);
    next();
  });
  
  return router;
};

module.exports = buildRouter;
