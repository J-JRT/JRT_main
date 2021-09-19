 module.exports.config = {
  name: "timing",
   version: "1.0.0",
    hasPermssion: 0,
     credits: "Jukie~",
      description: "tính khoảng cách 2 mốc thời gian được xác định từ trước",
       commandCategory: "general",
        usages: "timing [dd/mm/yyyy => dd/mm/yyyy]",
         cooldowns: 5
         };

         module.exports.run = async ({ api, event,args }) => {
         const axios = global.nodemodule["axios"];
         let thoigian = args.join(" ");
         const res = await axios.get(`https://le31.glitch.me/age?q=${thoigian}`);
         var thoigian1 = res.data.data;
         return api.sendMessage(`⚡Mốc thời gian được xác định là:\n${thoigian1} `, event.threadID, event.messageID)
         }