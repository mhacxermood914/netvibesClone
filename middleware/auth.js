module.exports = {
    // if user is authenticated the redirected to next page else redirect to login page
    ensureAuth: function (req, res, next) {
        if (req.cookies.user) {
            next()
        } else {
            res.redirect('/')
        }
    },
    ensureAdminAuth: function (req, res, next) {
        if (req.cookies.admin) {
            next()
        } else {
            res.redirect('/admin/login')
        }
    },
    // if user is authenticated and going to login page then redirected to home page if not authenticated redirected to login page  .
    ensureGuest: function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/log');
        }
    },
}