export const env = {
    dev: {
        host: {
            reqres: 'https://reqres.in/api/'
        }
    }
}

const DEV = 'dev'

export const config = () => {
    switch (__ENV.STAGE) {
    case DEV:
      return env.dev
    default:
      throw `Stage ${__ENV.STAGE} not found`
    }
  }