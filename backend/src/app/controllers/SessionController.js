import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import auth from '../../config/auth';
import User from '../models/User';
import File from '../models/File';

class SessionController {
    async store(request, response) {
        const schema = Yup.object().shape({
            email: Yup.string().required(),
            password: Yup.string().required(),
        });

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: 'Validation fails' });
        }

        const { email, password } = request.body;

        const user = await User.findOne({
            where: { email },
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['id', 'path', 'url'],
                },
            ],
        });

        if (!user) {
            response.status(401).json({ error: 'User not found' });
        }

        if (!(await user.checkPassword(password))) {
            response.status(401).json({ error: 'Passoword does not match' });
        }

        const { id, name, avatar, provider } = user;

        return response.json({
            user: {
                id,
                name,
                email,
                provider,
                avatar,
            },
            token: jwt.sign({ id }, auth.secret, {
                expiresIn: auth.expiresIn,
            }),
        });
    }
}

export default new SessionController();
