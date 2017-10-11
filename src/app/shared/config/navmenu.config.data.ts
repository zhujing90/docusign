  export const menuItemsList = [
        {
            menuName: "My Dashboard",
            hasChild: false,
            baseUrl: "/home",
            menuItems:
            [
            ]
        },
        {
            menuName: "Container",
            hasChild: false,
            baseUrl: "/container"
/*             menuName: "Container",
            hasChild: true,
            baseUrl: "",
            menuItems:
            [ 
                {
                    linkName: "Container",
                    url: "/container"
                },
                {
                    linkName: "Container Contents Logs",
                    url: "/containercontentslog"
                },
                {
                    linkName: "Container Tasks",
                    url: "/containertask"
                },
                {
                    linkName: "Location Join Container",
                    url: "/locationjoincontainer"
                },      
            ] */
        },
        {
            menuName: "Location",
            hasChild: true,
            baseUrl: "",
            menuItems:
            [               
                {
                    linkName: "Location",
                    url: "/location"
                }, 
                {
                    linkName: "Room",
                    url: "/room"
                },
                {
                    linkName: "Floor",
                    url: "/floor"
                }, 
                {
                    linkName: "Building",
                    url: "/building"
                }, 
                {
                    linkName: "Address",
                    url: "/address"
                }
            ]
        },
        {
            menuName: "Settings",
            hasChild: true,
            baseUrl: "",
            menuItems:
            [                
            ]
        }, 
    ];