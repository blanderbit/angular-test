
export const getUsers = () => {
    try {
        const strObj: any = localStorage.getItem('users');
        return JSON.parse(strObj) || []
    } catch (e) {
        return []
    }
};

export const post = {
    register: (data: any) => { // TODO need to add type
        debugger
        const res = {
            ...data,
            id: "id_" + Math.random().toString(16).slice(2)
        };

        const users = getUsers();
        users.push(res);

        localStorage.setItem('users', JSON.stringify(users));

        return {}
    },
    login: (data: any) => { // TODO need to add type
        const users = getUsers();
        users.find((user: any) => user.password === data.password) // TODO need to add type
    },
    users: () => getUsers()
};