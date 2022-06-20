import Transportadoras from "../models/transportadoras"

export default {
  resource: Transportadoras,
  options: {
    parent: {
      icon: 'DeliveryTruck'
    },
    properties: {
      id: {
        position: 1
      },
      name: {
        position: 2,
        isRequired: true
      },
      fone: {
        position: 3
      },
      user_id: {
        position: 4
      },
      createdAt: {
        position: 5
      },
      updatedAt: {
        position: 6
      }
    }
  }

}