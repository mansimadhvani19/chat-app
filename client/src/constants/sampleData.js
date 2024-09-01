export const sampleChats =[
        {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Doe",
            _id: "1",
            groupChat: false,
            members: ["1", "2"],
        },

        {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "Emily Doe",
            _id: "2",
            groupChat: true,
            members: ["1", "2"],
        },
    ];

export const sampleUsers=[
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
    },

    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Emily Doe",
        _id: "2",
    },
];

export const sampleNotifications=[
    {
        sender:{
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Doe",
        },
        _id: "1",
    },

    {
        sender:{
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "Emily Doe",
        },
        _id: "2",
    },
];

export const sampleMessage = [
    {
        attachments: [
            {
                public_id: "asdasd",
                url: "https://www.w3schools.com/howto/img_avatar.png"
            },
        ],
        content: "Hello! I hope you are doing great.",
        _id: "sffrtjgnvnvnrthg",
        sender:{
            _id: "user._id",
            name: "Mansi",
        },
        chat: "chatId",
        createdAt: "2024-08-31T10:41:30.630Z",
    },

    {
        attachments: [
            {
                public_id: "asdasd",
                url: "https://www.w3schools.com/howto/img_avatar.png"
            },
        ],
        content: "Yup. I am good. How about you?",
        _id: "sffrtjgnvnvnr1243thg",
        sender:{
            _id: "sdfsdfsdf",
            name: "Mansi",
        },
        chat: "chatId",
        createdAt: "2024-08-31T10:41:30.630Z",
    },
]