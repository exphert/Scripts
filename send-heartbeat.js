function sendHeartbeat() {
  fetch("https://discord.com/api/v9/quests/REPLACE0/heartbeat", {
      "headers": {
          "authorization": "REPLACE1",
          "content-type": "application/json",
          "x-super-properties": "REPLACE2"
      },
      "body": "{\"stream_key\":\"call:REPLACE3:REPLACE4\",\"terminal\":false}",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
  })
  .then(response => {
      // Handle response if needed
  })
  .catch(error => {
      console.error('Error sending heartbeat:', error);
  });
}
sendHeartbeat();
