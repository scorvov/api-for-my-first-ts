const desc = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
};
const stableSort = (array, cmp) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
};
const getSorting = (order, orderBy) => {
    return order === "desc"
        ? (a, b) => desc(a, b, orderBy)
        : (a, b) => -desc(a, b, orderBy);
};

const responsePageData = (data, req, res) => {
    const {perPage, currentPage, order, orderBy} = req.body;
    const count = data.length;
    const start = perPage * (currentPage);
    const end = start + perPage;
    const items = stableSort(data, getSorting(order, orderBy)).slice(start, end);
    const filterParams = {count, perPage, currentPage, order, orderBy};
    (data[0].cost) ?
        res.json({
            productsList: {
                ...filterParams,
                products: items.map(({id, name, cost, dateUp}) => ({id, name, cost, dateUp}))
            }
        })
        : res.json({
            propsList: {
                ...filterParams,
                props: items
            }
        });

};

const user = {
    userId: 'qwerty2301',
    login: 'Scorpio'
};
const isAuth = (req, res, func) => {
    if (req.cookies.user && JSON.stringify(req.cookies.user) === JSON.stringify(user)) {
        func();
    } else res.status(401).send('Error authorization');
};

module.exports = {isAuth, responsePageData };