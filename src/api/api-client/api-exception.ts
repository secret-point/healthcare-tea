export interface ApiException {
  status: number;
  code: string;
  message: string | null;
  payload: unknown;
}
export const createException = (
  exception?: ApiException | unknown,
): ApiException => {
  if (exception) {
    if ((exception as ApiException).code !== undefined) {
      const error = exception as ApiException;
      if (!error.payload) {
        error.payload = null;
      }
      return error;
    }
  }
  return {
    status: 500,
    code: 'UNKNOWN',
    message: null,
    payload: null,
  };
};
