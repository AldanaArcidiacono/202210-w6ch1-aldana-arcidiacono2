// Aqui escribiremos la estructura de nuestras actions para no hacerlo a mano

// Puede ser un objeto o (Es lo mismo que sea un objeto)
export const actionTypes = {
    add: 'tasks@add',
    delete: 'tasks@delete',
    update: 'tasks@update',
    load: 'task@load',
};

// Puede ser un enum (enum es mas typescript pero no es importante)
export enum actionTypesE {
    add = 'tasks@add',
    delete = 'tasks@delete',
    update = 'tasks@update',
    load = 'task@load',
}
