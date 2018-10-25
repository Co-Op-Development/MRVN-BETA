module.exports = {
  experienceGain(client, level, id) {
    const experienceToNextLevel = level * 1000 + 125;
    const experienceGained = Math.floor(Math.random() * 7) + 5;
    const userInfo = client.userInfo.get(id);
    
    if (experienceGained + userInfo.exp > experienceToNextLevel) {
      client.userInfo.setProp(id, "level", level + 1);
    } else {
      client.userInfo.setProp(id, "exp", userInfo.exp + experienceGained);
    }
 
  }
}