export default function(io) {
  io.on('connection', (socket) => {
    let id = socket.id;
    console.log(`pilot ${id} joined`);

    socket.on('state', (state) => {
      socket.broadcast.emit('state', id, state);
    });

    socket.on('disconnect', () => {
      console.log(`pilot ${id} left`);
    });
  });
}
