import * as Yup from 'yup';
import { Op } from 'sequelize';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
    async index(request, response) {
        const { page = 1, q = '' } = request.query;
        const deliverymans = await Deliveryman.findAndCountAll({
            where: {
                deleted_at: null,
                name: {
                    [Op.substring]: q,
                },
            },
            order: ['name'],
            limit: 10,
            offset: (page - 1) * 10,
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['path', 'url', 'name'],
                },
            ],
        });

        return response.json(deliverymans);
    }

    async show(request, response) {
        const { id } = request.params;
        const deliveryman = await Deliveryman.findByPk(id, {
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['path', 'url', 'name'],
                },
            ],
        });

        if (!deliveryman) {
            return response.status(400).json('Deliveryman does not exists');
        }

        return response.json(deliveryman);
    }

    async store(request, response) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            avatar_id: Yup.number(),
        });

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: 'Validation fails' });
        }

        const deliverymanExists = await Deliveryman.findOne({
            where: { email: request.body.email },
        });

        if (deliverymanExists) {
            return response
                .status(400)
                .json({ error: 'Deliveryman already exists' });
        }

        const deliveryman = await Deliveryman.create(request.body);

        return response.json(deliveryman);
    }

    async update(request, response) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string(),
            avatar_id: Yup.number(),
        });

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: 'Validation fails' });
        }

        const { email } = request.body;

        const deliveryman = await Deliveryman.findByPk(request.params.id);

        if (email && email !== deliveryman.email) {
            const deliverymanExists = await Deliveryman.findOne({
                where: { email: request.body.email },
            });

            if (deliverymanExists) {
                return response
                    .status(400)
                    .json({ error: 'Deliveryman already exists' });
            }
        }

        const { id, name, avatar_id } = await deliveryman.update(request.body);

        return response.json({ id, name, email, avatar_id });
    }

    async delete(request, response) {
        const deliveryman = await Deliveryman.findByPk(request.params.id, {
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['path', 'url', 'name'],
                },
            ],
        });

        deliveryman.deleted_at = new Date();
        await deliveryman.save();

        return response.json(deliveryman);
    }
}

export default new DeliverymanController();
