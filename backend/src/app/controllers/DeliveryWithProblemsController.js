import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import DeliveryProblem from '../models/DeliveryProblem';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliveryWithProblems {
    async index(request, response) {
        const { page = 1, q = '' } = request.query;
        const deliveries = await Delivery.findAndCountAll({
            order: ['product'],
            limit: 10,
            offset: (page - 1) * 10,
            product: {
                [Op.substring]: q,
            },
            include: [
                {
                    model: DeliveryProblem,
                    as: 'delivery_problems',
                    required: true,
                },
                {
                    model: File,
                    as: 'signature',
                    attributes: ['path', 'url', 'name'],
                },
                {
                    model: Recipient,
                    as: 'recipients',
                    attributes: [
                        'name',
                        'street',
                        'number',
                        'complement',
                        'city',
                        'state',
                        'cep',
                    ],
                },
                {
                    model: Deliveryman,
                    as: 'deliveryman',
                    attributes: ['name', 'email'],
                    include: [
                        {
                            model: File,
                            as: 'avatar',
                            attributes: ['path', 'url', 'name'],
                        },
                    ],
                },
            ],
        });

        return response.json(deliveries);
    }
}

export default new DeliveryWithProblems();
