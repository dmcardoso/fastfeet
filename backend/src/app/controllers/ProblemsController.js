import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';

class ProblemsController {
    async index(request, response) {
        const { page = 1 } = request.query;
        const deliveries = await DeliveryProblem.findAndCountAll({
            limit: 10,
            offset: (page - 1) * 10,
            include: [
                {
                    model: Delivery,
                    as: 'delivery',
                },
            ],
        });

        return response.json(deliveries);
    }
}

export default new ProblemsController();
