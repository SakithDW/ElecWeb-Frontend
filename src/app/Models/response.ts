
export interface Response <T>{
  statusCode: number;
  message: string;
  isSuccess: boolean;
  data: T
}
