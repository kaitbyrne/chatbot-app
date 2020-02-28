
export default function (error, defaultMessage) {
  if (error) {
    if (error.response !== undefined && error.response.data !== undefined
      && error.response.data.message !== undefined) {
        return error.response.data.message;
    }
  }
  return defaultMessage;
}
