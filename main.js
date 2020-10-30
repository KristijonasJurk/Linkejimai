const dataLinkejimai = [
    'Ilgiausių metų ilgiausių'
    ,
    'Sveikatos metų sveikatos'
    ,
    'Daug pinigų'
    ,
    'Remember to smile...'
    ,
    'Kad viskas būtų allgood'
    ,
    'Sveikinimai iš Danijos!'
    ,
    'Auk diduti, būk geruti'
    ,
    'Always išlik tokia pat awesome'
    ,
    'Tegul visos Tavo svajonės pavirsta realybe, O realybė – išsipildžiusia svajone'
    ,
    'Hapy Birsdeeii Liussyy'
    ,
    'Tokia ypatinga proga linkiu gaivių idėjų, aštrių įspūdžių, saldžių akimirkų ir riebios piniginės!'
    ,
    'Gero gimtadienio! Švęsk ilgai, pagiriokis trumpai!'
    ,
    'Su atsiradimo diena! Duok penkis! Taip ir toliau!'
    ,
    'Būdavo tortadieniai, o dabar - šampadieniai! Ir kada spėjai taip užaugt???'
    ,
    'Kad sektus moksluose'
];
const dataAutorius = [
    '- Šeima',
    '- Šeima',
    '- Matas Vzesniauskas',
    '- Kristijonas',
    '- Viktorija Emde',
    '- Arvydas',
    '- Ačas',
    '- Živilė',
    '- Rūtelė',
    '- Ratish',
    '- Jaroslav',
    '- Elzė',
    '- Paulekas',
    '- Voldemaras',
    '- Anonimas'
]

const button = document.querySelector('button');
const linkejimai = document.querySelector('.linkejimai');
const autorius = document.querySelector('.autorius');

button.addEventListener('click', function () {
    let number = '';
    let skaicius = '';
    for (let i = 0; i < dataLinkejimai.length; i++) {
        const index = Math.floor(Math.random() * dataLinkejimai.length);
        number += dataLinkejimai[index];
        skaicius += dataAutorius[index];
        linkejimai.textContent = number;
        autorius.textContent = skaicius;

        return console.log(autorius);
    }

})

