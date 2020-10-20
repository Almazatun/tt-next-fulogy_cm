export default (req, res) =>  {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ email: 'Ivanova@mail.ru', phone: 'Укажите номер телефона' }))
}
