import { Request, Response, NextFunction } from 'express';

function authenticate(req: Request, res: Response, next: NextFunction): void {
  // TODO: Implement Aouth logic with JWT
  const authenticated = true;

  // Not auth
  if (!authenticated) {
    res.status(401).json({ error: 'Unauthorized' });
    return; // End Auth
  }

  // If authentication succeeds, call next() to proceed to the next middleware or route handler
  next();
}

export default {
  authenticate,
};
