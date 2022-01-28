window.addEventListener('message', event => {
  console.log('EVENT', event.data);
  event.source.postMessage(
    {
      id: event.data.id,
      service: 'identity',
      payload: {},
    },
    'https://identity.deso.org',
  );
});
