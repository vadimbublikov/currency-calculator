
const currencies = [
    {
        isFavorite: false,
        code: "CAD",
        name: "Канадский доллар",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_kanada_new.jpg?itok=YGkeJqeS",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "HKD",
        name: "Гонконгский доллар",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_gonkong_enl.jpg?itok=dK5NZFJHg",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "ISK",
        name: "Исландская крона",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_islandija_new.jpg?itok=tTtXtok4g",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "PHP",
        name: "Филиппинское песо",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_filippiny_enl.jpg?itok=qEF-nyUT",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "DKK",
        name: "Датская крона",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_danija_enl.jpg?itok=_jItbqhG",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "HUF",
        name: "Венгерский форент",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_vengrija_new_0.jpg?itok=pBtwRjtq",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "CZK",
        name: "Чешская крона",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_chehija_enl.jpg?itok=sGu3fL8K",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "AUD",
        name: "Австралийский доллар",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_avstraliya_enl.jpg?itok=acwUv1lf",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "RON",
        name: "Румынский лей",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_rumynija_enl_0.jpg?itok=7izHLQLf",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "SEK",
        name: "Шведская крона",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_shvetsija_new.jpg?itok=-ohJMaHd",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "IDR",
        name: "Индонезийская рупия",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_indonezija_new.jpg?itok=ijyzdQZ9",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "INR",
        name: "Индийская рупия",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_indija_new.jpg?itok=JthqIjDQ",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "BRL",
        name: "Бразильский реал",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_brazilija_enl.jpg?itok=9QaZ_f_Y",
        rate: 0.00
    },
    {
        isFavorite: true,
        code: "RUB",
        name: "Российский рубль",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_rf_enl.jpg?itok=ULSeepRk",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "HRK",
        name: "Хорватская куна",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_horvatija_new.jpg?itok=UW2Ad1ns",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "JPY",
        name: "Японская иена",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_japonija_enl.jpg?itok=zbXuRB4l",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "THB",
        name: "Тайский бат",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_tailand_new.jpg?itok=-M3A14-x",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "CHF",
        name: "Швейцарский франк",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_shvejtsarija_new.jpg?itok=_16tSOon",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "SGD",
        name: "Сингапурский доллар",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_singapur_new.jpg?itok=yKqfEffp",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "PLN",
        name: "Польский злотый",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_polsha_enl.jpg?itok=FqbWDb5P",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "BGN",
        name: "Болгарский лев",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_bolgarija_enl.jpg?itok=B1bmT3Vy",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "TRY",
        name: "Турецкая лира",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_turtsija_enl.jpg?itok=4FNd1iT4",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "CNY",
        name: "Китайский юань",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_kitaji_new.jpg?itok=9x00S3E4",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "NOK",
        name: "Норвежская крона",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_norvegija_enl.jpg?itok=O7i7UvZ4",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "NZD",
        name: "Новозеландский доллар",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_new_zeland_enl.jpg?itok=Aa1cp3Rf",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "ZAR",
        name: "Южноафриканский рэнд",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_juar_enl.jpg?itok=1mhijiUM",
        rate: 0.00
    },
    {
        isFavorite: true,
        code: "USD",
        name: "Доллар США",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_usa_enl.jpg?itok=7v3_HW-U",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "MXN",
        name: "Мексиканское песо",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_meksika_new.jpg?itok=p9yI5XwM",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "ILS",
        name: "Израильский шекель",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_izrail_enl.jpg?itok=RKBTYsLb",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "GBP",
        name: "Фунт стерлингов",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_velikobritanija_new.jpg?itok=WpoIClkv",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "KRW",
        name: "Южнокорейская вона",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/directory_names/flag_juznaja_koreja_enl.jpg?itok=nPHPN1X2",
        rate: 0.00
    },
    {
        isFavorite: false,
        code: "MYR",
        name: "Малайзийский ринггит",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/h_100/public/images/shop/products/flag_malayzija_new.jpg?itok=u4hMk4HC",
        rate: 0.00
    },
    {
        isFavorite: true,
        code: "EUR",
        name: "Евро",
        bannerUri: "https://www.megaflag.ru/sites/default/files/styles/galleryformatter_slide/public/images/shop/products/flag_ees_enl.jpg?itok=MmJbuaLR",
        rate: 0.00
    }
]

export default currencies