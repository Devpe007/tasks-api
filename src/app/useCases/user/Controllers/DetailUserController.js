import DetailUserService from '../services/DetailUserService';

class DetailUserController {
  async handle(request, response) {
    const { userId } = request;

    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute(userId);

    return response.status(200).json(user);
  };
};

export default DetailUserController;
