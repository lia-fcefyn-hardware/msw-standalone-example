const { setupWorker, http, HttpResponse } = MockServiceWorker;

// Definimos el handler
const worker = setupWorker(
    http.get("/rand", () => {
        return HttpResponse.json(Math.random());
    })
);

// Arrancamos el Service Worker
worker.start();