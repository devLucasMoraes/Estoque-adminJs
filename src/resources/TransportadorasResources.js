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
      razao_social: {
        position: 3,
      },
      cnpj: {
        position: 4,
      },
      fone1: {
        position: 5
      },
      fone2: {
        position: 6
      },
      user_id: {
        position: 7
      },
      createdAt: {
        position: 8
      },
      updatedAt: {
        position: 9
      }
    }
  }

}