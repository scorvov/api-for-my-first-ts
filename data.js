class Data {
    constructor() {
        this.products = [
            {
                id: 1,
                name: 'Mersedes S550 4matic',
                cost: 118000,
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg/1200px-Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg',
                info: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации существенных финансовых и административных условий.',
                dateUp: new Date('05.20.2019'),
                productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
                    {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
                    {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
            },
            {
                id: 2,
                name: 'Mersedes',
                cost: 55000,
                img: 'https://img.drivemag.net/jato_car_photos/MERCEDES%2FS-CLASS%2Fsedan%2F4%2F2009%2Fexterior-photos%2Fo%2Fmercedes-s-class-sedan-4-doors-2009-model-exterior-photos-0.jpg',
                info: '',
                dateUp: new Date('05.30.2019'),
                productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
                    {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
                    {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
            },
            {
                id: 3,
                name: 'AUDI',
                cost: 118000,
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg/1200px-Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg',
                info: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации существенных финансовых и административных условий.',
                dateUp: new Date('03.20.2019'),
                productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
                    {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
                    {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
            },
            {
                id: 4,
                name: 'Tayota',
                cost: 35000,
                img: 'https://img.drivemag.net/jato_car_photos/MERCEDES%2FS-CLASS%2Fsedan%2F4%2F2009%2Fexterior-photos%2Fo%2Fmercedes-s-class-sedan-4-doors-2009-model-exterior-photos-0.jpg',
                info: '',
                dateUp: new Date('05.20.2018'),
                productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
                    {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
                    {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
            },
            {
                id: 5,
                name: 'Mazda',
                cost: 20000,
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg/1200px-Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg',
                info: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации существенных финансовых и административных условий.',
                dateUp: new Date('05.22.2019'),
                productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
                    {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
                    {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
            },
            {
                id: 6,
                name: 'VW',
                cost: 1000,
                img: 'https://img.drivemag.net/jato_car_photos/MERCEDES%2FS-CLASS%2Fsedan%2F4%2F2009%2Fexterior-photos%2Fo%2Fmercedes-s-class-sedan-4-doors-2009-model-exterior-photos-0.jpg',
                info: '',
                dateUp: new Date('05.23.2019'),
                productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
                    {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
                    {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
            },
            {
                id: 7,
                name: 'Lexus',
                cost: 200000,
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg/1200px-Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg',
                info: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации существенных финансовых и административных условий.',
                dateUp: new Date('04.07.2019'),
                productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
                    {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
                    {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
            },
            {
                id: 8,
                name: 'BMW',
                cost: 175000,
                img: 'https://img.drivemag.net/jato_car_photos/MERCEDES%2FS-CLASS%2Fsedan%2F4%2F2009%2Fexterior-photos%2Fo%2Fmercedes-s-class-sedan-4-doors-2009-model-exterior-photos-0.jpg',
                info: '',
                dateUp: new Date('10.12.2019'),
                productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
                    {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
                    {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
            },
            {
                id: 9,
                name: 'Opel',
                cost: 8000,
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg/1200px-Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg',
                info: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации существенных финансовых и административных условий.',
                dateUp: new Date('07.05.2019'),
                productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
                    {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
                    {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
            },
            {
                id: 10,
                name: 'Alfa-Romeo',
                cost: 55000,
                img: 'https://img.drivemag.net/jato_car_photos/MERCEDES%2FS-CLASS%2Fsedan%2F4%2F2009%2Fexterior-photos%2Fo%2Fmercedes-s-class-sedan-4-doors-2009-model-exterior-photos-0.jpg',
                info: '',
                dateUp: new Date('03.25.2019'),
                productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
                    {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
                    {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
            },
            {
                id: 11,
                name: 'Ford',
                cost: 80000,
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg/1200px-Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg',
                info: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации существенных финансовых и административных условий.',
                dateUp: new Date('01.15.2019'),
                productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
                    {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
                    {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
            },
            {
                id: 12,
                name: 'Shevrolet',
                cost: 133000,
                img: 'https://img.drivemag.net/jato_car_photos/MERCEDES%2FS-CLASS%2Fsedan%2F4%2F2009%2Fexterior-photos%2Fo%2Fmercedes-s-class-sedan-4-doors-2009-model-exterior-photos-0.jpg',
                info: '',
                dateUp: new Date('06.15.2019'),
                productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
                    {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
                    {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
            }
        ];
        this.props = [
            {
                id: 1,
                name: 'Цвет авто',
                type: 'dropdown'
            },
            {
                id: 2,
                name: 'Год выпуска',
                type: 'number'
            },
            {
                id: 3,
                name: 'Тип топлива',
                type: 'string'
            }
        ]
    }
    getProducts() {
        return this.products;
    }
    getProps() {
        return this.props;
    }
}

module.exports = Data;