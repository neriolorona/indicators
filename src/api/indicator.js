export default {
  list: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'dolar',
            title: 'Dolar Observado',
            unit: 'Pesos',
          },
          {
            id: 2,
            name: 'euro',
            title: 'Euro',
            unit: 'Pesos',
          },
          {
            id: 3,
            name: 'ipc',
            title: 'Indice de precios al consumidor(IPC)',
            unit: 'Porcentaje',
          },
          {
            id: 4,
            name: 'uf',
            title: 'Unidad de fomento(UF)',
            unit: 'Pesos',
          },
          {
            id: 5,
            name: 'utm',
            title: 'Unidad tributaria mensual(UTM)',
            unit: 'Pesos',
          },
        ]);
      }, 3000);
    }),
};
