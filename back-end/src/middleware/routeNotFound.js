
export const routeNotFound = (req, res) => {
    res.status(404).json({msg:'route not afound'})
}