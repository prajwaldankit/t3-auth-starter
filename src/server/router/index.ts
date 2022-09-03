// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { postRouter } from './post';
import { exampleRouter } from './example';
import { protectedExampleRouter } from './protected-example-router';

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('post.', postRouter)
	.merge('example.', exampleRouter)
	.merge('question.', protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
