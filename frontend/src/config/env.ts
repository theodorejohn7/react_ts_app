const env = {
  development: {
    BASE_URL: 'https://jsonplaceholder.typicode.com/',
    USER_NAME: 'test',
    PASSWORD: '123123'
  },
  production: {
    BASE_URL: 'https://jsonplaceholder.typicode.com/',
    USER_NAME: 'test',
    PASSWORD: '123123'
  },
  test: {
    BASE_URL: 'https://jsonplaceholder.typicode.com/',
    USER_NAME: 'test',
    PASSWORD: '123123'
  },
};

export const env_var = env[process.env.NODE_ENV];