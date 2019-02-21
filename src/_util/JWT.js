import jwt from 'jsonwebtoken'
const checkToken = (token) => {
    let auth = jwt.verify(token)
    console.log(auth)
}