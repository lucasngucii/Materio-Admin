import { UserModel } from '../../models/User/index';


export const getUserById = async (id: string) => {
    try {
        const userFound = await UserModel.findById(id);
    } catch (error) {
        throw error
    }
}