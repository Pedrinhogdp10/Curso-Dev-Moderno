let isativo = false
console.log(isativo)

isativo = true
console.log(isativo) // Sempre usa let quando precisar alterar as variaveis
                     // Semprempriorizar constantes ao inves de veriaveis no codigo

isativo = 1
console.log(!isativo)
console.log(!!isativo)

console.log('Os verdadeiros...')
console.log(!!3) // ! significa negação.
console.log(!![]) // Quando tem dois (!!) é a negação da negação voltando a ideia inicial
console.log(!!' ')
console.log(!!'texto')
console.log(!!Infinity)
console.log(!!(isativo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isativo = false))

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' '))
console.log(('' || null || 0 || 'epa'))

let nome = 'Pedrinho'
console.log(nome || 'desconhecido')
