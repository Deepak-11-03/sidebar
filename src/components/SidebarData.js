import React from "react"
import { MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md";

// MdKeyboardArrowUp MdKeyboardArrowDown
const SidebarData =[
    {
        "title":"Dashboard",
        "path":"/"
    },
    {
        "title":"Users",
        "iconOpened": <MdKeyboardArrowUp/>,
        "iconClosed":<MdKeyboardArrowDown/>,
        "subnav":[
            {
                "id":1,
                "title":"All Users",
                "path" : "/users"
            },
            {
                "id":2,
                "title":"Registerd Users",
                "path" : "/users/registerd"
            },
            {
                "id":3,
                "title":"Deleted Users",
                "path" : "/users/deleted"
            }
        ]
    },
    {
        "title":"Category",
        "iconOpened": <MdKeyboardArrowUp/>,
        "iconClosed":<MdKeyboardArrowDown/>,
        "subnav":[
            {
                "id":1,
                "title":"Instagram",
                "path":"/instagram"
            },
            {
                "id":2,
                "title":"Facebook",
                "path":"/facebook"
            }
        ]
    },
    {
        "title":"Post",
        "iconOpened": <MdKeyboardArrowUp/>,
        "iconClosed":<MdKeyboardArrowDown/>,
        "subnav":[
            {
                "id":1,
                "title":"All Post"
            },
            {
                "id":2,
                "title":"Your Post"
            },
            {
                "id":3,
                "title":"Deleted Post"
            }
        ]
    },
    {
        "title":"Setting",
        "iconOpened": <MdKeyboardArrowUp/>,
        "iconClosed":<MdKeyboardArrowDown/>,
        "subnav":[
            {
                "id":1,
                "title":"User Setting",
                "path":"/user-setting"
            },
            {
                "id":2,
                "title":"App Setting",
                "path":"/app-setting"
            }
        ]
    },
    {
        "title":"About",
        "path":"/about"
    }
]

export default SidebarData