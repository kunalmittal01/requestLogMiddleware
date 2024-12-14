import express from 'express';
const app = express();

app.use((req, res, next)=>{
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`Request Received:\n Method: ${req.method}\n URL: ${req.baseUrl + req.url}\n Timestamps: ${new Date()}\n duration:${duration}ms\n Status: ${res.statusCode}\n`);
      });
    next();
})
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('*', (req, res) => {
    res.status(404).send('Page not found');
})
app.listen(8080,() => {
    console.log('server is listening on port 8080')
});