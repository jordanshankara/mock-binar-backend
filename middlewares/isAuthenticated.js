module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    
    res.json({ message: "Silakan login terlebih dahulu" });
}