const commonProps = {
    status: "Situação",
    createdAt: "Criação em",
    updatedAt: "Atualização em",
    user_id: "Criado por",
  };

export default {
    Users: {
        actions: {
          resetPassword: "Redefinir senha",
        },
        properties: {
          id: "ID",
          name: "Nome",
          email: "Email",
          password: "Senha",
          passwordHash: "Senha criptografada",
          role: "Perfil",
          ...commonProps,
        },
      },
      Categorias: {
        properties: {
          id: "ID",
          name: "Tipo de materia-prima",
          und_medida: "Unidade de medida",
          estoque_min: "Estoque minimo",
          ...commonProps,
        },
      },
      Destinos: {
        properties: {
          id: "ID",
          name: "Destinos",
          fone: "Contato",
          ...commonProps,
        },
      },
      Requisitantes: {
        properties: {
          id: "ID",
          name: "Requisitante",
          fone: "Contato",
          ...commonProps,
        },
      },
      Fornecedores: {
        properties: {
          id: "ID",
          name: "Fornecedores",
          fone: "Contato",
          ...commonProps,
        },
      },
      Transportadoras: {
        properties: {
          id: "ID",
          name: "Transportadoras",
          fone: "Contato",
          ...commonProps,
        },
      },
      Materiais: {
        properties: {
          id: "ID",
          name: "Descrição",
          categorias_id: "Tipo",
          ...commonProps,
        },
      },
      Transacoes_entradas: {
        properties: {
          id: "ID",
          material_id: "Material",
          qtd: "Quantidade",
          valor: "Valor R$",
          fornecedora_id: "Fornecedora",
          nfe: "NF-e",
          transportadora_id: "Transportadora",
          valor_frete: "Valor de frete R$",
          obs: "Observação",
          ...commonProps,
        },
      },
      Transacoes_saidas: {
        properties: {
          id: "ID",
          material_id: "Material",
          qtd: "Quantidade",
          valor: "Valor R$",
          destino_id: "Destinado a",
          op: "Ordem de Produção",
          requisitante_id: "Requisitante",
          obs: "Observação",
          ...commonProps,
        },
      },
}