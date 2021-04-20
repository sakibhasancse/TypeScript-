
import express, { Application } from 'express'
const init = ():Application => {
    let app = express()


    let router = [
        {
            http: 'get',
            path: '/daynamic',
            handler: (req:express.Request, res:express.Response) => {
                res.send(`Welcome to the application\n ${req.method} get`)
            }
        }
    ]

    router.forEach(route => {
        (app as any)[route.http](route.path , route.handler)
    })
     app.get('/', (req, res) => {
        res.send(`Welcome to the application\n ${req.method} get`)
    })
    app.use('/', (req, res) => {
       res.send(`Welcome to the application\n ${req.method} fromappuse`)
    })
    return app
}

const app = init()
const port =3000
app.listen(port, () => {
    console.log('listening on port ' + port)
})  