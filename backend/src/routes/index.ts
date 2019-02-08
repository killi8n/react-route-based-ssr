import { Router, Response, Request } from 'express';
import Repo, { RepoType } from '../models/Repo';

const router = Router();

router.get('/thumbnail', (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      thumbnail: 'https://avatars1.githubusercontent.com/u/47375524?s=460&v=4'
    });
  } catch (e) {
    return res.status(500).json({
      error: 'internal server error'
    });
  }
});

router.get('/repos', (req: Request, res: Response) => {
  const repos: RepoType[] = [
    new Repo('beginners-guide-to-spring-cloud', 'https://github.com/evals4dead/beginners-guide-to-spring-cloud'),
    new Repo('typescript-nodejs-sample', 'https://github.com/evals4dead/typescript-nodejs-sample'),
    new Repo('react-routeBasedSsr', 'https://github.com/evals4dead/react-routeBasedSsr')
  ];
  try {
    return res.status(200).json({
      repos
    });
  } catch (e) {
    return res.status(500).json({
      error: 'internal server error'
    });
  }
});

export default router;
