import {QueryClient} from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // TODO: errorHandler
      onError: error => console.log('error', error),
    },
  },
});
