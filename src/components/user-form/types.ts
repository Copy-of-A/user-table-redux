import { FormInstance } from 'antd'
import { IUser } from '../../models'

export interface IUserFormProps {
  user: IUser,
  form:  FormInstance<any>,
}
