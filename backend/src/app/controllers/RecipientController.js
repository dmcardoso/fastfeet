import * as Yup from 'yup';
import { Op } from 'sequelize';
import Recipient from '../models/Recipient';

class RecipientController {
    async index(request, response) {
        const { page = 1, q = '' } = request.query;
        const recipients = await Recipient.findAndCountAll({
            order: ['name'],
            limit: 10,
            offset: (page - 1) * 10,
            where: {
                deleted_at: null,
                name: {
                    [Op.substring]: q,
                },
            },
        });

        return response.json(recipients);
    }

    async show(request, response) {
        const { id } = request.params;
        const recipient = await Recipient.findByPk(id);

        if (!recipient) {
            return response.status(400).json('Recipient does not exists');
        }

        return response.json(recipient);
    }

    async store(request, response) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            street: Yup.string().required(),
            number: Yup.string().required(),
            complement: Yup.string(),
            state: Yup.string().required(),
            city: Yup.string().required(),
            cep: Yup.string().required(),
        });

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: 'Validation fails' });
        }

        const recipientExists = await Recipient.findOne({
            where: { name: request.body.name },
        });

        if (recipientExists) {
            return response
                .status(400)
                .json({ error: 'Recipient already exists' });
        }
        const recipient = await Recipient.create(request.body);

        return response.json(recipient);
    }

    async update(request, response) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            street: Yup.string(),
            number: Yup.string(),
            complement: Yup.string(),
            state: Yup.string(),
            city: Yup.string(),
            cep: Yup.string(),
        });

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: 'Validation fails' });
        }

        const { id } = request.params;
        const { name } = request.body;

        const recipient = await Recipient.findByPk(id);

        if (name && name !== recipient.name) {
            const recipientExists = await Recipient.findOne({
                where: { name },
            });

            if (recipientExists) {
                return response
                    .status(400)
                    .json({ error: 'Recipient already exists' });
            }
        }

        const recipient_updated = await recipient.update(request.body);

        return response.json(recipient_updated);
    }

    async delete(request, response) {
        const { id } = request.params;
        const recipient = await Recipient.findByPk(id);

        if (!recipient) {
            return response.json({ error: 'Invalid recipient' });
        }

        await recipient.update({ deleted_at: new Date() });

        return response.json(recipient);
    }
}

export default new RecipientController();
