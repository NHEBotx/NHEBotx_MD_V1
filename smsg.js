// smsg.js
function smsg(nhbtx, message, store) {
  // Process the message and return it in a desired format
  // You can modify this according to your needs
  const messageType = Object.keys(message.message)[0];
  return {
    key: message.key,
    message: message.message[messageType],
    type: messageType,
    sender: message.key.fromMe ? nhbtx.user.id : message.key.remoteJid,
    isGroup: message.key.remoteJid.endsWith('@g.us'),
    ...store
  };
}

module.exports = smsg;