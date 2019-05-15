import { PREFIXPANEL } from "./constants";
export default {
    items: [
      {
        name: 'Dashboard',
        url: '/panel',
        icon: 'fa fa-cog',
      },
      {
        title: true,
        name: 'Menu',
        wrapper: {
          element: '',
          attributes: {},
        },
      },
      {
        name: 'Usuarios',
        url: `${PREFIXPANEL}/users`,
        icon: 'fa fa-user',
        children: [
          {
            name: 'Lista de usuarios',
            url: `${PREFIXPANEL}/users`,
            icon: 'fa fa-list',
          },
          {
            name: 'Nuevo Usuario',
            url: `${PREFIXPANEL}/users/new`,
            icon: 'fa fa-plus',
          }
        ],
      },
      {
        name: 'Categorias',
        url: `${PREFIXPANEL}/categories`,
        icon: 'fa fa-cogs',
        children: [
          {
            name: 'Lista de categorias',
            url: `${PREFIXPANEL}/categories`,
            icon: 'fa fa-list',
          },
          {
            name: 'Nueva Categoria',
            url: `${PREFIXPANEL}/categories/new`,
            icon: 'fa fa-plus',
          }
        ],
      },
      {
        name: 'Products',
        url: `${PREFIXPANEL}/products`,
        icon: 'fa fa-puzzle-piece',
        children: [
          {
            name: 'Lista de productos',
            url: `${PREFIXPANEL}/products`,
            icon: 'fa fa-list',
          },
          {
            name: 'Nuevo Producto',
            url: `${PREFIXPANEL}/products/new`,
            icon: 'fa fa-plus',
          }
        ],
      }
      
    ],
  };
  