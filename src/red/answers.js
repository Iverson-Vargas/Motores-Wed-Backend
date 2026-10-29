

export const success = (req, res , message, status) => {
    const statusCode = status || 200
    const messageOk = message || ''
    res.status(statusCode).json(
        {
            error: false,
            status: statusCode,
            message: messageOk
        }
    )
}

export const error = (req, res , message, status) => {
    const statusCode = status || 500
    const messageError = message || 'Internal Error'
    res.status(statusCode).json(
        {
            error: true,
            status: statusCode,
            message: messageError
        }
    )
}

export default {
    success,
    error
};