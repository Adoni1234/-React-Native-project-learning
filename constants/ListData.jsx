export const ListData = (id) =>{
    list = [
        {
            title: "Design Thinking",
            person:"55",
            star:"4.1",
            price:"50",
            image:"../components/screens/ScreenById",
            course : [
                {
                    mins : '5:35',
                    title: "Welcome to the Course"
                },
                {
                    mins : '5:35',
                    title: "Design Thinking Process"
                },
                {
                    mins : '5:35',
                    title: ">Design Thinking - Into"
                }
            ]
        },

        {
            title: "Design Thinking",
            person:"55",
            star:"4.1",
            price:"50",
            image:"",
            course : [
                {
                    mins : '5:35',
                    title: "Welcome to the Course"
                },
                {
                    mins : '5:35',
                    title: "Design Thinking Process"
                },
                {
                    mins : '5:35',
                    title: ">Design Thinking - Into"
                }
            ]
        }


    ]

    return list[id]
}