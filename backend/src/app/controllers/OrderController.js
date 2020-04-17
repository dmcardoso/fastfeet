import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import File from '../models/File';

class OrderController {
    async index(request, response) {
        const { deliverymanId } = request.params;
        const { page = 1, type } = request.query;

        const deliveries = await Delivery.findAndCountAll({
            where: {
                end_date:
                    type && type === 'completed'
                        ? {
                              [Op.ne]: null,
                          }
                        : null,
                deliveryman_id: deliverymanId,
            },
            order: [
                ['product', 'asc'],
                ['id', 'asc'],
            ],
            limit: 5,
            offset: (page - 1) * 5,
            include: [
                {
                    model: Recipient,
                    as: 'recipients',
                    attributes: ['name'],
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

export default new OrderController();
