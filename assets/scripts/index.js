// 1. Создаем переменную с алфавитом
// const alphabet=['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];

// 2. Создаем четыре случайных индекса
// const randomIndex1=Math.floor(Math.random()*alphabet.length);
// const randomIndex2=Math.floor(Math.random()*alphabet.length);
// const randomIndex3=Math.floor(Math.random()*alphabet.length);
// const randomIndex4=Math.floor(Math.random()*alphabet.length);

// 3. Извлекаем символы из алфавита по полученным индексам и объединяем их в строку
// const randomWord=alphabet[randomIndex1]+alphabet[randomIndex2]+alphabet[randomIndex3]+alphabet[randomIndex4];

// // 4. Выводим полученное случайное слово на экран
// console.log(randomWord);

// 1. Создаем переменную с алфавитом
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// 2. Создаем четыре случайных индекса
var randomIndex1 = Math.floor(Math.random() * alphabet.length);
var randomIndex2 = Math.floor(Math.random() * alphabet.length);
var randomIndex3 = Math.floor(Math.random() * alphabet.length);
var randomIndex4 = Math.floor(Math.random() * alphabet.length);

// // 3. Извлекаем символы из алфавита по полученным индексам и объединяем их в строку
var randomWord = alphabet[randomIndex1] + alphabet[randomIndex2] + alphabet[randomIndex3] + alphabet[randomIndex4];

// // 4. Выводим полученное случайное слово на экран
console.log(randomWord);
