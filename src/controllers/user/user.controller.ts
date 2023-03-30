import { Response, Request, NextFunction } from 'express';
import { HTTP_INTERNAL_SERVER_ERROR } from '../../constants/http-status';
import { getErrorMessage } from '../../utils/error-message';
import * as UserServices from '../../services/user/user.service';
export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        // check id
        !id && res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error: 'id is required' }); 
        const user = await UserServices.getUserById(id);
        res.status(HTTP_INTERNAL_SERVER_ERROR).json(user);
    } catch (error) {
        res.status(HTTP_INTERNAL_SERVER_ERROR).json({ error: getErrorMessage(error) });
    }
};
