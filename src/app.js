if ('serviceWorker' in navigator){
  // Yay, service workers work!
  navigator.serviceWorker.register('/service-worker.js');
}
