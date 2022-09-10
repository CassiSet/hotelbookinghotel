import { getSession } from 'next-auth/react';

export const isUserAuth = async (req, res, next) => {
  const session = await getSession({ req });
  if (!session) {
    throw new Error(
      'desolé, pour poussuivre cette action vous devez vous connecter'
    );
  }
  req.user = session.user;
  next();
};
