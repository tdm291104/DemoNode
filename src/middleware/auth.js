import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

function authenticateToken(req, res, next) {
  const authHeader = req.header('Authorization');
  
  const token = authHeader;
  

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    
    if (err) return res.sendStatus(403);
    
    req.user = user;
    next();
  });
}

export default authenticateToken;
