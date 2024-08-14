import CustomError from "../util/CustomError.js"

const handleError = (err, req, res, next) => {
   

    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ msg: 'Invalid JSON format' })
    }

    if (err instanceof CustomError) {
        return res.status(err.status).json({ msg: err.message })
    }

    res.status(500).json({ msg: 'Internal Server Error' })
    console.log(err)
}

export default handleError
