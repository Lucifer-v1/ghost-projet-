const { getStreamsFromAttachment, log } = global.utils;
const mediaTypes = ["photo", 'png', "animated_image", "video", "audio"];

module.exports = {
	config: {
		name: "callad",
		version: "1.7",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "gửi báo cáo, góp ý, báo lỗi,... của bạn về admin bot",
			en: "send report, feedback, bug,... to admin bot"
		},
		category: "contacts admin",
		guide: {
			vi: "   {pn} <tin nhắn>",
			en: "   {pn} <message>"
		}
	},

	langs: {
		vi: {
			missingMessage: "Vui lòng nhập tin nhắn bạn muốn gửi về admin",
			sendByGroup: "\n- Được gửi từ nhóm: %1\n- Thread ID: %2",
			sendByUser: "\n- Được gửi từ người dùng",
			content: "\n\nNội dung:\n─────────────────\n%1\n─────────────────\nPhản hồi tin nhắn này để gửi tin nhắn về người dùng",
			success: "Đã gửi tin nhắn của bạn về %1 admin thành công!\n%2",
			failed: "Đã có lỗi xảy ra khi gửi tin nhắn của bạn về %1 admin\n%2\nKiểm tra console để biết thêm chi tiết",
			reply: "📍 Phản hồi từ admin %1:\n─────────────────\n%2\n─────────────────\nPhản hồi tin nhắn này để tiếp tục gửi tin nhắn về admin",
			replySuccess: "Đã gửi phản hồi của bạn về admin thành công!",
			feedback: "📝 Phản hồi từ người dùng %1:\n- User ID: %2%3\n\nNội dung:\n─────────────────\n%4\n─────────────────\nPhản hồi tin nhắn này để gửi tin nhắn về người dùng",
			replyUserSuccess: "Đã gửi phản hồi của bạn về người dùng thành công!",
			noAdmin: "Hiện tại bot chưa có admin nào"
		},
		en: {
			missingMessage: "🍀🩸𝗘𝗡𝗧𝗥𝗘 𝗟𝗔 𝗥𝗔𝗜𝗦𝗢𝗡 𝗣𝗢𝗨𝗥 𝗟𝗔 𝗤𝗨𝗘𝗟𝗟𝗘 𝗧𝗨 𝗩𝗘𝗨𝗫 𝗖𝗢𝗡𝗧𝗔𝗖𝗧𝗘𝗥 𝗠𝗥 𝐋𝐔𝐂𝐈𝐅𝐄𝐑 🩸🍀  .... ☯",
			sendByGroup: "",
			sendByUser: "",
			content: "\n🍷 ════ •⊰❂⊱• ════ 🍷\n\n『%1』\n🍷 ════ •⊰❂⊱• ════ 🍷\n 🍀🩸 𝑀𝑂𝑅𝑁𝐼𝑁𝐺 𝑆𝑇𝐴𝑅 🩸🍀",
			success: "𝐆𝐞𝐧𝐢𝐚𝐥 🙂 𝐭𝐨𝐧 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐯𝐞𝐫𝐬  %1 𝑳𝑼𝑪𝑰𝑭𝑬𝑹 🩸🍀 𝐚 𝐞𝐭𝐞 𝐞𝐧𝐯𝐨𝐲𝐞𝐫 𝐚𝐯𝐞𝐜 𝐬𝐮𝐜𝐜𝐞𝐬!✅😇\n%2",
			failed: "🤧 𝐔𝐧𝐞 𝐞𝐫𝐫𝐞𝐮𝐫 𝐜𝐞𝐬𝐭 𝐩𝐫𝐨𝐝𝐮𝐢𝐭𝐞 𝐥𝐨𝐫𝐬 𝐝𝐞 𝐥𝐞𝐧𝐯𝐨𝐢𝐞 𝐝𝐮 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐯𝐞𝐫𝐬 %1 𝑳𝑼𝑪𝑰𝑭𝑬𝑹 🩸🍀\n%2\n𝐃𝐨𝐦𝐦𝐚𝐠𝐞 🤧",
			reply: "╔════ ≪ 🍷 ≫ ════╗\n\n『%2』\n╚════ ≪ 🍷 ≫ ════╝\n🍀🩸 𝑀𝑂𝑅𝑁𝐼𝑁𝐺 𝑆𝑇𝐴𝑅 🩸🍀",
			replySuccess: "𝑅𝑒𝑝𝑜𝑠𝑒 𝑒𝑛𝑣𝑜𝑦𝑒𝑟 𝑎 𝑴𝒓 𝑳𝑼𝑪𝑰𝑭𝑬𝑹 𝑎𝑣𝑒𝑐 𝑠𝑢𝑐𝑐𝑒𝑠 🩸🍀!",
			feedback: " ━━━━━━━━━━━━━━\n\n 『%4』\n ━━━━━━━━━━━━━━\n🍀🩸 𝑀𝑂𝑅𝑁𝐼𝑁𝐺 𝑆𝑇𝐴𝑅 🩸🍀",
			replyUserSuccess: "𝑴𝒓 𝑳𝑼𝑪𝑰𝑭𝑬𝑹  𝑣𝑜𝑡𝑟𝑒 𝑟𝑒𝑝𝑖𝑛𝑠𝑒 𝑎 𝑒𝑡𝑒 𝑒𝑛𝑣𝑜𝑦𝑒𝑟 𝑎𝑣𝑒𝑐 𝑠𝑢𝑐𝑐𝑒𝑠 🩸🍀!",
			noAdmin: "Bot has no admin at the moment"
		}
	},

	onStart: async function ({ args, message, event, usersData, threadsData, api, commandName, getLang }) {
		const { config } = global.GoatBot;
		if (!args[0])
			return message.reply(getLang("missingMessage"));
		const { senderID, threadID, isGroup } = event;
		if (config.adminBot.length == 0)
			return message.reply(getLang("noAdmin"));
		const senderName = await usersData.getName(senderID);
		const msg = "==𓅓 𝐂𝐚𝐥𝐥 𝑀𝑟 𝐋𝐔𝐂𝐈𝐅𝐄𝐑 🩸🍀 𓅓=="
			+ `\n- User Name: 🧸${senderName}🧸`
			+ `\n- User ID: 👑${senderID}👑`
			+ (isGroup ? getLang("sendByGroup", (await threadsData.get(threadID)).threadName, threadID) : getLang("sendByUser"));

		const formMessage = {
			body: msg + getLang("content", args.join(" ")),
			mentions: [{
				id: senderID,
				tag: senderName
			}],
			attachment: await getStreamsFromAttachment(
				[...event.attachments, ...(event.messageReply?.attachments || [])]
					.filter(item => mediaTypes.includes(item.type))
			)
		};

		const successIDs = [];
		const failedIDs = [];
		const adminNames = await Promise.all(config.adminBot.map(async item => ({
			id: item,
			name: await usersData.getName(item)
		})));

		for (const uid of config.adminBot) {
			try {
				const messageSend = await api.sendMessage(formMessage, uid);
				successIDs.push(uid);
				global.GoatBot.onReply.set(messageSend.messageID, {
					commandName,
					messageID: messageSend.messageID,
					threadID,
					messageIDSender: event.messageID,
					type: "userCallAdmin"
				});
			}
			catch (err) {
				failedIDs.push({
					adminID: uid,
					error: err
				});
			}
		}

		let msg2 = "";
		if (successIDs.length > 0)
			msg2 += getLang("success", successIDs.length,
				adminNames.filter(item => successIDs.includes(item.id)).map(item => ` <@${item.id}> (${item.name})`).join("\n")
			);
		if (failedIDs.length > 0) {
			msg2 += getLang("failed", failedIDs.length,
				failedIDs.map(item => ` <@${item.adminID}> (${adminNames.find(item2 => item2.id == item.adminID)?.name || item.adminID})`).join("\n")
			);
			log.err("CALL ADMIN", failedIDs);
		}
		return message.reply({
			body: msg2,
			mentions: adminNames.map(item => ({
				id: item.id,
				tag: item.name
			}))
		});
	},

	onReply: async ({ args, event, api, message, Reply, usersData, commandName, getLang }) => {
		const { type, threadID, messageIDSender } = Reply;
		const senderName = await usersData.getName(event.senderID);
		const { isGroup } = event;

		switch (type) {
			case "userCallAdmin": {
				const formMessage = {
					body: getLang("reply", senderName, args.join(" ")),
					mentions: [{
						id: event.senderID,
						tag: senderName
					}],
					attachment: await getStreamsFromAttachment(
						event.attachments.filter(item => mediaTypes.includes(item.type))
					)
				};

				api.sendMessage(formMessage, threadID, (err, info) => {
					if (err)
						return message.err(err);
					message.reply(getLang("replyUserSuccess"));
					global.GoatBot.onReply.set(info.messageID, {
						commandName,
						messageID: info.messageID,
						messageIDSender: event.messageID,
						threadID: event.threadID,
						type: "adminReply"
					});
				}, messageIDSender);
				break;
			}
			case "adminReply": {
				let sendByGroup = "";
				if (isGroup) {
					const { threadName } = await api.getThreadInfo(event.threadID);
					sendByGroup = getLang("sendByGroup", threadName, event.threadID);
				}
				const formMessage = {
					body: getLang("feedback", senderName, event.senderID, sendByGroup, args.join(" ")),
					mentions: [{
						id: event.senderID,
						tag: senderName
					}],
					attachment: await getStreamsFromAttachment(
						event.attachments.filter(item => mediaTypes.includes(item.type))
					)
				};

				api.sendMessage(formMessage, threadID, (err, info) => {
					if (err)
						return message.err(err);
					message.reply(getLang("replySuccess"));
					global.GoatBot.onReply.set(info.messageID, {
						commandName,
						messageID: info.messageID,
						messageIDSender: event.messageID,
						threadID: event.threadID,
						type: "userCallAdmin"
					});
				}, messageIDSender);
				break;
			}
			default: {
				break;
			}
		}
	}
};
